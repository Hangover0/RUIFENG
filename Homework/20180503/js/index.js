(function () {
    //第一题
    var str = "2340sadfj2affa2";
    var len = str.length;
    var count = 0;
    console.log(str.indexOf("a")+1, str.length);
    console.log(len);
    for(var i = 0;i <= len;i++)
    {
        if(str.indexOf("a") != -1)
        {
            str = str.slice(str.indexOf("a")+1, str.length);
            count++;
        }
    }
    console.log(count);



    //第二题
    var str = "49238028424";
    console.log(str.replace(/2/g,""));


    //第三题
    var str = "Hello";
    console.log(str.slice(4) + str.slice(3, 4) + str.slice(2, 3) + str.slice(1, 2) + str.slice(0, 1));

    var arr = ["H", "e", "l", "l", "o"];
    //逆序输出字符数组
    console.log(arr.reverse());





    //第四题
    var str = "http://www.hiheng.com/demo/css3/index.js";
    //4.1
    console.log(str.slice(0, 4));
    //4.2
    var res = /index/.test(str);
    console.log(res);
    console.log(str.search("index"));
    console.log(str.slice(32, 37));
    //4.3
    console.log(str.search("js"));
    console.log(str.slice(38));
    //4.4
    console.log(str.search("w"));
    console.log(str.search("m"));
    console.log(str.slice(7, 21));





    //倒三角形
    var row = 5,
        spaces,
        stars,
        str = "";
    for (var i = row;i >= 0;i--){
        spaces = row - i;
        stars = 2 * i - 1;
        for (var j = 0;j < spaces;j++){
            str += " ";
        }
        for (var k = 0;k < stars;k++){
            str += "*";
        }
        str += "\n";
    }
    console.log(str);


})()