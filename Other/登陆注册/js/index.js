(function(){

    // 判断用户是否已经登陆
    // 如果用户没有登陆
    // 那么就跳转到登陆页面中
    if(!sessionStorage.loginUser) {
        location.href = "./login-register.html";
        return;
    }
    var loginUser = JSON.parse(sessionStorage.loginUser);
    alert("Hello, " + loginUser.username + "!");

})();