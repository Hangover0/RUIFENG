//全局变量，可以在任意位置访问
//全局作用域
var car = "Benz";


//自调用函数/保护私有变量
(function () {

    console.log(car); //Benz


    //1.注释
    //这是一个单行注释，可以嵌套
    /*这是一个多行注释，不能嵌套*/

    //2.变量
    var name;  //分配内存空间
    name = "zzw"; //变量赋值


    var age = 21;
    console.log(name);  //name是变量
    //变量必须要先声明后使用
    //console.log(number); //no defined


    var color;
    console.log(color);  //underfined(没有值)

    //变量提升
    console.log(lang);  //underfined
    var lang = "Javascript";
    console.log(lang);  //javascript


    //修改变量
    lang = "java";
    console.log(lang);  //java


    var lang;
    console.log(lang);  //java


    //变量可以重复（一般不建议这么做）
    var lang = "Swift";
    console.log(lang);  //Swift

    var a = 19,b = 21;  //同时定义多个变量



    //类型推断
    //typeof:查看变量的数据类型
    console.log(typeof  lang);  //string字符串
    console.log(typeof a);   //number数值


    //驼峰命名
    var personAge = 49;


    //数据类型转换
    //1.转换为数值 "+"是字符串拼接
    console.log("4" - 3);  //1
    console.log("4" + 3);  //"43"
    //NaN (not a number)
    var result = Number("4") + 3;
    console.log(result);


    //Number是整体转换，只要存在非数字字符，则结果为NaN
    //parseInt是从左往右逐一转换，一旦遇到了非数字字符，终止转换，
    //并返回已转换的结果


    //运算符与表达式
    //1.基本运算符
    //+  -   *   /(加减乘除)
    //++（自增运算符，自身加一）、--（自减运算符，自身减一）

    var x = 10;
    x++;
    console.log(x);  //11
    //无论加加在前还是加加在后，自身都会加一
    ++x;
    console.log(x);  //12

    var x = 10,y;
    y = ++x + 10;
    //字符串的拼接
    console.log("x = " + x +", y = " + y);


    x = 10;
    y = x++ + 10;
    //字符串的拼接
    console.log("x = " + x +", y = " + y);
    //结论：
    //++在前，先自身+1，在参与运算；
    //++在后，先参与运算，在自身+1；



    //+=  -=  *=  /=   %=
    //x += y   ->    x = x + y
    //x -= y   ->    x = x - y
    //x += y   ->    x = x + y



    //逻辑运算符
    //&& 与  同时为真才为真
    //|| 或  同时为假才为假
    //!  非  取反



    //三元运算符
    //x ? y : z
    //语法解读：
    //首先判断x的值
    //如果x为真，则执行语句y
    //如果x为假，则执行语句z
    var isLogin;


    var x =10,y =5;
    y -= ++x - (x % 3) - x;
    console.log(x,y);

})();

//lang是在函数内部定义的变量
//所以lang是一个局部变量
//因此无法在函数外部进行访问
//局部变量起作用的区域只限于函数内部
//因此称为局部作用域或者函数作用域
//console.log(lang);  //lang is not defined





