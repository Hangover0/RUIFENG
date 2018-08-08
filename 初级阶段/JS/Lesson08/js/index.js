(function () {

    var oIpt = getEl("input"),
        oBtn = getEl("button"),
        oRes = getEl("#res");

    oBtn.onclick = function () {
        handleBtnClick(oIpt, oRes);
    };
})()


var person = new Person("Admin");
//实例对象享有原型对象prototyoe中的属性和方法
person.showName();
//实例对象可以重写原型对象的属性方法
person.kind = "高级动物";
console.log(person.kind);
console.log(person);
console.log(person.__proto__ == Person.prototype);
console.log(Person.prototype.__proto__ == Object.prototype);
console.log(Object.prototype.__proto__ == null);
console.log(person.__proto__.constructor == Person);


function Animal() {}
Animal.prototype.kind = "动物";
function Dog() {}
extend(Dog, Animal);
var dog = new Dog();
console.log(dog.kind);



//拷贝
var obj = {
    name: "Admin",
    age: 25
}
//for..in 遍历的是key，for..of遍历的是数值
var newObj = {};
for (var key in obj){
    //newObj["name"] = obj["name"] -> Admin
    newObj[key] = obj[key];
}
console.log(newObj);




var d1 = new Date("October 1, 2018");
var d2 = new Date();
var day = ((d1 - d2) / 1000 / 60 / 60 / 24 ).toFixed(1);
console.log("距离2018年国庆还有" + day + "天");








