const baseURL = "https://githubstatic.cloud-ip.net/resources/iNews/js/";
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
}

function ready() {
    let items = document.getElementsByName("iNewsItem");
    items.forEach(item =>{
        let newsId = item.getAttribute("data-id")
        console.log("type of:"+(typeof  item))
        if(newsId){
            const content = findContentItem(newsId)
            if(content){
                if(item.getAttribute("data-length")){
                    const length = item.getAttribute("data-length");
                    if(content.title.length > length ){
                        item.innerHTML = content.title.substring(0,length);
                    }else {
                        item.innerHTML = content.title;
                    }
                }else {
                    item.innerHTML = content.title;
                }
                if(item.getAttribute("href")){
                    item.setAttribute("href",baseURL+content.publishDates[0]+"/"+content.publishDates[1]+"/"+content.publishDates[2]+"/"+content.id+".html") ;
                    item.setAttribute("title",content.title);
                }
            }
        }
    })
}

function findContentItem(Id){
    for(let i = 0 ;i<totalRecords.channelContents.length;i++){
        for(let j = 0 ;j<totalRecords.channelContents[i].length;j++){
            if(Id == totalRecords.channelContents[i][j].id){
                return totalRecords.channelContents[i][j];
            }
        }
    }
    return undefined
}
