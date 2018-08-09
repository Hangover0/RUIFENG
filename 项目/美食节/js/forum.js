(function() {
    // 获取DOM元素
    var oPrev      = getEl(".prev"),
        oNext      = getEl(".next"),
        oImgBox    = getEl(".img-box"),
        oContainer = getEl(".container"),
        oIdots     = getEl(".idot", true),
        maxIndex = 5;


    slideshow(oPrev, oNext, oImgBox, oContainer, oIdots, maxIndex, 6);
})();


