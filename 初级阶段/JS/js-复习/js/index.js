(function(){




    function fn(){
        var x = 10;
        return function(){
            return x;
        }
    }


    var x = fn()();
    console.log(x);




    getBirth("511211199703247165", function(birth){
        console.log(birth);
    })




    var selText = document.querySelector("#selText");
    var selDisplay = document.querySelector("#selDisplay");
    selText.onmouseup = function(){
        var selObj = getSelection();
        selDisplay.textContent = "您选择的内容是：" + selObj.toString();
    }




    getDevice();




    //search 传值
    var btn = document.querySelector("#btn");
    btn.onclick = function(){
        location.href = "./details.html?bookid=123&status=202";
    }


    





})();