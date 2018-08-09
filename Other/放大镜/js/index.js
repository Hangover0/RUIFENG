/**
 * 1、放大镜的关键原理：
 *
 * a）、鼠标在小图片上移动时，通过捕捉鼠标在小图片上的位置，定位大图片的相应位置。
 *
 *
 * 2、放大镜特效设计
 *
 * a）、页面元素
 * b）、技术点：事件捕获（onmouseover、onmouseout、onmousemove）、定位
 * c）、难点：计算
 *
 *  小图片宽            放大镜宽             放大镜移动的距离            放大镜可移动的最大距离
 * ——————————   =  ——————————————   =  ——————————————————————  =  ————————————————————————— => 大图移动的距离 = 放大镜移动的距离 * 大图的最大移动距离 / 放大镜的最大移动距离
 *  大图片宽           大图片局部宽          大图移动的距离（未知）        大图片可移动的最大距离
 *
 *  关于图片的比例问题
 *  也可以这样做：
 *  大图的宽 / 小图的宽 = 大图的移动距离 / 小图的移动距离
 */



(function () {
    var oContainer = document.querySelector(".container");
    var oSmallBox = document.querySelector(".small-box");
    var oGlass = document.querySelector(".glass");
    var oSmallImg = document.querySelector(".small-img");
    var oBigBox = document.querySelector(".big-box");
    var oBigImg = document.querySelector(".big-img");




    var w = parseInt(getStyle(oSmallImg, "width")) * parseInt(getStyle(oBigBox, "width")) / parseInt(getStyle(oGlass, "width"));
    var h = parseInt(getStyle(oSmallImg, "height")) * parseInt(getStyle(oBigBox, "height")) / parseInt(getStyle(oGlass, "height"));
    oBigImg.style.width = w + "px";
    oBigImg.style.height = h + "px";


    oSmallBox.onmouseover = function () {
        oGlass.style.display = "block";
        oBigBox.style.display = "block";
    }
    oSmallBox.onmouseout = function () {
        oGlass.style.display = "none";
        oBigBox.style.display = "none";
    }

    oSmallBox.onmousemove = function (e) {
        //计算放大镜的位置
        var left = e.clientX - oContainer.offsetLeft - oSmallBox.offsetLeft - oGlass.offsetWidth / 2;
        var top = e.clientY - oContainer.offsetTop - oSmallBox.offsetTop - oGlass.offsetHeight / 2;
        if(top < 0){
            top = 0;
        }else if(top > oSmallBox.offsetHeight - oGlass.offsetHeight){
            top = oSmallBox.offsetHeight - oGlass.offsetHeight;
        }
        if(left < 0){
            left = 0;
        }else if(left > oSmallBox.offsetWidth - oGlass.offsetWidth){
            left = oSmallBox.offsetWidth - oGlass.offsetWidth;
        }

        oGlass.style.left = left + "px";
        oGlass.style.top = top + "px";



        // 更新大图片的位置
        // 大图移动的距离 = 放大镜移动的距离 * 大图的最大移动距离 / 放大镜的最大移动距离
        oBigImg.style.top  = -top * (oBigImg.offsetHeight - oBigBox.offsetHeight) / (oSmallBox.offsetHeight - oGlass.offsetHeight) + "px";
        oBigImg.style.left = -left * (oBigImg.offsetWidth - oBigBox.offsetWidth) / (oSmallBox.offsetWidth - oGlass.offsetWidth) + "px";
    }




})()