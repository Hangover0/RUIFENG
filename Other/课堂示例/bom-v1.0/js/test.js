// iframe标签
var ifr = document.getElementById('ifr');

setTimeout(function() {
    // 获取iframe内部HTML的document
    var ifr_doc = ifr.contentDocument;
    // 获取iframe内部HTML的document的用户名和密码
    var userName = ifr_doc.getElementById('userName').textContent,
        pwd = ifr_doc.getElementById('pwd').textContent;
    
    // 当前页面的用户名和密码框
    var cur_userName = document.getElementById('cur_userName'),
        cur_pwd = document.getElementById('cur_pwd');

    cur_userName.value = userName;
    cur_pwd.value = pwd;
},100);
