(function () {
    var oContent = document.querySelector(".content");
    networking({
        url:"./JSON/data.json",
        success: function (response) {
            /*var htmlStr = "";
            htmlStr += "<p>公司名称：" + response.cName  + "</p>";
            htmlStr += "<p>公司地址：" + response.address  + "</p>";
            htmlStr += "<p>公司电话：" + response.infor.tel  + "</p>";
            htmlStr += "<p>培训方向：" + response.infor.majors.join("、")  + "</p>";
            oContent.innerHTML = htmlStr;*/
            oContent.innerHTML =`
                <p>公司名称：${response.cName}</p>
                <p>公司地址：${response.address}</p>
                <p>公司电话：${response.infor.tel}</p>
                <p>培训方向：${response.infor.majors.join("、")}</p>
            `;
        }
    });
})()