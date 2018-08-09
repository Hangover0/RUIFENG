function sayHello() {
    //函数体,具体实现的功能
    //函数一定要调用，除非是自调用函数
    console.log("Hello,world!");
}
function drinkWith(someThing) {
    console.log("喝" + someThing + "!");
}
function testing(idCard, stuCard) {
    if (!idCard || !stuCard){
        console.log("证件不齐，不能进入考场！");
    }else{
        console.log("双证齐全，考试加油啊！");
    }
}
function sum(a, b) {
    //如果需要函数的结果来做一些操作就用return关键字来返回结果
    a = a == undefined ? 0 : a;
    b = b == undefined ? 0 : b;
    return a + b;

}
function showInfors(stuObj) {
    //处理默认值
    stuObj.name = stuObj.name || "";
    stuObj.age = stuObj.age || "";
    stuObj.grade = stuObj.grade || "";


    var str = "";
    str += "姓名：" + stuObj.name + "\n";
    str += "年龄：" + stuObj.age + "\n";
    str += "成绩：" + stuObj.grade + "\n";
    console.log(str);
}

function sum() {
    /*
    var result = 0;
    for (var i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;*/
    //将类似数组转换为真正的数组
    var newArr = Array.prototype.slice.call(arguments);
    var result = 0;
    newArr.forEach(function (num, index, arr) {
        result += num;
    })
   return result;
}


function changeNum(a) {
    a = 3.14;
}

function changeObj(stu) {
    stu.gender = "保密";
}
function changeArr(arr) {
    arr[0] = 10;
}

//变量函数
//var 定义语句要打分号，这时候一条语句
var sayHi = function () {
    console.log("Hi");
};


//自调用函数
(function () {
    console.log("自调用函数......");
})();



function Teacher(name, age, teach) {
    //this -> 指向正在创建的这个对象实例
    this.name = name;
    this.age = age;
    this.teach = teach;
}

//递归函数
//5！ -> 5 * 4 * 3 * 2 *1
function recursive(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * recursive(n - 1);
    }

}
function test(n) {
    console.log(n);
    if (n > 0) {
        test(n - 1);
    }
}

//嵌套在一个函数里面的函数就是闭包函数，间接读取函数的变量
function fn1() {
    var n = 10;
    function fn2() {
        return n;
    }
    return fn2;
}



function createIncrementor(start) {
    return function () {
        return start++;
    };
}
createIncrementor = null;



function subtract(a, b, callback) {
    callback(a - b);
}

