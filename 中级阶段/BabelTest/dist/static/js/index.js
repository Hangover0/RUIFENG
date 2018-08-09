"use strict";

var a = 10;
{
    var π = 3.14;
}
console.log(π);

{
    var x = 3.14;
    console.log(x);
}
//console.log(x);


//const 常量
var nums = 10;
//nums = 20;


//结构与变量
var name = "vv",
    age = 18,
    gender = "保密";

console.log("\n    \u59D3\u540D\uFF1A" + name + "\n    \u5E74\u9F84\uFF1A" + age + "\n    \u6027\u522B\uFF1A" + gender + "\n");

var _pername$address = {
    pername: "vv",
    address: "成都市"
},
    pername = _pername$address.pername,
    locations = _pername$address.address;


console.log("\n    \u59D3\u540D\uFF1A" + pername + "\n    \u5730\u5740\uFF1A" + locations + "\n");

var minAndMix = function minAndMix(nums) {
    var min = nums[0];
    var max = nums[0];
    nums.forEach(function (num) {
        min = num < min ? num : min;
        max = num > max ? num : max;
    });
    return { min: min, max: max };
};

console.log(minAndMix([2, 35, 6, 4, 23]));

var showInfor = function showInfor(_ref) {
    var name = _ref.name,
        age = _ref.age;

    console.log("\n        \u59D3\u540D\uFF1A" + name + "\n        \u5E74\u9F84\uFF1A" + age + "\n    ");
};

// let name = "张三";
// let age = 18;
// showInfor({name, age});

showInfor({
    name: "vv",
    age: 18
});

var x1 = 20;
var x2 = 30;
//变量换值
var _ref2 = [x2, x1];
x1 = _ref2[0];
x2 = _ref2[1];

console.log(x1);
console.log(x2);