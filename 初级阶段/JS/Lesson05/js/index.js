(function () {
    //1.创建数组
    var names = ["张志威","张三","张玉","李四"];
    //2.查询数组元素（下标法）
    //数组名[下标]
    console.log(names);
    console.log(names[1]);
    //3.修改数组元素
    names[1] = "葫芦娃";
    console.log(names);
    console.log(names[1]);
    //添加数组元素
    //在后面添加数组元素
    names.push("火娃");
    console.log(names);
    //在前面添加数组
    names.unshift("穿山甲");
    console.log(names);

    //4.删除数组元素
    names.pop();      //pop不添加任何参数
    console.log(names);
    names.shift();    //shift也不添加任何参数
    console.log(names);
    //splice(loc,count,items...)
    names.splice(1,1);
    console.log(names);
    names.splice(1,2,"蛇精","蝎子精");
    console.log(names);
    names.splice(1,0,"kar98K");
    console.log(names);
    //split    slice    splice   一定要区分



    //5.数组元素截取
    var arr = names.splice(1, 2);
    console.log(arr);



    //6.数组遍历
    for (var i = 0;i < names.length; i++){
        console.log(names[i]);
    }
    for (var i = 0, len = names.length;i < len; i++){
        console.log(names[i]);
    }



    //练习
    //定义5个学生的成绩，求学生的总成绩/平均成绩/最高分/最低分
    var grades = [99,98,87,95,89];
    var result = 0,
        average = 0,
        max = grades[0],
        min = grades[0],
        str = "";
    for (var i = 0, len = grades.length;i < len; i++){
        result += grades[i];
        max = grades[i] > max ? grades[i] : max;
        min = grades[i] < min ? grades[i] : min;
    }
    average = result / len;
    str += "总成绩:" + result + "\n";
    str += "平均分:" + average + "\n";
    str += "最高分:" + max + "\n";
    str += "最低分:" + min;
    console.log(str);


    //7.数组排序
    var nums = [1,5,6,3,7,12,0];
    console.log(nums.sort());

    var result = nums.sort(function (a1, a2) {
        //升序（第一个数减第二个数）
        return a1 - a2;
    })
    console.log(result);
    var result = nums.sort(function (a1, a2) {
        //降序（第二个数减第一个数）
        return a2 - a1;
    })
    console.log(result);


    //数组元素对象排序
    var students = [
        {name: "张三", grade: 67},
        {name: "李四", grade: 80},
        {name: "老王", grade: 59}
    ];
    var res = students.sort(function(stu1, stu2){
        return stu2.grade - stu1.grade;
    });
    console.log(res[0]);


    //8.倒序排序
    var  nums = [1,4,6,2,7,3,0];
    console.log(nums.reverse());



    //9.数组过滤
    var names = ["李大","赵大锤","李二","冯三"];
    var len = names.length;
    //筛选出李姓的名字
    //item -> 遍历的每一个数组元素
    //index -> 对应遍历数组元素的下标
    //arr -> 遍历的原始数组
    //注意：函数参数的名字可以任意修改
    //names.filter(function (item, index, arr) {})
    var result = names.filter(function (item, index, arr) {
        ///^李/.test(item)正则表达式
        return /^李/.test(item);
    })
    console.log(result);



    //10.forEach遍历(优先使用)
    var nums = [1,2,5,6,9];
    nums.forEach(function (item, index, arr) {
        console.log(item);
    })


    //11.map 操作数组元素本身
    for(var i = 0; i < nums.length ; i++){
        nums[i] = nums[i] * 2;
    }
    console.log(nums);
    var res = nums.map(function (item) {
        return item * 2;
    })
    console.log(res);








})()