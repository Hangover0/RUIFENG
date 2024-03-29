// 本地用户数据的key = "myUsers";
function getEl(Sel) {
    return document.querySelector(Sel);
}

function register(user, callback) { 
    if(!user.username || !user.password) {
        alert("请输入账号或密码！");
    }else if(isExist(user.username)) {
        // 判断用户是否已经存在
        alert("用户已经存在！");
    }else {
        // 创建一个根数组
        // 根据本地是否存在用户数据集合来初始化根数组
        // 如果本地已经存在，则根据本地用户数据集合来初始化
        // 如果不存在，则直接初始化一个空数组
        var rootArr = null;
        if(localStorage.myUsers) {
            rootArr = JSON.parse(localStorage.myUsers);
        }else {
            rootArr = [];
        }
        // 将新用户放入根数组中
        rootArr.push(user);
        // 将根数组转换为JSON 对象
        var jsonObj = JSON.stringify(rootArr);
        // 更新本地数据
        localStorage.myUsers = jsonObj;
        callback && callback();
    }
}

function login(user, callback) {
    var kUser = isExist(user.username);
    if(!user.username || !user.password) {
        alert("请输入账号或密码！");
    }else if(kUser) { // 用户存在
        if(user.username == kUser.username && user.password == kUser.password) {
            callback && callback();
        }else {
            alert("账号或密码错误！");
        }
    }else { // 用户不存在
        alert("用户不存在，点击前往注册！");
    }
}

// 判断用户是否存在
function isExist(username) {
    // 假设用户不存在
    var user = null;
    // 如果本地存在myUsers
    // 那我们就把其取出来之后再进行判断用户是否存在
    if(localStorage.myUsers) {
        var users = JSON.parse(localStorage.myUsers);
        // 遍历用户数据集合，判断当前注册用户是否存在
        for(var i = 0, len = users.length; i < len; i++) {
            if(users[i].username == username) {
                user = users[i];
                break;
            } 
        }
    }
    return user;
}


function saveUserInfo(user) {
    localStorage.localUser = JSON.stringify(user);
}
function removeUserInfo() {
    localStorage.removeItem("localUser");
}
