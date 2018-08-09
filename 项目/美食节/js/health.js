(function () {
    var oContainer = getEl(".pagebox");
    GET({
        url:"./JSON/health.json",
        success: function (response) {
            for(var i = 0, len = response.length; i < len; i++){
                oContainer.innerHTML +=`
                <div class="item">
                <div class="itemimg">
                    <img src="${response[i].img}" alt="">
                </div>
                <div class="des">
                    <h3>${response[i].title}</h3>
                    <p>${response[i].popularity}</p>
                    <span>${response[i].text}</span>
                </div>
            </div>
            `;
            }
        }
    });

    goTop();
})()