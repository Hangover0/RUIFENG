(function () {
    var offset = 0,
        lastOffset = 0,
        oHeader = document.querySelector("header");
    window.onscroll = function () {
        //更新偏移
        offset = document.documentElement.scrollTop || document.body.scrollTop;
        //网上拉/显示菜单
        if(offset < lastOffset){
            oHeader.classList.remove("menu-hidden");
        }else{
            oHeader.classList.add("menu-hidden");
        }
        lastOffset = offset;
    }
})()