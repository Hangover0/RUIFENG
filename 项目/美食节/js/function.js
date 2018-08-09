//获取DOM元素
function getEl(Sel, isAll) {
    if(isAll) {
        return document.querySelectorAll(Sel);
    }else {
        return document.querySelector(Sel);
    }
}

//获取随机验证码
function getVerificationCode(length) {
    //定义随机源
    var str = "";
    str += "QWERTYUUUUUIOPASDFGHJKLZXCVBNM";
    str += "1234567890";
    str += "qwertyuiopasdfghjklzxcvbnm";
    //根据长度截取字符
    var resStr = "";
    for (var i = 0;i < length; i++){
        //获取随机下标
        var index = Math.floor(Math.random() * str.length);
        resStr += str.slice(index, index + 1);
    }
    return resStr;
}

//判断输入框输入的值
class Validate {
    constructor() {}
    static test(type, str) {
        let res = null;
        switch (type) {
            case "username": {
                // 1. 用户名正则，4到16位（字母，数字，下划线，减号）
                res = /^[A-Za-z0-9_-]{4,16}$/.test(str);
            } break;
            case "password": {
                // 2. 用户名正则，4到16位（字母，数字，下划线，减号）
                res = /^[A-Za-z0-9_-]{4,16}$/.test(str);
            } break;
            case "email": {
                // 3. 邮箱
                res = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(str);
            } break;
            case "tel": {
                // 4. 手机
                res = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test(str);
            } break;
        }
        return res;
    }
}

//AJAX请求
function GET(config) {
    // 创建请求对象
    var xhr = new XMLHttpRequest();
    // 配置请求
    xhr.timeout = 10;
    xhr.responseType = "json";
    xhr.open("GET", config.url, true);
    // 发送请求
    xhr.send(null);
    // 请求完成
    xhr.onload = function() {
        // 请求成功
        if(xhr.status == 200) {
            config.success && config.success(xhr.response);
        }
        // 请求失败
        else {
            config.fail && config.fail();
        }
    }
}

//分页
function loadingHtml(parent, data, curIndex) {
    //获取总页码
    var totalPage = Math.ceil(data.length / 16);
    var starIndex = (curIndex - 1) * 16;
    var endIndex  = curIndex == totalPage ? starIndex + totalPage % 16 - 1 : starIndex + 15;


    var htmlStr = "";
    for (var i = starIndex; i <= endIndex; i++){
        htmlStr += `
            <div class="item">
            <div class="itemimg">
                <img src="${data[i].img}" alt="">
            </div>
            <div class="des">
                 <h3>${data[i].title}</h3>
                 <p>${data[i].popularity}</p>
                 <span>${data[i].text}</span>
            </div>
            </div>
        `;
    }
    parent.innerHTML = htmlStr;
}

//获取css样式
function getStyle(el, attr) {
    if(el.currentStyle) {
        return el.currentStyle[attr];
    }else {
        return getComputedStyle(el, null)[attr];
    }
}

//回到顶部
function goTop() {
    var goBtn = getEl(".go-top");
    var ooffset = 0;     //偏移量
    //监听窗口滚动
    window.onscroll = function () {
        //兼容IE
        ooffset = document.body.scrollTop || document.documentElement.scrollTop;
    }
    goBtn.onclick = function () {
        var duration = 1000;    //持续时间
        var interval = 15;      //每一帧持续时间
        var frames = duration / interval;            //帧数
        var speed = Math.ceil(ooffset / frames);      //每一帧位移的距离
        var tgo = setInterval(function () {
            if(ooffset > 0){
                document.body.scrollTop = document.documentElement.scrollTop = ooffset - speed;
            }
            else {
                //    清除定时器
                clearInterval(tgo);
                //    更新当前位置
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            }
        }, interval)
    }

}

//轮播图
function slideshow(oPrev, oNext, oImgBox, oContainer, oIdots, maxIndex, few) {
    var curIndex = 0,
        isBtn = false,
        timer = null;

    oPrev.onclick = function () {
        if(isBtn){return};
        if(curIndex == 0){
            curIndex = maxIndex;
        }else{
            --curIndex;
        }
        tab(+oContainer.offsetWidth);
        changeIdot();
    }

    oNext.onclick = function() {
        if(isBtn){return};
        if(curIndex == maxIndex) {
            curIndex = 0;
        }else {
            ++curIndex;
        }
        tab(-oContainer.offsetWidth);
        changeIdot();
    }


    play();
    oContainer.onmouseenter = stop;
    oContainer.onmouseleave = play;

    // 封装
    function tab(offset) {
        //更新动画状态
        isBtn = true;
        // 帧动画
        var interval = 15,
            duration = 500,
            frames   = duration / interval,
            speed    = Math.ceil(offset / frames);

        var curLeft  = parseInt(getStyle(oImgBox, "left")),
            tarLeft  = curLeft + offset;
        var t = setInterval(function() {
            // 更新当前值
            curLeft  = parseInt(getStyle(oImgBox, "left"));
            // 下一页：offset < 0 && curLeft > tarLeft
            // 上一页：offset > 0 && curLeft < tarLeft

            if((offset < 0 && curLeft > tarLeft) || (offset > 0 && curLeft < tarLeft)) {
                oImgBox.style.left = curLeft + speed + "px";
            }else {
                // 清除定时器
                clearInterval(t);
                t = null;
                isBtn = false;
                // 更新位置
                oImgBox.style.left = tarLeft + "px";
                // 处理边界值
                var imgW = oContainer.offsetWidth;
                if(parseInt(oImgBox.style.left) < -few * imgW) {
                    oImgBox.style.left = -imgW + "px";
                }else if(parseInt(oImgBox.style.left) > -imgW) {
                    oImgBox.style.left = -few * imgW + "px";
                }
            }
        }, interval);
    }



    function changeIdot() {
        for(var i = 0, len = oIdots.length; i < len; i++) {
            if(oIdots[i].classList.contains("show")) {
                oIdots[i].classList.remove("show")
                break;
            }
        }

        oIdots[curIndex].classList.add("show");
    }

    function play() {
        timer = setInterval(function () {
            oNext.onclick();
        }, 3000)
    }
    function stop() {
        clearInterval(timer);
        timer = null;
    }
}

//本地存储
function save() {
    var username = getEl(".username"),
        password = getEl(".password");
    var obj = {
        username : username.value,
        password : password.value
    };
    var newObj = JSON.stringify(obj);
    localStorage.setItem("infor", newObj);
}