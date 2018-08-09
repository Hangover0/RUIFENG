(function () {
    var tbody = document.getElementById("tbody"),
        affirm = document.getElementById("affirm"),
        add = document.getElementById("add"),
        mask = document.getElementById("mask"),
        close = document.getElementById("close");
    save();



    if(!localStorage.userInfo) {
        // 假设第一次使用这个应用程序
        // 添加一些默认的数据
        var time = new Date();
        var datas  = [
            {
                num: "G1001101",
                name: "iPhone X",
                type: "手机",
                stork: "1216",
                price: "8188",
                des: "64G",
                time : time.toLocaleString()
            },
            {
                num: "G1001121",
                name: "OPPO R11s Plus",
                type: "手机",
                stork: "876",
                price: "3699",
                des: "拍照手机",
                time : time.toLocaleString()
            },
            {
                num: "G1001108",
                name: "Macbook pro",
                type: "电脑",
                stork: "206",
                price: "14188",
                des: "216G",
                time : time.toLocaleString()
            }
        ];
        localStorage.userInfo = JSON.stringify(datas);
    }
    // 加载数据
    loading();



    add.onclick = function () {
        mask.style.display = "block";
        var num = document.getElementById("num-ipt") ,
            name = document.getElementById("name-ipt"),
            type = document.getElementById("type-ipt"),
            stock = document.getElementById("stock-ipt"),
            price = document.getElementById("price-ipt"),
            des = document.getElementById("des-ipt");

        num.value  = "";
        name.value = "";
        type.value = "";
        stock.value = "";
        price.value = "";
        des.value = "";



        affirm.onclick = function () {
            var num = document.getElementById("num-ipt").value,
                name = document.getElementById("name-ipt").value,
                type = document.getElementById("type-ipt").value,
                stock = document.getElementById("stock-ipt").value,
                price = document.getElementById("price-ipt").value,
                des = document.getElementById("des-ipt").value;

            var time = new Date();

            var data = [],
                stroge = localStorage.getItem("userInfo");
            if(stroge){
                data = JSON.parse(stroge)
            }
            data.push({ num:num,
                name:name,
                type:type,
                stock:stock,
                price:price,
                des:des,
                time : time.toLocaleString()});

            var dataStr = JSON.stringify(data);
            localStorage.setItem("userInfo",dataStr);
            mask.style.display = "none";
            save();
        }
    }
    //关闭
    close.onclick = function () {
        mask.style.display = "none";
    }


})();