function getEl(Sel) {
    return document.querySelector(Sel);
}

function handleBtnClick(ipt, res) {
    getBirth(ipt, function (birth){
        res.textContent = birth;
    },function (error){
        alert(error);
    })
}

function getBirth(ipt, callback, error) {
    var value = ipt.value,
        errMsg = "";
    switch (true){
        case !value: {
            errMsg = "请输入你的身份证号！";
        }break;
        case isNaN(value): {
            errMsg = "身份证必须为数字！";
        }break;
        case value.length != 18: {
            errMsg = "请输入18位身份证号！";
        }break;
    }
    if(errMsg){
        error && error(errMsg);
    }else{
        var birth = "出生年月：";
        birth += value.slice( 6, 10) + "年";
        birth += value.slice(10, 12) + "月";
        birth += value.slice(12, 14) + "日";
        callback && callback(birth);
    }
}





function extend(Child, Parent) {
    var F = function(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;
}