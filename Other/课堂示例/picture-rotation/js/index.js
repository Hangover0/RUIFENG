// 图片容器
var imgGroup = document.querySelector('.img-group'),
    imgGroup_child = imgGroup.children,
    imgGroup_child_leng = imgGroup_child.length;

// 定义一个计数器
var counter = 0;

setInterval(function() {
    imgGroup_child[counter].className = '';
    if( counter === (imgGroup_child_leng - 1) ) {
        imgGroup_child[0].className = 'show'
        counter = 0;
    } else {
        imgGroup_child[++counter].className = 'show';
    }
}, 1000);