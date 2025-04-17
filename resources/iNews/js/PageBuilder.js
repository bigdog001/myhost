const baseURL = "https://githubstatic.cloud-ip.net/resources/iNews/js/";
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
}
function ready() {
    let items_a = document.getElementsByTagName('a');
    let items_span = document.getElementsByTagName('span');
    let items_label = document.getElementsByTagName('label');
    let items_div = document.getElementsByTagName('div');
    let items = [...items_a, ...items_span, ...items_label,...items_div];

    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (!item) {
            continue;
        }
        let newsId = item.getAttribute("data-id")
        if (!newsId) {
            continue;
        }
        const content = findContentItem(newsId)
        if (!content) {
            continue;
        }
        if(item.nodeName === "IMG" && content.frontCover ){
            item.src=content.frontCover;
            continue;
        }
        
        if (item.getAttribute("data-length")) {
            const length = item.getAttribute("data-length");
            if (content.title.length > length) {
                item.innerHTML = content.title.substring(0, length);
            } else {
                item.innerHTML = content.title;
            }
        } else {
            item.innerHTML = content.title;
        }
        if (item.getAttribute("href")) {
            if(item.getAttribute("outer") && content.whereFromUrl ){
                item.setAttribute("href", content.whereFromUrl);
            }else{
                item.setAttribute("href", baseURL + content.publishDates[0] + "/" + content.publishDates[1] + "/" + content.publishDates[2] + "/" + content.id + ".html");
            }
            
            item.setAttribute("title", content.title);
        }

    }
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



function buildMenus(tagName) {
    let items = document.getElementsByTagName(tagName);

    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (!item) {
            continue;
        }
        let newsId = item.getAttribute("menu-id")
        if (!newsId) {
            continue;
        }
        const content = findMenuItem(newsId)
        if (!content) {
            continue;
        }
        if (item.getAttribute("menu-length")) {
            const length = item.getAttribute("menu-length");
            if (content.channelName.length > length) {
                item.innerHTML = content.channelName.substring(0, length);
            } else {
                item.innerHTML = content.channelName;
            }
        } else {
            item.innerHTML = content.channelName;
        }
        if (item.getAttribute("href")) {
            item.setAttribute("href", "./"+ content.id + ".html");
            item.setAttribute("title", content.channelDesc);
        }

    }
}

function findMenuItem(Id){
    for(let i = 0 ;i<totalRecords.channelRecords.length;i++){
        if(Id == totalRecords.channelRecords[i].id){
            return totalRecords.channelRecords[i];
        }
    }
    return undefined
}
