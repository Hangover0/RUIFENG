(function () {
    //定义变量
    var totalPage = 0,      //记录总页数
        curIndex = 1,     //记录当前页
        wrap = getEl(".container"),
        oCurPage = getEl(".curPage"),
        oTotalPage = getEl(".totalPage"),
        oUp = getEl(".up"),
        oDown = getEl(".down"),
        data = null;

    //获取数据
    GET({
        url:"./JSON/data.json",
        success:function (response) {
            data = response.infor;
            //更新总页数
            totalPage = Math.ceil(data.length / 16);
            oTotalPage.textContent = totalPage;
            //加载页面
            loadingHtml(wrap, data, curIndex);
        }
    })
    oUp.onclick = function () {
        if(curIndex == 1){
            return;
        }else{
            curIndex--;
        }
        loadingHtml(wrap, data, curIndex);
        oCurPage.textContent = curIndex;
    }
    oDown.onclick = function () {
        if(curIndex == totalPage){
            return;
        }else{
            curIndex++;
        }
        loadingHtml(wrap, data, curIndex);
        oCurPage.textContent = curIndex;
    }


    goTop();
})()
