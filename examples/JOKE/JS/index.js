//jQuery 文档就绪函数
$(function () {
    //记录当前显示页面下标
    var curIndex;
    //定义路由地址(跳转页面地址)
    var links = [
        "./pages/text-joke.html",
        "./pages/img-joke.html",
        "./pages/gif-joke.html"
    ]
    //为菜单项添加点击事件
    $(".tabBar-tiem").on("click", function () {
        //避免用户重复点击
        var index = $(this).index();
        if( index == curIndex){
            return;
        }
        //更新当前显示页面下标a
        curIndex = index;
        //jQuery提供的ajax请求方法
        $.ajax({
            //请求资源地址
            url:links[$(this).index()],
            //请求方法
            type:"GET",
            //请求成功回调
            success: function (response) {
                $("#content").html(response);
                //清除控制台
                //console.clear();
            }
        })
    }).first().trigger("click");
});