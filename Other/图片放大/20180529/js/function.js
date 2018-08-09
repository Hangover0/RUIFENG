function showMask() {
    document.querySelector("#mask").style.display = "block";
}
function closeMask() {
    document.querySelector("#mask").style.display = "none";
}


function addGoods(goods) {
    // 1. 添加到本地数据
    var goodsArr = null;
    if(!localStorage.getItem("goods")) {
        goodsArr = [];
    }else {
        goodsArr = JSON.parse(localStorage.getItem("goods"));
    }
    goodsArr.push(goods);
    // 更新本地数据
    localStorage.goods = JSON.stringify(goodsArr);
    // 2. 添加到页面重
    // 获取内容容器
    var tBody = document.querySelector("#tbody");
    tBody.insertAdjacentHTML("beforeend", `
         <div class="tr">
              <div class="td">1</div>
              <div class="td">${goods.num}</div>
              <div class="td">${goods.name}</div>
              <div class="td">${goods.kind}</div>
              <div class="td">${goods.stor}</div>
              <div class="td">${goods.price}</div>
              <div class="td">${goods.des}</div>
              <div class="td">${goods.update}</div>
              <div class="td">
                  <button class="com">编辑</button>
                  <button class="del">删除</button>
              </div>
          </div>
    `);
    alert("添加成功！");
    closeMask();



}




function loading() {
    // 获取数据
    var goodsArr = JSON.parse(localStorage.goods);
    var htmlStr = "";
    for(var i = 0, len = goodsArr.length; i < len; i++) {
        var goods = goodsArr[i];
        htmlStr +=  `
         <div class="tr">
              <div class="td">i+1</div>
              <div class="td">${goods.num}</div>
              <div class="td">${goods.name}</div>
              <div class="td">${goods.kind}</div>
              <div class="td">${goods.stor}</div>
              <div class="td">${goods.price}</div>
              <div class="td">${goods.des}</div>
              <div class="td">${goods.update}</div>
              <div class="td">
                  <button class="com">编辑</button>
                  <button class="del">删除</button>
              </div>
          </div>
    `;
    }
    document.querySelector("#tbody").innerHTML = htmlStr;
}


