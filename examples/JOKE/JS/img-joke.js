$(function () {
    $.ajax({
        url: "http://route.showapi.com/341-2",
        type: "GET",
        dataType: "json",
        data: {
            "showapi_appid": "66393",
            "showapi_sign": "47be0d4b89fc49e9ae07ff6b6118cadb"
        },
        success:function (response) {
            var contentlist = response["showapi_res_body"]["contentlist"];
            console.log(contentlist);
            var htmlStr = "";
            contentlist.forEach(function (data) {
                htmlStr += `
                <li>
                    <p class="title">${data.title}</p>
                    <p class="date">${data.ct}</p>
                    <img src="${data.img}" alt="">
                </li>
                `;
            });
            //更新页面
            $(".content-list").html(htmlStr);
        }

    })
});