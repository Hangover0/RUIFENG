(function () {
    var test_div = document.getElementById("test_div"),
        test_p = document.getElementById("test_p"),
        test_ul = document.getElementById("test_ul");

    function cented(ele) {
        var op = Object.prototype.toString.call(ele);
        op = op.substr(-8, 7).toLowerCase();
        if(op === "element"){
            ele.style.cssText = `
        position: fixed;
            left:50%;
            top:50%;
            transform:translate(-50%, -50%);
            z-index: 10;
            `;
        }else {
            throw Error("参数只能为Element对象");
        }

    }

    cented(test_div);
    var num1 = 2E00 * 3E00;
    console.log(num1);
    var num2 = 2E2 * 3E2;
    console.log(num2);
    var a = 10, b = 10, c = "10";
    // 运行
    console.log(a + b + c);


    function runFn() {
        var a = "1", b = "2", c = "3", res;
        res = a * b * c;
        if(isNaN(res)) {
            res = 0;
        }
        return res;
    }

    // 调用以上函数
    var op = runFn();
    console.log(op);

    function sum() {
        var num1 = document.getElementById("num1").value,
            num2 = document.getElementById("num2").value,
            num3 = document.getElementById("num3").value,
            res;
        return res = num1 + num2 + num3;
    }

// 调用以上函数
    var opp = sum();
    console.log(opp);


    var judge = function() {
        var skill = ["HTML","CSS","JavaScript","Bootstrap","jQuery","AngularJS","React","NodeJs"];
        skill.length = 5;
        console.log(5 in skill);
        return typeof(5 in skill);
    }
// 在控制台进行调用
    judge();


    var getMoney = "12335.23",
        total;

// 请在下方编写代码

    var total = parseFloat(getMoney);
    console.log(total);



    var strArr = ["21","12","45","13","68","10","7"];

    // 请在下方编写代码

    var sum1 = 0;

    for (var i = 0;i < strArr.length;i++){
        sum1 += Number(strArr[i]);

    }
    console.log(sum1);



    var mesg = document.getElementById("mesg"),
        member = mesg.textContent,
        userName = document.getElementById("userName");

    userName.onblur = function () {
        var userValue = this.value;
        sayHello(userValue);
    }
    function sayHello(userValue) {
        if(userValue){
            alert("尊敬的" + member + "," + userValue + "你好！");
        }
    }


    var str = "AXXBJTYJY1XX2XXDXOPCXX3XXEX4FWEFX5XXXJXXGXCZCXXXSRXXCXZCXEXX6HKTD";
    var arr = str.split("");
    var num = "";
    for(var i = 0;i < arr.length;i++){
        if(arr[i] == Number(arr[i])){
            num += arr[i];
        }
    }
    num = num.split("");
    console.log(arr);
    console.log(num);
    console.log(typeof num);
})()




var letter = [
    ["A","B","C","D","E"],
    ["F","G","H","I","J"],
    ["K","L","M","N","O"],
    ["P","Q","R","S","T"],
    ["U","V","W","X","Y"],
    ["Z"]
];

// 请在下方编写代码

for(var i = 0;i < letter.length;i++){
    console.log(letter[i]);
}



var arr1 = ["某","人","是","白","痴"];
var arr2 = [];
for (var i = 0;i < arr1.length; i++){
    arr2 += arr1[i];
}
arr2 = arr2.split("");
console.log(arr2);


var tel = "18323357899";
var regx =  /^1\d{2}\-?\d{4}\-?\d{4}$/;
console.log(regx.test(tel));



var u = "http://www.xiaoluohao.com";
var regx = /^([http|https])+:\/\/[^\s]*$/i;
console.log(regx.test(u));

var car = "51112319970324111X"
var regx = /^\d{17}[0-9xX]$/i;
console.log(regx.test(car));


var tel = "13312345678";
var regx = /^1\d{10}$/i;
console.log(regx.test(tel));


var psw = "dhg3445545";
var regx = /^[a-zA-Z]\w{6,16}$/i;
console.log(regx.test(psw));