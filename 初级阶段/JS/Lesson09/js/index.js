(function () {
    //1.定时器
    interval();
    //2.延时函数
    timeout();
    //3.缓存
    var oName     = getEl(".nameIpt"),
        oMajor    = getEl(".majorIpt"),
        oOrigin   = getEl(".originIpt"),
        oShowBth  = getEl(".show"),
        oClearBtn = getEl(".clear"),
        oAddBth   = getEl(".add"),
        oUl       = getEl("#data-list");
    //添加数据
    oAddBth.onclick = function () {
        add(oName.value, oMajor.value, oOrigin.value);
    }
    //查看数据
    oShowBth.onclick = function () {
        show(oUl);
    }
    //清空
    oClearBtn.onclick = function () {
        clear(oUl);
    }






    var name = "The Window";
    var object = {
        name : "My Object",
        getNameFunc1 : function(){
            return function(){
                return this.name
            }
        },
        getNameFunc2 : function(){
            return this.name;
        },
        getNameFunc3 : function(callback){
            return callback;
        },
        getNameFunc4 : function(callback){
            return callback();
        }
    };



    alert(object.getNameFunc1+"//test1");
    alert(object.getNameFunc1()+"//test2");
    alert(object.getNameFunc1()()+"//test3");
    alert(object.getNameFunc2+"//test4");
    alert(object.getNameFunc2()+"//test5");
    alert(object.getNameFunc3(function(){return this.name})+"//test6");
    alert(object.getNameFunc4(function(){return this.name})+"//test7");
    alert(object.name+"//test8");




})()