/**
 * 功能：用户注册数据有效性验证
 **/
var validateInfo = {
    name: false,
    tel: false
}



// 验证昵称
validate(
    'name',
    '^[\\u3000-\\u9FFF]{1,10}$',
    '只能输入您的的中文名字'
);



// 验证手机号
validate(
    'tel',
    '^1\\d{2}\\-?\\d{4}\\-?\\d{4}$',
    '请输入11位手机号'
);






/**
 * 验证函数
 * @param ident { String } 输入框的ID
 * @param regexp { RegExp } 正则表达式
 * @param errInfo { String } 错误信息
 */
function validate(ident,regexp,errInfo) {
    var input = document.getElementById(ident);
    input.onblur = function() {
        // 编写正则规则
        // var regx = /^\w+@[a-z0-9]+\.[a-z]{2,}$/i;
        var regx = new RegExp(regexp);
        // 获取当前用户所输入的值
        var thisVal = this.value;
        // 用正则去验证用户输入的值
        var pass = regx.test(thisVal);
        // 找到错误信息的显示容器
        var errMesg = this.previousElementSibling.previousElementSibling;
        // 验证通过
        if(pass) {
            errMesg.textContent = '';
            validateInfo[ident] = true;
        }
        // 验证不通过
        else {
            errMesg.textContent = errInfo;
            validateInfo[ident] = false;
        }
    }
}

var submit = document.getElementById('bottom');
submit.onclick = function() {
    // 获取表单元素
    var name = document.getElementById('name'),
        tel = document.getElementById('tel');
    // 自动执行失去焦点事件

    name.onblur();
    tel.onblur();


    // 进行判断的逻辑
    var isPass = null;
    for(var x in validateInfo) {
        if(validateInfo[x] === false) {
            isPass = false;
        }
    }
    if(isPass === null) {
        isPass = true;
    }
    if(isPass) {
        location.href = 'success.html';
    } else {
        alert('请检查输入的项！');
    }
}





