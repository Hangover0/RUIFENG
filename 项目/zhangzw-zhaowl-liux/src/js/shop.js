import '../less/shop.less';
require('Common-LESS');
const ZhangZWTool =  require('./zhangzw-tool');
ZhangZWTool.ZhangZWTool.zhangzwloadHtml();


$(function(){
    $('.checkbox').on("click", (e) => {
        $(e.currentTarget).toggleClass("hidden");
    });
    $('.close-check').on("click",(e)=>{               
        $(e.currentTarget).toggleClass("checked");
        if($('.close-check').hasClass("checked")){
            $('.checkbox').removeClass("hidden");
        }else{
            $('.checkbox').addClass("hidden");
        }
    })
   

    $(".del").on("click", (e) => {
        $(e.currentTarget).parent().remove();
        alert("恭喜您删除成功！");
    })
})