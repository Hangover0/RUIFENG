(function () {
    var oUser = getEl(".user"),
        oPassword = getEl(".password"),
        oCheckbox = getEl(".checkbox"),
        oBtn = getEl(".btn");

    oBtn.onclick = function () {
        inspect(oUser.value, oPassword.value, oCheckbox);

    }

    var dee = JSON.parse(localStorage.getItem("userInfo"));
    if(dee && dee.length){
        oUser.value = dee[0].name;
        oPassword.value = dee[0].pw;
        oCheckbox.checked = true;
    }

})()