//定时器
function interval() {
    var count = 10;
    var t = setInterval(function () {
        console.log(count--);
        if(count == 0){
            console.log("Boom....");
            clearInterval(t);
            t = null;
        }
    },1000)
}


//延时函数
function timeout() {
    console.log("3s 后打印'Hello,world!'");
    setTimeout(function () {
        console.log("Hello,world!");
    },3000);
}

//缓存实例
function getEl(sel) {
    return document.querySelector(sel);
}

//添加用户
function add(name, major, origin) {
    if(!name || !major || !origin){
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
    }
    //将数据存储到rootArr中
    rootArr.push({
            name: name,
            major: major,
            origin: origin
    });

    //更新本地数据
    var jsonObj = JSON.stringify(rootArr);
    localStorage.setItem("SMS", jsonObj);
    console.log("数据添加成功！");
}





function show(ul) {
    if(!localStorage.SMS) {
        alert("没有数据，请添加数据！");
        return;
    }
    var rootArr = JSON.parse(localStorage.SMS);
    if(rootArr.count == 0) {
        alert("没有数据，请添加数据！");
    }else {
        // 将数据显示在页面上
        var htmlStr = "";
        rootArr.forEach(function(student){
            htmlStr += `<li>
                            <p>姓名：${student.name}</p>
                            <p>专业：${student.major}</p>
                            <p>籍贯：${student.origin}</p>
                        </li>`;
        });
        ul.innerHTML = htmlStr;
    }
}


function clear(ul) {
    // 清空本地数据
    localStorage.removeItem("SMS");
    // 清空页面数据
    ul.innerHTML = "";
}


