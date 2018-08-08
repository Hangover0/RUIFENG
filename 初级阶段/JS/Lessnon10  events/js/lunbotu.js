(function () {
    var imgs = document.querySelectorAll("img");
    var prev = document.querySelector(".prev");
    var next = document.querySelector(".next");
    var idots = document.querySelectorAll(".idot");
    var container = document.querySelector(".container");
    var curIndex = 0;
    var timer = null;
    //事件添加
    prev.onclick = function () {
        curIndex = curIndex == 0 ? 3 : --curIndex;
        tab();
    }
    next.onclick = function () {
        curIndex = curIndex == 3 ? 0 : ++curIndex;
        tab();
    }
    for(var i = 0;i < idots.length; i++){
        //为小圆点设置下标
        idots[i].dataset.index = i;
        idots[i].onclick = function () {
            var index = this.dataset.index;
            if(index == curIndex){
                return;
            }
            curIndex = index;
            tab();
        }
    }
    container.onmouseenter = stop;
    container.onmouseleave = play;
    //自动播放
    play();
    //方法封装
    function play() {
        timer = setInterval(function () {
            next.onclick();
        }, 2000)
    }
    function stop() {
        clearInterval(timer);
        timer = null;
    }
    function tab() {
        for(var i = 0;i < imgs.length; i++){
            //classList.contains()判断是否包含某个class
            if(imgs[i].classList.contains("show")){
                imgs[i].classList.remove("show");
                idots[i].classList.remove("show");
                break;
            }
        }
        //classList.add()  添加class
        idots[curIndex].classList.add("show");
        imgs[curIndex].classList.add("show");
    }
})()