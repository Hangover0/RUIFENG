// 获取数据
let get = (callback) => {
    $.ajax({
        url: "../json/data.json",
        type: "GET",
        dataType: "json",
        success: (response) => {
            callback && callback(response.infor);
        }
    })
}


let loadingHtml = (name) => {  
    let htmlStr = "";
    name.forEach((data) => {
        htmlStr += `
        <section class="item">
            <div class="product-img">
                <img src="${data.img}" alt="">
            </div>
            <div class="product-des">
                <h1 class="goods-name">${data.des}</h1>
                <p class="line"></p>
                <p class="goods-price">${data.price}</p>
            </div>
        </section>
        `
    });
    $(".products-box").html(htmlStr);
}


let loadingImgs = () => {
    let imgs = [
        "./images/flash-01.jpg",
        "./images/flash-02.jpg",
        "./images/climber-01.jpg"
    ];

    let htmlStr = ``;
    imgs.forEach(img => {
        htmlStr += `
            <div class="img-item" style="height:800px;background:url(${img}) no-repeat center center fixed">
                <div class="infos">
                    <h3 class="img-title">SPORTING GOODS</h3>
                    <p class="des">极限运动我不敢，但喜欢你我一直坚持到了极限。</p>
                </div>
            </div>
        `;
    });
    $("#img-box").html(htmlStr);
}


let Imgs = () => {
    let imgs = [
        "./images/brand-logo-01.png",
        "./images/brand-logo-02.png",
        "./images/brand-logo-03.png",
        "./images/brand-logo-04.png",
        "./images/brand-logo-05.png",
        "./images/brand-logo-06.png",
        "./images/brand-logo-07.png",
        "./images/brand-logo-08.png"
    ];
    let htmlStr = ``;
    imgs.forEach(img => {
        htmlStr += `
        <div class="footimg-box">
            <img src="${img}" alt="图片加载失败">
        </div>
        `;
    });
    $(".footTop").html(htmlStr);
}

let banner = (img) => {
    let curIndex = 0;
    setInterval(function(){
        let len = img.length;
        curIndex = (curIndex == len - 1) ? 0 : ++curIndex;
        img.each((index, item) =>{
            item.classList.remove("show");
        })
        img[curIndex].classList.add("show");
    },2000)
    
}