class LXTool {   
    constructor() {};
    loadingJson(callback){
        $.ajax({
            url:'../json/info.json',
            type:'GET',
            dataType: 'json',
            success: (res) => {
             callback(res);
            }
         })
    }
    //加载我的订单
    loadingOrder(res){
        let order = res.order;
        let orderStr = "";
        order.forEach((item) => {
            orderStr +=`
            <li>
                <div class='img-box'>
                    <p><img src="../images/index-eg1.jpg" class="img"></p>
                    <p style='padding-left:16px;'>订单号</p>
                </div>
                <div class='money'>${item.money}</div>
                <div class='time'>${item.time}</div>
                <div class='outTime'>${item.outTime}</div>
                <div class='state'>${item.state}</div>
                <div class="btn-box">
                    <div class="top">
                        <span class="check">查看</span>
                        <span class="abolish">取消</span>
                    </div>
                    <div class="bottom">
                        <span class="sale">售后</span>
                        <span class="del">删除</span>
                    </div>
                </div>
            </li>            
            `
        });
        $('.order').append(orderStr); 
        //取消订单
        $(".abolish").on("click",()=>{
            $(".abolish-btn").removeClass("hid");             
            $(".abolish-sure").on("click",()=>{
                $(".abolish-btn").addClass("hid");
            });
            $(".abolish-not").on("click",()=>{
                $(".abolish-btn").addClass("hid");
            })                 
        });
        //删除订单
        $(".del").on("click",(e)=>{
            let $del  =   $(e.target).parent().parent().parent();
            $(".del-btn").removeClass("hid"); 
            $(".del-sure").on("click",()=>{
                $del.remove();
                $(".del-btn").addClass("hid");
            });            
            $(".del-not").on("click",()=>{
                $(".del-btn").addClass("hid");
            })                 
        });         
    }
    //加载我要出售
    loadingSell(res){
        let sell = res.sell;        
        let sellStr = "";
        sell.forEach((item)=>{
            sellStr +=`
            <li>
                <div class='img-box'>
                    <p><img src="../images/index-eg1.jpg" class="img"></p>
                    <p style='padding-left:16px;'>订单号</p>
                </div>
                <div class='money'>${item.money}</div>
                <div class='time'>${item.time}</div>
                <div class='state'>${item.state}</div>
                <div class='store'>${item.store}</div>
                <div class='item-status'>${item.itemStatus}</div>
                <div class='returned-money'>${item.returnedMoney}</div>
                <div class="btn-box">
                    <div class="top">
                        <span class='sal sale'>降价申请</span>                    
                    </div>
                    <div class="bottom">                    
                        <span class="del">删除</span>
                        <span class="sal sale">取消</span>
                    </div>
                </div>
            </li>               
            `
        });
        $(".sell-list").append(sellStr);
        //
        let str = "已出售";
        for(let i = 0,len = $(".item-status").length;i < len;i++){
            if($(".item-status")[i].textContent == str){
                $(".top .sal")[i].classList.add("noSale");
                $(".top .sal")[i].classList.remove("sale");
                $(".bottom .sal")[i].classList.add("noSale");
                $(".bottom .sal")[i].classList.remove("sale");
            }
        }
       
        
        //删除
        $(".del").on("click",(e)=>{
            let $del  =   $(e.target).parent().parent().parent();
            $(".del-btn").removeClass("hid"); 
            $(".del-sure").on("click",()=>{
                $del.remove();
                $(".del-btn").addClass("hid");
                //提示木有出售商品
                if($(".sell-list li").length == 1){
                    $(".sell-list").addClass("hid");
                    $(".no-sell").removeClass("hid");
                }
            });            
            $(".del-not").on("click",()=>{
                $(".del-btn").addClass("hid");
            });            
        });
        //降价申请
        $(".top .sale").on("click",()=>{
            $(".sell-list").addClass("hid");
            $(".depreciate").removeClass("hid");
        });
        //返回我的出售
        $(".depreciate-return").on("click",()=>{
            $(".sell-list").removeClass("hid");
            $(".depreciate").addClass("hid");
        });
    }
    //加载系统消息
    loadingMsee(res){
        let des = res.message;
        let messStr = "";
        des.forEach((item)=>{
            messStr += `
            <li class='normal'>
                <div class="mess-details">
                    <p class="details">${item.details}</p>
                    <div class="time-box">
                        <p class="day">${item.day}</p>
                        <p class="time">${item.time}</p>
                    </div>
                </div>
                <div class="sign">
                    <i class='idot'></i>
                    <label>标记</label>
                </div>
            </li>
            `
        });
        $(".message-list").html(messStr);
        $(".sign i").on("click",(e)=>{
            $(e.target).toggleClass('checked').parent().parent().toggleClass('check');
        });
        $('.nums').text($(".message-list li").length);
        $(".mess-details").on("click",(e)=>{                 
            $(e.currentTarget).parent().toggleClass("other").toggleClass("normal");
        })
        
    }

}
exports.LXTool = new LXTool();