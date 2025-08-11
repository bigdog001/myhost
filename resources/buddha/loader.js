     if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", ready);
        }
    function ready() {
    var body_data = "";
    for (let i in scriptureRecords.data) {
        const transData = scriptureRecords.data[i].itemTrans;
        const item = scriptureRecords.data[i].item;
        const pref = (scriptureRecords.data[i].itemPrefix) ? scriptureRecords.data[i].itemPrefix.replaceAll(" ","&nbsp;") :"";
        const postf = (scriptureRecords.data[i].itemPostFix)? scriptureRecords.data[i].itemPostFix.replaceAll(" ","&nbsp;") :"";
        //body_data += pref+"<a class=\"tooltip-test\" data-toggle=\"tooltip\" title=\""+item+"\">"+transData+"</a>"+postf;
        body_data += pref+"<a id=\""+i+"\" class=\"tooltip-test\" data-toggle=\"tooltip\" title=\""+item+"\">"+transData+"</a>"+postf;
    }
    console.log(body_data);
    document.getElementById('contents').innerHTML=body_data;
    document.getElementById('mytitle').innerHTML=scriptureRecords.title;
    }
