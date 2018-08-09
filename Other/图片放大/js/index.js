
(function(){
    var oSmallImgs = document.querySelectorAll(".small-img-list img");
    var oBigImg    = document.querySelector(".big-img");

    for(var i = 0, len = oSmallImgs.length; i < len; i++) {
        oSmallImgs[i].onclick = function() {
            // 切换大图片
            oBigImg.src = this.src;
        }
    }
})();