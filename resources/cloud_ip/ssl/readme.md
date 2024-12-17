
以DNS验证的方式生成证书(多_acme-challenge个记录可以同时存在):
docker run -it --rm --name certbot  -v "/home/bigdog/a/ssl.cert/letsencrypt:/etc/letsencrypt" certbot/certbot certonly -d cloud-ip.net -d *.cloud-ip.net --manual --preferred-challenges dns-01 --server https://acme-v02.api.letsencrypt.org/directory





直接运行certbot程序来生成:
 
certbot certonly -d "*.cloud-ip.net" -d cloud-ip.net --manual --preferred-challenges dns-01 --server https://acme-v02.api.letsencrypt.org/directory

成功运行以后证书会存储在/etc/letsencrypt/目录下


# convert the cert file into p12 : 
   openssl pkcs12 -export -in fullchain.crt -inkey private.pem -out fullchain_and_key.p12 -name clouddns
# convert p12 cert file into JKS: 
   keytool -importkeystore -deststorepass '4bf575' -destkeypass '4bf575' -destkeystore clouddns.jks -srckeystore fullchain_and_key.p12 -srcstoretype PKCS12 -srcstorepass '4bf575' -alias clouddns
# openssl s_client -showcerts -connect userapi.cloud-ip.net
