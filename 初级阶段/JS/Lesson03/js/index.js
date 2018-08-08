(function () {

    //true,是因为js中整数是以浮点数表示的
    console.log(2 === 2.0);


    console.log(0.5 + 0.2 === 0.7);
    console.log(0.5 - 0.2 === 0.3);


    //toFixed:保留小数位数
    var π = Math.PI.toFixed(2);  //对数学中的PI保留两位小数
    console.log(π);


    //pow(m,n);求m的n次方
    console.log(Math.pow(2,3));



    var a = "3.14",b = "12e-2";
    var result = parseInt(parseFloat(a) + parseFloat(b));
    console.log(result);



    console.log(parseInt(0b1010));   //10
    console.log(parseInt("0b1010"));    //异常
    console.log(parseInt("1010",2));     //10
    console.log(parseInt(0xA));    //10
    //将10进制的8转换为16进制
    console.log((8).toString(16));
    //将91716转换为2进制
    console.log((229).toString(2));
    console.log(parseInt(0b11100101));



    //字面量创建方法
    var a = 10;
    console.log(typeof a);   //number
    //对象构造方法
    //对象都有有个关键字new
    var b = new Number(10);
    console.log(typeof b);  //object



    //为指定对象拓展新的方法
    Number.prototype.ememem = function () {
        console.log("余生！");
    }
    var a = -10;
    a.ememem();
})()