(function () {
    var wrap = getEl(".bigbox");
    GET({
        url:"./JSON/easyDinning.json",
        success:function (response) {
            var htmlStr = "";
            var data = response.menu;
            for(var i = 0;i < data.length;i++){
                htmlStr +=`
                    <div class="container">
                    <div class="title clearFix">
                        <h2 class="fl">${data[i].title}</h2>
                        <p class="fr">${data[i].num}</p>
                    </div>
                    <div class="box">
                        <section class="item">
                            <div class="time">${data[i].time}</div>
                            <div class="head">
                                <img src="${data[i].logo}" alt="">
                                <span>${data[i].netname}</span>
                            </div>
                        </section>
                        <section class="item">
                            <div class="img">
                                <img src="${data[i].img1}" alt="">
                            </div>
                            <div class="des">
                                <p>${data[i].des1}</p>
                            </div>
                        </section>
                        <section class="item">
                            <div class="img">
                                <img src="${data[i].img2}" alt="">
                            </div>
                            <div class="des">
                                <p>${data[i].des2}</p>
                            </div>
                        </section>
                        <section class="item">
                            <div class="img">
                                <img src="${data[i].img3}" alt="">
                            </div>
                            <div class="des">
                                <p>${data[i].des3}</p>
                            </div>
                        </section>
                        <section class="item">
                            <div class="img">
                                <img src="${data[i].img4}" alt="">
                            </div>
                            <div class="des">
                                <p>${data[i].des4}</p>
                            </div>
                        </section>
                        <section class="item">
                            <div class="img">
                                <img src="${data[i].img5}" alt="">
                            </div>
                            <div class="des">
                                <p>${data[i].des5}</p>
                            </div>
                        </section>
                    </div>
                    </div>
                `;
            }
            wrap.innerHTML = htmlStr;
        }
    });


    goTop();
})()