


//定义Person类
class Person{
    //构造器
    //创建对象使用，自动调用
    constructor(name, age){
        this.name = name;
        this.age  = age;
        console.log("烟消云散");
    }

    //方法
    description() {
        console.log(`Hello, I am ${this.name}, I am ${this.age} years old.`)
    }
    //静态方法
    static play(str) {
        console.log(`玩${str}！`);
    }

}