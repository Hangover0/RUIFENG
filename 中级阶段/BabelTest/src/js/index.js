let a = 10;
{
    var π = 3.14;
}
console.log(π);

{
    let x = 3.14;
    console.log(x);
}
//console.log(x);


//const 常量
const nums = 10;
//nums = 20;



//结构与变量
let [name,age,gender] = ["vv", 18, "保密"];
console.log(`
    姓名：${name}
    年龄：${age}
    性别：${gender}
`)



let {pername, address:locations} = {
    pername : "vv",
    address : "成都市"
}


console.log(`
    姓名：${pername}
    地址：${locations}
`)



let minAndMix = (nums) => {
    let min = nums[0];
    let max = nums[0];
    nums.forEach(num => {
        min = num < min ? num : min;
        max = num > max ? num : max;
    });
    return {min, max};
}

console.log(minAndMix([2,35,6,4,23]));


let showInfor = ({name, age}) => {
    console.log(`
        姓名：${name}
        年龄：${age}
    `);
}

// let name = "张三";
// let age = 18;
// showInfor({name, age});

showInfor({
    name:"vv",
    age: 18
})


let x1 = 20;
let x2 = 30;
//变量换值
[x1, x2] = [x2, x1];
console.log(x1);
console.log(x2);




