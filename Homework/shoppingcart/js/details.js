$(function() {
    $.ajax({
        url: "../json/data.json",
        type: "GET",
        dataType: "json",
        success: (response) => {
            // 获取商品详情下标
            let index = location.search.slice(-1);  
            let data = response.infolist[index];
           // 加载数据
            loadingHtml("goods-detail", data);
            //构建订单对象
            let order = {
                title:data.title,
                des:data.des,
                price:data.price,
                nums:$(".nums").val(),
                size:"",
                color:"",
                city:"成都",
                imgName:data.imgs[0]
            }

            // 处理左侧图片
            $(".thumbnail img").on("mouseenter", (e) => {
                let $target = $(e.target);
                order.imgName = $target.attr("src");
                $target.addClass("selected").siblings().removeClass("selected");
                $(".small-img").attr({
                    "src": $target.attr("src")
                })
            });

            
            $(".nums").on("change", (e) => {
                let $target = $(e.target);
                order.nums = $target.val();
                order.price = (parseFloat(data.barginprice) * order.nums).toFixed(2);
            });
            $(".sel-city").on("change", (e) => {
                let $target = $(e.target);
                order.city = $target.val();
            });
            $(".size span").on("click", (e) => {
                let $target = $(e.target);
                order.size = $target.text();
                $target.addClass("selected").siblings().removeClass("selected");
            });
            $(".colors span").on("click", (e) => {
                let $target = $(e.target);
                order.color = $target.text();
                $target.addClass("selected").siblings().removeClass("selected");
            });
            //点击添加购物车
            $(".shoppingcar").on("click", () =>{
                if(!order.size || !order.color){
                    alert("请完善购物信息！");
                }else{
                    alert("添加购物车成功！");
                    sessionStorage.order = JSON.stringify(order);
                    location.href = "../pages/shoppingcar.html";
                }
            });
        }
    })
});