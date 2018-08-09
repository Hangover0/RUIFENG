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
                num: 1001,
                name: "iPhone",
                kind: "手机",
                stor: 29,
                price: 9999,
                des: "64G",
                update: new Date()
            },
            {
                num: 1002,
                name: "iPhone",
                kind: "手机",
                stor: 29,
                price: 9999,
                des: "64G",
                update: new Date()
            },
            {
                num: 1003,
                name: "iPhone",
                kind: "手机",
                stor: 29,
                price: 9999,
                des: "64G",
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
        // 执行添加商品逻辑了
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