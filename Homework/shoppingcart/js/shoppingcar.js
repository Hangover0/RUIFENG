$(function() {
    if(sessionStorage.order)  {
        add(JSON.parse(sessionStorage.order));
        sessionStorage.removeItem("order");
    }
    get((datas) => {
        let htmlStr = ``;
        datas.forEach((data) => {
            htmlStr += `
            <li>
                <input type="checkbox" class="checkbox">
                <img src="../images/${data.imgName}">
                <div class="wrap">
                    <h3 class="title">${data.title}</h3>
                    <p class="des">${data.des}</p>
                    <p class="price">价格：${data.price}</p>
                    <p class="nums contenteditable="true"">数量：${data.nums}</p>
                    <p class="color">颜色：${data.color}</p>
                    <p class="size">尺码：${data.size}</p>
                    <p class="city">发送至：${data.city}</p>
                    <button type="button" class="delete">删除订单</button>
                </div>
            </li>
            `;
        });
        $(".shoppingcar-list").html(htmlStr);
    }, () => {
        $(".shoppingcar-list").html(`
            <li class="nogoods">购物是空的</li>
        `);
    })


    //删除
    $(".delete").on("click",(e) => {
        let $target = $(e.target);
        let index = $target.parent().parent().index();
        $(".shoppingcar-list li")[index].remove();
        remove(index);
    })


    $(".goHome").on("click",(e) => {
        location.href = "../index.html"
    });
});