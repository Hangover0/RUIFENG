$(function () {
    $.ajax({
        url: "http://route.showapi.com/341-3",
        type: "GET",
        dataType: "json",
        data: {
            "showapi_appid": "66436",
            "showapi_sign":"a940c20805204cedbf25ffd6245b481c"
        },
        success:function (response) {
            var contentlist = response["showapi_res_body"]["contentlist"];
            var htmlStr = "";
            contentlist.forEach(function (data) {
                htmlStr += `
                <li>
                    <p class="title">${data.title}</p>
                    <p class="date">${data.ct}</p>
                    <img src="${data.img}" alt="">
                </li>`;
            });
            $(".content-list").html(htmlStr);
        }
    })
});