(function () {
    var oUser = getEl(".user"),
        oPassword = getEl(".password"),
        oBtn = getEl(".btn");

    //添加用户
    oBtn.onclick = function (){
        add(oUser.value, oPassword.value);
    }



})()