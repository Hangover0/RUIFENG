$(function(){
    if(!sessionStorage.loginState){
        location.href = "./login-register.html";
    }
    var isName = getEl(".logodes");
    var newArr = JSON.parse(localStorage.infor);
    isName.textContent = "尊敬的" + newArr.username + ",欢迎来到美食节！";


    // 获取DOM元素
    var oPrev      = getEl(".prev"),
        oNext      = getEl(".next"),
        oImgBox    = getEl(".viewbox"),
        oContainer = getEl(".flash-wrap"),
        oIdots     = getEl(".oidot", true),
        maxIndex = 4;


    var Prev = getEl(".paprev"),
        Next = getEl(".panext"),
        ImgBox = getEl(".hotbox"),
        Container = getEl(".hotcontainer"),
        Idots = getEl(".idot", true),
        Index = 2;



    slideshow(Prev, Next, ImgBox, Container, Idots, Index, 3);

    slideshow(oPrev, oNext, oImgBox, oContainer, oIdots, maxIndex, 5);

    goTop();

});



