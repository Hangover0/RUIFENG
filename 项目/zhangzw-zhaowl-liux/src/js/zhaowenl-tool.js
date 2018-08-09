class ZhaoWLTool {
    // 获取json
    a(infos){
        let htmlstr = "";
        infos.forEach(function(response){
            console.log(response);
            htmlstr +=`
            <div class="Img-wrap">
                <img src="${response.infos}" alt="">
            </div>

            <div class="des">
                <span>${response.infos.name}</span>
                <span>${response.infos.price}</span>
            </div>

            `
        });
        $(".product-wrap").html(htmlstr);
    }

    
    smallBig(){
        var oSmallImgs = document.querySelectorAll(".Small-ImgBox img");
        var oBigImg    = document.querySelector(".Big-ImgBox img");

        for(var i = 0, len = oSmallImgs.length; i < len; i++) {
            oSmallImgs[i].onclick = function() {
            // 切换大图片
            oBigImg.src = this.src;
        }
    }
    }
}

exports.ZhaoWLTool = new ZhaoWLTool();