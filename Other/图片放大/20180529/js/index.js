(function () {
    var addBtn = document.querySelector(".addition"),
        closeBtn = document.querySelector(".closeBtn"),
        sureBtn = document.querySelector("#add-edit-btn"),
        input1 = document.querySelector(("#goodsForm input:nth-child(1)")),
        input2 = document.querySelector(("#goodsForm input:nth-child(2)")),
        input3 = document.querySelector(("#goodsForm input:nth-child(3)")),
        input4 = document.querySelector(("#goodsForm input:nth-child(4)")),
        input5 = document.querySelector(("#goodsForm input:nth-child(5)")),
        input6 = document.querySelector(("#goodsForm input:nth-child(6)"));




    if(!localStorage.goods) {
        // 假设第一次使用这个应用程序
        // 添加一些默认的数据
        var datas  = [
            {
                num: "G1001101",
                name: "iPhone X",
                kind: "手机",
                stor: 1216,
                price: 8188,
                des: "64G",
                update: new Date()
            },
            {
                num: "G1001121",
                name: "OPPO R11s Plus",
                kind: "手机",
                stor: 876,
                price: 3699,
                des: "拍照手机",
                update: new Date()
            },
            {
                num: "G1001108",
                name: "Macbook pro",
                kind: "电脑",
                stor: 206,
                price: 14188,
                des: "216G",
                update: new Date()
            }
        ];
        localStorage.goods = JSON.stringify(datas);
    }
    // 加载数据
    loading();
    //点击关闭遮罩按钮
    addBtn.onclick = function () {
        showMask();
    };
    closeBtn.onclick = function () {
        closeMask();
    }
    sureBtn.onclick = function () {
        var goods = {
            num: input1.value,
            name: input2.value,
            kind: input3.value,
            stor: input4.value,
            price: input5.value,
            des: input6.value,
            update: new Date()
        }
        addGoods(goods);
    }

})();