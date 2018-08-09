(function () {

    //第一题
    var salary = 5000;
    switch (true){
        case salary > 10000 :{
            console.log("购买ipone 7 Plus");
        }break;
        case 6000 < salary && salary <= 10000 :{
            console.log("购买 SAMSUNG  Galaxy S8");
        }break;
        case 3000 < salary && salary <= 6000 :{
            console.log("购买 OPPO R9S Plus");
        }break;
        case 1000 < salary && salary <= 3000 :{
            console.log("购买 MU Note4 X");
        }break;
        default:{console.log("等存足钱之后再买手机")}
    }


    //第二题
    for(var i = 1;i <= 100;i++){
        if(i % 3 == 0){
            console.log(i);
        }
    }



    //第三题
    var sum = 0;
    for(var i = 1;i <= 1000;i++){
        if(i % 3 == 0 && i % 2 == 0){
            sum = ++sum;
        }
    }
    console.log(sum);



    //第四题
    for(var year = 2000;year <= 3000;year++){
        if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            console.log(year);
        }
    }




    //第五题
    var str = '';
    for(var i = 1; i <= 9; i++) {
        str = '';
        for(var j = 1; j <= i; j++) {
            str += i + "*" + j + "=" + i * j + "   ";
        }
        console.log(str);
        str += "\n";
    }


    //第六题6.1
    var spaces, stars, str = '';
    for(var i = 1; i <= 4; i++) {
        spaces = 4 - i;
        stars  = 2 * i - 1;
        // 打印空格
        for(var j = 1; j <= spaces; j++) {
            str += ' ';
        }
        // 打印星星
        for(var k = 1; k <= stars; k++) {
            str += "*";
        }
        str += "\n";
    }
    console.log(str);




    //第六题6.2
    var spaces, stars, str = '';
    for(var i = 1; i <= 5; i++) {
        spaces = Math.abs(Math.ceil(5/2) - i);
        stars  = 5 - 2 * spaces;
        // 打印空格
        for(var j = 1; j <= spaces; j++) {
            str += ' ';
        }
        // 打印星星
        for(var k = 1; k <= stars; k++) {
            str += '*';
        }
        str += '\n';
    }
    console.log(str);




    var days = 5,month = 3,numberTime = 0;
    switch(month)   //控制月的天数
    {
        case 1:{numberTime += 31};
        case 2:{numberTime += 28};
        case 3:{numberTime += 31};
        case 4:{numberTime += 30};
        case 5:{numberTime += 31};
        case 6:{numberTime += 30};
        case 7:{numberTime += 31};
        case 8:{numberTime += 31};
        case 9:{numberTime += 30};
        case 10:{numberTime += 31};
        case 11:{numberTime += 30};
        case 12:{numberTime += 31};
    }
    numberTime = 365 - numberTime + days;
    console.log(month + "月" + days + "日" + "是今年的第" + numberTime);



})();