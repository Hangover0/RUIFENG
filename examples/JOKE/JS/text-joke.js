$(function () {
    //抓取数据
    $.ajax({
        //请求地址
        url:'http://route.showapi.com/341-1',
        //请求方法
        type:'GET',
        //指定数据类型
        dataType:"json",
        //请求参数
        data:{
            "showapi_appid" : "66393",
            "showapi_sign"  : "47be0d4b89fc49e9ae07ff6b6118cadb"
        },
        success:function (response) {
            var contentlist = response["showapi_res_body"]["contentlist"];
            var htmlStr = "";
            contentlist.forEach(function (data) {
                htmlStr += `
                <li>
                    <p class="title">${data.title}</p>
                    <p class="date">${data.ct}</p>
                    <p class="text">${data.text}</p>
                </li>
                `;
            });
            //更新页面
            $(".content-list").html(htmlStr);
        }
    })
});