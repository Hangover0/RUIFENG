(function () {
    //调用函数，只需要调用函数的函数名
    sayHello();
    drinkWith();
    drinkWith("可乐");
    drinkWith("铁观音");


    testing();
    testing("1001", "0001");
    var result = sum();
    console.log(result);    //NaN,当return返回结果时，要定义一个变量来接受return返回的结果

    showInfors(
        {
            name: "Admin",
            age: 18,
            grade:99.5
        }
    )
    showInfors(
        {
            age: 18,
            grade:99.5,
            name: "Admin"
        }
    )
    showInfors(
        {
            grade:99.5,
            name: "Admin"
        }
    )
})()


console.log(sum(1,3,9,6,3));



//对象类型属于地址传递，非对象类型属于值传递
var a = 10;
changeNum(a);       //值传递
console.log(a);     //10

var b = new Number(10);
changeNum(b);       //值传递
console.log(b);     //10

var stu = {gender: "男"};
changeObj(stu);      //地址传递
console.log(stu.gender);     //保密

var arr = [0];
changeNum(arr);    //地址传递
console.log(arr);


sayHi();


//实例化对象、构造对象
//注意：构造对象new关键字是必须的
var teacher = new Teacher("张三",28,"Web前端");
console.log(teacher);


recursive(5);
test(5);


var n = fn1()();
console.log(n);   //10


subtract(10, 5, function (res) {
    console.log(res);   //5
})

