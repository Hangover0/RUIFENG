require('../less/userInfo.less')

require('Common-LESS');
const ZhangZWTool =  require('./zhangzw-tool');
const LXTool =  require('./liuxi-tools');
$(function() {
    //加载头部尾部
    ZhangZWTool.ZhangZWTool.zhangzwloadHtml();
    //个人信息列表
    $(".userInfo_list li").on("click",(e)=>{
        let hashArr = ["personInfo.html","order.html","mySell.html","account.html","message.html"]
        let idx =$(e.target).index();
        $(e.target).addClass("show").siblings().removeClass("show");
        $(".userInfo-details").removeClass("showInfo");
        $(".userInfo-details")[idx].classList.add("showInfo");
        this.location.hash = hashArr[idx];  
    });
    //我的订单
    LXTool.LXTool.loadingJson( LXTool.LXTool.loadingOrder);
    //返回
    $('.return-btn').on("click",()=>{
        location.href="./userInfo.html"
    });
    //我的出售
    LXTool.LXTool.loadingJson( LXTool.LXTool.loadingSell);
    //系统消息
    LXTool.LXTool.loadingJson( LXTool.LXTool.loadingMsee);
    //删除选中消息
    $(".mess-del p").on("click",()=>{
        if($(".sign i").hasClass("checked")){
            $('.del-btn').removeClass('hid');
            $('.del-not').on("click",()=>{
                $(".del-btn").addClass('hid');
            });
            $('.del-sure').on("click",()=>{
                $('.check').remove();
                $('.del-btn').addClass('hid');
                $('.nums').text($(".message-list li").length);    
            })
        }else{
            $(".no-tab").removeClass('hid');
            $('.sure').on("click",()=>{
                $(".no-tab").addClass('hid');
            })
        }
    });
    //获取系统消息条数        
    
    
    
    
    
  
  
})