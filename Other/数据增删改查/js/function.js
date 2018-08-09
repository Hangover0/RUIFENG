function save() {
    var dataObj;
    if(!localStorage.userInfo){
        dataObj = [];
    }else {
    dataObj = JSON.parse(localStorage.getItem('userInfo'));}
    var textHtml = '';
    for(var i = 0 ; i < dataObj.length; i++ ){
        textHtml +=
            '<tr><td>' + (i+1) +
            '</td><td>' + dataObj[i].num +
            '</td><td>' + dataObj[i].name +
            '</td><td>' + dataObj[i].type +
            '</td><td>' + dataObj[i].stock +
            '</td><td>' + dataObj[i].price +
            '</td><td>' + dataObj[i].des +
            '</td><td>' + dataObj[i].time +
            '</td><td><p class="compile">编辑</p>' +
            '<p class="del">删除</p></td></tr>'

    }
    tbody.innerHTML = textHtml;


    var deldel = document.getElementsByClassName("del"),
        compile = document.getElementsByClassName("compile");
    dataDel(deldel);
    updata(compile);

}


//删除
function dataDel(deldel) {
    for(var i = 0 ; i < deldel.length; i++){
        (function(index){
            deldel[index].onclick = function () {
                var dObj = JSON.parse(localStorage.getItem("userInfo"));
                dObj.splice(index,1);
                var dataStr = JSON.stringify(dObj);
                localStorage.setItem("userInfo",dataStr);
                deldel[index].parentElement.parentElement.remove(deldel[index].parentElement.parentElement);
            }
        })(i)
    }

}
//更新
function updata(compile) {

    for(var i = 0 ; i < compile.length; i++){
        (function(index){
            compile[index].onclick = function () {
                mask.style.display = "block";

                var dObj = JSON.parse(localStorage.getItem("userInfo"));

                var num = document.getElementById("num-ipt") ,
                    name = document.getElementById("name-ipt"),
                    type = document.getElementById("type-ipt"),
                    stock = document.getElementById("stock-ipt"),
                    price = document.getElementById("price-ipt"),
                    des = document.getElementById("des-ipt");

                num.value  = dObj[index].num;
                name.value = dObj[index].name;
                type.value = dObj[index].type;
                stock.value = dObj[index].stock;
                price.value = dObj[index].price;
                des.value = dObj[index].des;


                var affirm = document.getElementById("affirm");
                // affirm.textContent = "添加";

                affirm.onclick = function(){
                    var num = document.getElementById("num-ipt").value,
                        name = document.getElementById("name-ipt").value,
                        type = document.getElementById("type-ipt").value,
                        stock = document.getElementById("stock-ipt").value,
                        price = document.getElementById("price-ipt").value,
                        des = document.getElementById("des-ipt").value;
                    var time = new Date();
                    // this.parentElement.parentElement.remove();

                    dObj[index] = { num:num,
                        name:name,
                        type:type,
                        stock:stock,
                        price:price,
                        des:des,
                        time : time.toLocaleString()};

                    var dataStr = JSON.stringify(dObj);
                    localStorage.setItem("userInfo",dataStr);
                    mask.style.display = "none";
                    save();

                }
                
            }
        })(i)
    }

}





function loading() {
    // 获取数据
    var goodsArr = JSON.parse(localStorage.userInfo);
    var htmlStr = "";
    var time = new Date();
    for(var i = 0, len = goodsArr.length; i < len; i++) {
        var userInfo = goodsArr[i];
        htmlStr +=  `
          <tr>
          <td>(i+1)</td>
            <td>${userInfo.num}</td>
            <td>${userInfo.name}</td>
            <td>${userInfo.type}</td>
           <td>${userInfo.stork}</td>
            <td>${userInfo.price}</td>
            <td>${userInfo.des}</td>
            <td>${userInfo.time}</td>
            <td><p class="compile">编辑</p> 
            <p class="del">删除</p></td>
            </tr>
    `;
    }
    document.querySelector("#tbody").innerHTML = htmlStr;
}