(function () {
    var teacher = {
        name : "耀哥",
        age : 28,
        teach : "Web前端"
    }


    function Person() {
        var per = new Person();
        console.log(per.constructor == Person);
        console.log(per instanceof Person);
    }
    
    
    //构造函数
    function Car() {
        Car.prototype = {
            brand: "Benz",
            color: "White",
            getSpeed: function () {
                return "180Km/h";
            }
        }
    }
    var car1 = new Car();
    var car2 = new Car();
    console.log(car1.brand);
    console.log(car2.brand);
    car1.brand = "BWM";
    Car.prototype.brand = "奔奔";
    console.log(car1.brand);
    console.log(car2.brand);


    //提示：这里需要注意的是原型属性和方法的共享，
    // 即所有实例中都只是引用原型中的属性方法，
    // 任何一个地方产生的改动会引起其他实例的变化，
    // 因为它们指向同一块内存。

    function Teacher(name, age) {
        this.name = name;
        this.age = age;
    }
    Teacher.prototype = {
        location: "瑞丰培训",
        skll: function () {
            console.log("开车！");
        }
    }
    var tea1 = new Teacher("耀哥", 28);
    var tea2 = new Teacher("饶妹", 24);
    var tea3 = new Teacher("牟姐", 38);
    console.log(tea1.location);
    console.log(tea2.location);
    console.log(tea3.location);


    var dog = {
        //对象属性
        name: "旺财",
        color: "白色",
        //对象方法
        running: function () {
            console.log(this.name + "正在奔跑！");
        }
    }
    console.log(dog.name);
    console.log(dog["name"]);
    dog.running();
    //修改
    dog.name = "闷蹬儿";
    console.log(dog);
    //添加属性
    dog.age = 5;
    console.log(dog);
    //删除属性
    delete dog.age;



    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    var cat = Car("喵", 3);




    //对象继承
    function RIMIobject() {
        RIMIobject.prototype = {
            company : "成都瑞峰科技有限公司",
            show : function () {
            console.log(this.name);
            }
        }
    }
    function RIMIworker(name, position) {
        //继承
        //1.通过apply继承
        //RIMIobject.apply(this, arguments);
        this,name = name;
        this.position = position;
    }

    //2.通过prototype实现继承
    //RIMIworker.prototype = new RIMIobject();
    //RIMIworker.prototype.constructor = RIMIworker;


    RIMIworker.prototype = RIMIobject.prototype;
    RIMIworker.prototype.constructor = RIMIworker;
    var worker = new RIMIworker("张三", "讲师");
    console.log(worker.company);
    worker.show();





})()