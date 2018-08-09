(function () {
    var arr = ["这是","一个","一位","非常","异常","迷人","动人","的","故事","美女"],
        arr_len = arr.length,
        res = "";

    for(var i = 0; i < arr_len; i++) {
        if(i == 1 || i == 4 || i == 6 || i == 8) {
            continue;
        }
        res += arr[i];
    }
    console.log(res);



    function printUserInfo(index) {
        var objArr = [
                {
                    name: "赵恒锐",
                    hobby: "撩妹"
                },
                {
                    name: "李塞寒",
                    hobby: "吃"
                },
                {
                    name: "张吉丹",
                    hobby: "加班"
                },
                {
                    name: "张志威",
                    hobby: "劈砖"
                }
            ],
            objArr_len = objArr.length;
        for(var i = 0; i < objArr_len; i++) {
            if(i == index) {
                return "姓名：" + objArr[i].name + "，爱好：" + objArr[i].hobby + "。";
            }
        }
    }
    var op = printUserInfo(2);
    console.log(op);



    // 定义一个数组
    var arr = ["赵恒锐", "李塞寒", "张吉丹", "张志威", "赵文乐", "刘希", "彭丽", "陶泽英", "何仕林", "曾雪梅", "王兴明", "覃奋", "金星希", "吴宏宇", "李德森", "何晨霄", "刘金华", "温冲", "唐荣萍", "刘博", "杨洋", "张倩", "刘伟", "冯豪", "曾金婷", "李昊臻", "黄俊荣", "宋奇星", "刘浩"];
    var count = 0;
    while(count < arr.length) {
        if(count%5 == 0) {
            console.log(arr[count]);
        }
        count++;
    }


    var logicRes1 = "花" || ["草"] || { name: "树"} || (function() { return })();
    var logicRes2 = "花" && ["草"] && { name: "树"} && (function() { return "木"})();
    var logicRes3 = (null && undefined) || ("花" && 1) || ("草" && ["木"]);
    console.log(logicRes1);
    console.log(typeof logicRes1);
    console.log(Boolean(logicRes1));
    console.log(logicRes2);
    console.log(typeof logicRes2);
    console.log(Boolean(logicRes2));
    console.log(logicRes3);
    console.log(typeof logicRes3);
    console.log(Boolean(logicRes3));




    Array.prototype.removeDuplicate = function () {
        var json = {};
        var arr  = [];
        for(var i = 0, len = this.length; i < len; i++) {
            if(!json[this[i]]) {
                json[this[i]] = true;
                arr.push(this[i]);
            }
        }
        return arr;
    }
    var result = [1, 2, 3, 3, 4, 5].removeDuplicate();
    console.log(result);




})()

var arr = [1,34,4,4,4,46,67,3,36,34,34,65];
(function() {
    var noRepArr = new Set(arr);
    noRepArr = Array.from(noRepArr);
    console.log(noRepArr);
})();



function noRepeat(arr) {
    var noRepArr = [];
    for (var i = 0;i < arr.length; i++){
        if(noRepArr.indexOf(arr[i]) === -1){
            noRepArr.push(arr[i]);
        }
    }
    return noRepArr;
}
var arr1 = [2,2,2,5,4,4,4,666,66,5,33];
var newArr = noRepeat(arr1);
console.log(newArr);


