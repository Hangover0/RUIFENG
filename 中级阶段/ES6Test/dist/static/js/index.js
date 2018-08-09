$(function () {
    //箭头函数
    //参数设置的值是默认值
    let sayHello = (name = "admin") => {
        console.log(`Hello, ${name}!`);
    };
    sayHello("Admin");

    let sum = (a, b) => {
        console.log(a + b);
    };
    sum(10, 15);

    let total = (...nums) => {
        //...num:rest 参数
        //存储所有调用时传递的参数
        //其类型为数组Aarry
        let res = 0;
        nums.forEach(num => {
            res += num;
        });
        return res;
    };
    console.log(`结果为：${total(...[1, 2, 3, 4, 5])}`);

    //数组的最大值和最小值
    let numbers = [3, 35, 26, 8, 23];
    console.log(`min：${Math.min(...numbers)}`);
    console.log(`max：${Math.max(...numbers)}`);

    let per = new Person("vv", 18);
    console.log(per);
    //调用对象方法
    per.description();
    //静态方法
    Person.play("王者荣耀");
});