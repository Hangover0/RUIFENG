(function () {
    var input = document.getElementById("idIpt");
    var btn = document.getElementById("but");
    var p = document.getElementById("test");


    btn.onclick = function () {
        var value = input.value;
        if (value.length != 18 || isNaN(value)) {
            alert("你输入的身份证不合法！");
            return;
        }
        var str = "出生年月：" + value.slice(6, 10) + "年" + value.slice(10, 12) + "月" + value.slice(12, 14) + "日";
        p.textContent = str;
    }



}());







//第二题
//第一种
var nums = [34,34,66,77,32,1];
function minmaxNums() {
    var max = nums[0];
    var min = nums[0];
    for(var i = 0; i < nums.length; i++) {
        max = nums[i] > max ? nums[i] : max;
        min = nums[i] < min ? nums[i] : min;
    }
    return [min, max];
}
console.log(minmaxNums(nums));

//闭包函数
var numArr = [34,34,66,77,32,1];
function minmaxArr() {
    var max = numArr[0];
    var min = numArr[0];
    return function () {
        for(var i = 0; i < numArr.length; i++) {
            max = numArr[i] > max ? numArr[i] : max;
            min = numArr[i] < min ? numArr[i] : min;
        }
        return [min, max];
    }
}
var result = minmaxArr()();
console.log(result);


//闭包回调函数
function minAndMaxInArr(arr, len, callback) {
    arr.sort(function(n1, n2){
        return n1 - n2;
    });
    callback && callback(arr[0], arr[len - 1]);
}

var arr = [1, 3, 11, 2, 8];
minAndMaxInArr(arr, arr.length, function(min, max) {
    console.log("最小值：" + min + ", 最大值：" + max);
});


//闭包回调函数
function maxmin(array, len, callback) {
    array.sort(function (a1, a2) {
        return a2 - a1;
    })
    callback && callback(array[0], array[len-1]);
}
var array = [3,55,24,72,23]
maxmin(array, array.length, function (max, min) {
    console.log("最大值：" + max + "最小值：" + min);
})









//第三题
var students = [
    {num: 1101, name: "张三", major: "前端", score: "50"},
    {num: 1102, name: "李四", major: "前端", score: "76.5"},
    {num: 1103, name: "王麻子", major: "前端", score: "91"},
    {num: 1104, name: "赵二", major: "前端", score: "66"},
    {num: 1105, name: "王老吉", major: "前端", score: "88"},
];
solve(students, function(resObj) {
    console.log("数组排序结果：")
    console.log(resObj.sortArr);

    console.log("平均成绩:" + resObj.ave);

    console.log("成绩最高的学生信息是：");
    console.log(resObj.highInfo);

    console.log("成绩最低的学生信息是：");
    console.log(resObj.lowInfo);

    console.log("不及格的学生包括：")
    console.log(resObj.flunk);
});
function solve(students, callback) {
    // 第1小问
    var results = students.sort(function(stu1, stu2){
        return stu2.score - stu1.score;
    });
    // 第2小问
    var sum = 0;
    students.forEach(function(stu){
        sum += parseFloat(stu.score);
    });

    var ave = (sum / students.length).toFixed(2);

    // 第3小问
    // 第4小问
    var flunk = students.filter(function(stu){
        return stu.score < 60;
    });
    callback && callback({
        sortArr: results,
        ave: ave,
        highInfo: results[0],
        lowInfo: results[results.length - 1],
        flunk: flunk
    });
}



/*有一行英文语句，统计其中的单词个数（单词之间以空格分隔），并将每一个单词的第一个字母改为大写。*/
function convert(str, callback) {
    var arr = str.split(" ");
    for(var i = 0 ; i < arr . length ; i++){
        var b = arr[i].split("");
        b[0] = b[0].toUpperCase();
        arr[i] = b.join("");
    }
    var newarr = arr.join(" ");
    callback && callback(newarr);
}
var str = "i have a dream";
convert(str, function (res) {
    console.log("转换为：" + res);
})




