(function () {
    // 1、获取dom元素
    var oFirIpt = document.getElementById('fir');
    var oSecIpt = document.getElementById('sec');
    var oSelect = document.getElementById('operation');
    var oResult = document.getElementById('result');

    // 2、事件添加
    oFirIpt.oninput = function () {
        calculate(oFirIpt, oSecIpt, oSelect, function (result) {
            oResult.textContent = result;
        });
    }
    oSecIpt.oninput = function () {
        calculate(oFirIpt, oSecIpt, oSelect, function (result) {
            oResult.textContent = result;
        });
    }
    oSelect.onchange = function () {
        calculate(oFirIpt, oSecIpt, oSelect, function (result) {
            oResult.textContent = result;
        });
    }

})()


function calculate(fir, sec, select, callBack) {
    // 异常处理
    if(!judgeValue(fir.value, sec.value)) {
        return;
    }
    // 获取文本输入框输入的数字
    var firValue = parseFloat(fir.value);
    var secValue = parseFloat(sec.value);
    // 获取运算符
    var options = select.options;
    var idx = select.selectedIndex;
    var option = options[idx];
    var operator = option.textContent;

    var result = 0;
    switch(operator) {
        case '+': {
            result = firValue + secValue;
        }break;
        case '-': {
            result = firValue - secValue;
        }break;
        case '×': {
            result = firValue * secValue;
        }break;
        case '÷': {
            result = firValue / secValue;
        }break;
    }


    // 通过回调函数返回结果
    if(callBack) {
        callBack(result);
    }
}

/**
 * 异常处理
 */
function judgeValue(firValue, secValue) {
    if(!firValue || !secValue || isNaN(firValue) || isNaN(secValue)) {
        return false;
    }
    return true;
}