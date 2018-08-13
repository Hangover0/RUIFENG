(function(){
    // 判断用户是否已经登陆
    // 如果用户没有登陆
    // 那么就跳转到登陆页面中
    if(!sessionStorage.loginUser) {
        location.href = "./login-register.html";
        return;
    }
    var loginUser = JSON.parse(sessionStorage.loginUser);
    //alert("Hello, " + loginUser.username + ",欢迎访问南宁婚纱！");




    window.onload=function(){
        var oBox=document.getElementById('boxshow');
        var oUl=oBox.children[0];
        var aLi=oUl.children;
        //复制一份内容
        oUl.innerHTML+=oUl.innerHTML;
        oUl.style.width=aLi.length*aLi[0].offsetWidth+'px';
        setInterval(function(){
            var l=oUl.offsetLeft+10;
            if(l>=0){
                l=-oUl.offsetWidth/2;
            }
            oUl.style.left=l+'px';
        },100);
    };





    var goBtn = document.querySelector(".gobtn");
    var offset = 0;     //偏移量
    //监听窗口滚动
    window.onscroll = function () {
        //兼容IE
        offset = document.body.scrollTop || document.documentElement.scrollTop;
    }
    goBtn.onclick = function () {
        var duration = 1000;    //持续时间
        var interval = 15;      //每一帧持续时间
        var frames = duration / interval;            //帧数
        var speed = Math.ceil(offset / frames);      //每一帧位移的距离
        var t = setInterval(function () {
            if(offset > 0){
                document.body.scrollTop = document.documentElement.scrollTop = offset - speed;
            }
            else {
                //    清除定时器
                clearInterval(t);
                //    更新当前位置
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            }
        }, interval)
    }
})();