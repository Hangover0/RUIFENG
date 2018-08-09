
const ZhaoWLTool =  require('./zhaowenl-tool');
import '../less/sofa.less';
require('Common-LESS');
const ZhangZWTool =  require('./zhangzw-tool');
ZhangZWTool.ZhangZWTool.zhangzwloadHtml();

// 二级菜单
$(function () {
    $(".hmain>a").hover(function () {
        // console.log("点击了");
        $(this).children("ul").slideDown();
    },function () {
        $(this).children("ul").slideUp();
    })
});


// ajax请求 
$(function (){

    
    

})