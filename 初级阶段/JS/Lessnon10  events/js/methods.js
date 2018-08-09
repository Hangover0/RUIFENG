function getEl(id) {
    if(!id){
        throw "getEl:缺乏必要的id参数！";
    }
    return document.getElementById(id.slice(1));
}



function addEvent(element, type, callBack) {
    // 兼容IE10.0以下
    if(element.attachEvent) {
        element.attachEvent('on' + type, callBack);
    }else {
        element.addEventListener(type, callBack, false);
    }
}




function handleSureBtnClick(oInput) {
    //this -> 事件对象
    console.log(this);
    var idCard = oInput.value;
    if(!/^[0-9]{17}[0-9xX]$/.test(idCard)){
        alert("身份证不合法，请重新输入！");
    }else{
        var year = idCard.slice(6, 10),
            month = idCard.slice(10, 12),
            day = idCard.slice(12,14);
        console.log(`
        出生年月：${year}年${month}月${day}日。
        `)
    }
}



function buttonClick(e) {
    //this -> 事件对象
    console.log("用户点击了元素！")
}