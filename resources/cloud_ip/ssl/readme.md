# convert the cert file into p12 : 
   openssl pkcs12 -export -in fullchain.crt -inkey private.pem -out fullchain_and_key.p12 -name clouddns
# convert p12 cert file into JKS: 
   keytool -importkeystore -deststorepass '4bf575' -destkeypass '4bf575' -destkeystore clouddns.jks -srckeystore fullchain_and_key.p12 -srcstoretype PKCS12 -srcstorepass '4bf575' -alias clouddns
# openssl s_client -showcerts -connect userapi.cloud-ip.net
