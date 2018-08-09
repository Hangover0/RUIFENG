//图片容器
var imgList = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"];




for (var i = 0;i < imgList.length;i++){
    var disc = document.querySelector(".disc"),
        imgGroup = document.querySelector(".img-group");
    imgGroup.innerHTML += `
    <img src="${imgList[i]}">
    `;
    disc.innerHTML += `
        <li class="dian"></li>
    `;
}




var dianList = document.getElementsByClassName("dian");
var num = 0;
var Oon = document.getElementsByClassName("on")[0];
dianList[0].className = "on";

for(var i = 0;i < dianList.length;i++){
    dianList[i].index = i;
    dianList[i].onclick = function(){  //点击小圆点图片相对应的进行切换
        for(var j = 0 ;j < dianList.length; j++){
            num = this.index;
            dianList[j].className = "";
            imgGroup_child[j].style.display = "none";
        }
        dianList[num].className = "on";
        imgGroup_child[num].style.display = "block";
    }
}



var imgGroup = document.querySelector(".img-group"),
    imgGroup_child = imgGroup.children,
    imgGroup_child_leng = imgGroup_child.length;
var counter = 0;

var interval = setInterval(function () {
    imgGroup_child[counter].className = "";
    if(counter === (imgGroup_child_leng - 1)){
        imgGroup_child[0].className = "show";
        counter = 0;
    }else{
        imgGroup_child[++counter].className = "show";
    }
},1000);


interval;