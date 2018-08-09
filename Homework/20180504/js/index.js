(function () {

    /*var iArray =[];
    function getRandom(iStart,iEnd){
        var iChoice = iStart-iEnd+1;
        return Math.abs(Math.floor(Math.random()*iChoice))+iStart;
    }
    for(var i=0;i<10;i++){
        iArray.push(getRandom(100,200))
    }
    console.log(iArray)*/


    //第一题
    var numArray = [];
    for (var i = 0 ;i < 20 ;i++){
        numArray.push(parseInt(Math.random()*100 + 100));
    }
    console.log(numArray);
    var max = numArray[0],
        min = numArray[0],
        average = 0,
        sum = 0,
        len = numArray.length;
    for (var i = 0;i < len;i++){
        sum += numArray[i];
        max = numArray[i] > max ? numArray[i] : max;
        min = numArray[i] < min ? numArray[i] : min;
    }
    average = sum / len;
    console.log("最大值是：" + max);
    console.log("最小值是：" + min);
    console.log("平均值是：" + average);

    var newArray = numArray.map(function(item) {
        return parseInt(item - average);
    })
    console.log(newArray);




    //第二题
    var  messages = [
        {StudentId : 1001, name : "张三", major : "计算机网络", grade : 87},
        {StudentId : 1002, name : "王五", major : "计算机网络", grade : 50},
        {StudentId : 1003, name : "小红", major : "计算机网络", grade : 43},
        {StudentId : 1004, name : "老王", major : "计算机网络", grade : 91},
        {StudentId : 1004, name : "小李", major : "计算机网络", grade : 74},
    ];
    var res = messages.sort(function (mes1, mes2) {
        return mes2.grade - mes1.grade;
    });
    console.log(res);
    var sum = 0,
        max = messages[0].grade,
        min = messages[0].grade,
        fail = 60,
        len = messages.length;
    for (var i = 0 ;i < len;i++){
        sum += messages[i].grade;
        max = messages[i].grade > max ? messages[i].grade : max;
        min = messages[i].grade < min ? messages[i].grade : min;
        if( messages[i].grade < 60){
            console.log(messages[i]);
        }
    }
    console.log("平均值为：" + sum / len);
    console.log("最大值为：" + max);
    console.log("最小值为：" + min);





    //第三题
    //第一种
    var str = "I have a dream";
    var newArray = str.split(" ");
    for (var i = 0; i < newArray.length; i++){
        var arr = newArray[i].split("");
        arr[0] = arr[0].toUpperCase();
        newArray[i] = arr.join("");
    }
    console.log("单词个数为：" + newArray.length);
    console.log("第一个字母大写：" + newArray.join(" "));


    //第二种
    function titleCase(str) {
        var newarr,newarr1=[];
        newarr = str . toLowerCase() . split(" ");
        for(var i = 0 ; i < newarr . length ; i++){
            newarr1 . push(newarr[i][0] . toUpperCase()+newarr[i] . substring(1));
        }
        return newarr1.join(' ');
    }
    str = "I'm a little tea pot";
    console.log("单词个数为：" + str.split(" ").length);
    console.log("第一个字母大写：" + titleCase(str));




})()