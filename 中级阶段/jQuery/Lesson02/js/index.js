$(function(){
    $(".get").click("天气", (e) =>{
        //e.data
        //事件参数绑定在事件对象上
        let $target = $(e.currentTarget);
        let msg = "";
        switch(e.data){
            case "天气": {
                msg = "天气晴朗";
            }break;
            case "心情": {
                msg = "非常美丽";
            }breaak;
        }
        $target.after(`<p>${msg}</p>`);
        

    }).hover((e) => {
        $(e.currentTarget).css({
            background:"red"
        });
    },
        (e) => {
            $(e.currentTarget).css({
                background:"green"
            });
    }).trigger("click");



    /*
    $(".hello").one("click",() => {
        $(this).text("hello,world");
    })
    */


   $(".hello").on({
        click: function(){
            console.log("1");
            $(this).off();
        },
        mouseenter: function(){
            console.log("2");
        },
        mouseout: function(){
            console.log("3");
        }

   })



   $(".title").on("click", (e) => {
       $(".des").fadeToggle("slow","linear",()=>{
           console.log("over!");
       });


       //动画效果
       //对数字有效
       $(e.target).animate({
            marginLeft:"+50px"
        },{
            duration: 1000,
            easing:"linear",
            complete:()=>{
            console.log("over!");}
        });

   })




   $(".box").one("click", function(){
       $(this).animate({width:"300px"},"slow","linear")
       .animate({height:"300px"},"slow","linear")
       .animate({marginLeft:"500px"},"slow","linear")
       .queue(function(next){
           $(this).css({
               background:"red"
           });
       }).next();
   });




   $("ul > li").on("click", (e)=>{
        let a = $(this).text();
        if(a == "css"){
            $("div > span").text(a).css("color","red");
        }

        $("div > span").text(a);

   })

})
