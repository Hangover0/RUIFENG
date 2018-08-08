(function () {
    var s1 = "Hello,'Tom'!",
        s2 = "Hello, \"Tom\"!",
        s3 = "今天是个" +
            "好日子";
    console.log(s1);
    console.log(s2);
    console.log(s3);

    //字符串与数组
    var fruits = ["香蕉","西瓜","苹果","菠萝"];
    console.log(fruits);
    //将数组转换为字符串
    console.log(fruits.join(","));
    //将字符串转换为数组
    var name = "张志威，赵恒瑞，唐荣萍";
    console.log(name.split(','));

    //将字符串转换为Unicode编码
    var result = "\\u" + "张志威".charCodeAt(2).toString(16);
    console.log(result);
    var result = "\\u" + "张志威".charCodeAt(1).toString(16);
    console.log(result);
    var result = "\\u" + "张志威".charCodeAt(0).toString(16);
    console.log(result);

    //将字符串转换为Unicode编码
    function toUnicodeString(str) {
        var  result = '';
        for (var i = 0; i < str.length; i++) {
            result += "\\u" + str.charCodeAt(i).toString(16);
        }
        return result;
    }
    var s = toUnicodeString("余生");
    console.log(s);



    //结论：判断一个对象为包装对象还是内置对象的方法：
    //1.对指定对象使用Object（）方法之后，如果恒等于
    //自身，那么他是一个内置对象，否则为包装对象。
    //2.直接typeof查看指定对象的类型，如果为Object，
    //则为内置对象，否则为包装对象。
    var str = "Hello,world!";
    console.log(str === Object(str));    //false
    //用new关键字来创建对象
    var objStr = new String("Hello,world!");
    console.log(typeof objStr);   //内置对象
    console.log(objStr);
    console.log(objStr.valueOf());



    //字符串的长度
    var str = "tries!";
    //属性用.链接
    console.log(str.length);   //6
    //字符串查询，利用字符串的下标
    console.log(str.charAt(2));   //i
    console.log(str.charAt(-3));   //空字符串“   ”
    console.log(str.charAt(233));  //空字符串“   ”



    str = "今天天气非常不错!"
    //返回的是下标
    console.log(str.indexOf("天气"));  //2
    console.log(str.indexOf("雷电"));  //-1  (没有就返回-1)
    //indexOf是从前面开始找，lastindexOf是从后面开始找
    console.log(str.indexOf("天"));    //1
    console.log(str.lastIndexOf("天"));   //2
    //第二个属性是从下标为多少开始查询
    console.log(str.indexOf("天", 2));   //2

    console.log(str.match("天气"));
    //没有找到就返回null
    console.log(str.match("雷电"));    //null

    //查找都是和下标有关，search和indexOf类似
    console.log(str.search("天气"));     //2
    console.log(str.search("雷电"));    //-1

    //查询头部，返回的是boolean值
    //^ 以.....开头(写在前面)
    console.log(/^今天/.test(str));    //true
    // $ 以.....结尾(写在后面)
    console.log(/前端$/.test(str));     //false



    //字符串拼接用“+”
    var a = "hello,";
    var b = "你好！";
    console.log(a + b);



    //去除字符串两端的空格,不是去除中间的空格
    var s = "        坚持不该坚持的，放弃不该放弃的！         "
    console.log(s.trim());


    //大小写转换
    var s = "I love you!";
    //调用属性的时候用.链接，但是调用方法的时候要用()
    console.log(s.toUpperCase());
    console.log(s.toLowerCase());



    //字符串替换
    var s = "班干部管班干部";
    console.log(s.replace("班干部","干部"));
    //g是正则表达式全局匹配模式
    console.log(s.replace(/班干部/g,"干部"));



    //字符串截取 slice (start,end)
    //它的第一个参数是开始位置，第二个参数是结束位置（不含该位置）
    var str = "Hello,girl!";
    //，后面有空格
    console.log(str.slice(6, 10));   //girl
    //如果只有一个值，就是从开始位置到尾末
    console.log(str.slice(6));
    console.log(str.slice(-5, -1));   //没有-0，负数直接从-1开始
    console.log(str.slice(3,1));   //返回空字符串


    var num = "510183199703247164";
    console.log(num.slice(6, 10) + "年" + num.slice(10, 12) + "月" + num.slice(12, 14) + "日");


    var x = 3; //x 作为行遍历
    var y = 3; //y 作为列遍历
    var str = "";

    for(var i = x;i >= 0;i--){
        for(var j = 0;j < y - i;j++){
            str += " ";     //打印空格
        }
        for(var j = 0;j < 2 * i - 1;j++){
            str += "*";         //输出*
        }
        str += "\n";
    }
    console.log(str);






})()