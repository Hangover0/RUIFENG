//获取DOM元素
function getEl(Sel) {
    return document.querySelector(Sel);
}

//添加用户
function add(user, password) {
    if(!user || !password){
        alert("请完善信息！");
        return;      //终止函数
    }

    //定义存储数据的集合
    var rootArr;
    //判断本地是否已存在数据集合
    //如果存在，则根据本地数据集合初始化数组
    //否则，直接创建一个空数组
    if (!localStorage.getItem("SMS")){
        rootArr = [];
    }else{
        //解析JSON数据(JSON.parse)
        //JSON.parse(localStorage.getItem("SMS"))
        rootArr = JSON.parse(localStorage.getItem("SMS"));
        var flunk = rootArr.filter(function (item) {
            return item.user == user;
        })
        if(flunk.length > 0){
            alert("此用户已注册，请直接登录！");
            return;
        }
    }
    //将数据存储到rootArr中
    rootArr.push({
        user: user,
        password: password
    });
    //更新本地数据
    var jsonObj = JSON.stringify(rootArr);
    localStorage.setItem("SMS", jsonObj);
}






//检查用户是否注册
function inspect(user, password, check) {
    if(!user || !password){
        alert("请完善信息！");
        return;      //终止函数
    }


    //定义存储数据的集合
    var rootArr;
    rootArr = JSON.parse(localStorage.getItem("SMS"));



    if(!JSON.parse(localStorage.getItem("userInfo"))){
        alert("用户不存在！");
        return;
    }

    var flunk = rootArr.filter(function (item) {
        return item.user == user;
    })
    console.log(flunk);
    if(flunk.length == 0){
        alert("此用户不存在，请先注册！");
        return;
    }


    if(flunk[0].password != password){
        alert("你输入的账号或密码不对！");
        return;
    }


    //更新本地数据
    var jsonObj = JSON.stringify(rootArr);
    localStorage.setItem("SMS", jsonObj);



    if(check.checked){
        var arr = [];
        arr.push({
            name: user,
            pw: password
        })
        var strObj = JSON.stringify(arr);
        localStorage.setItem("userInfo", strObj);

    }else {
        var arr = [];
        var strObj = JSON.stringify(arr);
        localStorage.setItem("userInfo", strObj);
    }
    location.href = "index.html";
}



