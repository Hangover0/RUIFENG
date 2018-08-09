$(function(){

    let $test = $("#test");
    console.log($test);
    console.log($test[0]);


    let oText = document.getElementById("test");
    console.log(oText);


    console.log($(oText));


   
    //避免冲突
     /*
    let jq = $.noConflict();
    jq(oText).text("Hello, jQuery!");
    */



    $test.text("Hello,jQuery!");
    console.log($test.text());


    $(".wrap").html(
        `
            <h1>jQuery</h1>
            <p>jQuery 是轻量级的JavaScript库。</p>
        `
    );



    $(".sure").on("click",() =>{
        console.log($(".username").val());
    })
    $(".clear").on("click",() =>{
        console.log($(".username").val(""));
    })


    $(".wrap").attr({
        "id":"test-box",
        "title":"唯独"
    })

    $(".wrap").removeAttr("id");
    console.log($(".wrap").attr("title"));





    let $checkbox = $("[type='checkbox']");
    $("button:contains('选中')").data("msg","今天天气不错!");
    $("button:contains('选中')").on("click", (e) =>{
        $checkbox.prop("indeterminate",flase);
        $checkbox.prop("checked", ture);
        alert($(e,target).data("msg"));
    });
    $("button:contains('未选中')").on("click", () =>{
        $checkbox.prop("indeterminate",flase);
        $checkbox.prop("checked", false);
    });
    $("button:contains('半选中')").on("click", () =>{
        $checkbox.prop("indeterminate",true);
    });




    $(".wrap").addClass("test box");
    $(".wrap").removeClass("box");



    $(".menu-list li").css({
        "color":"blue",
        "fontSize":"28px"
    })

});