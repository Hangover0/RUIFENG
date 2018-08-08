function getBirth(idCard, callback){
    
    var year = idCard.slice(6, 10),
        month = idCard.slice(10, 12),
        day = idCard.slice(12,14);

        callback && callback({year,month, day});

}



    //判断设备信息
    function getDevice(){
        let userAgent = navigator.userAgent;
        let device = "";
        if(!/mobile/i.test(userAgent)){
            device = "PC端";
        }else if(/Android/i.test(userAgent)){
            device = "Android 手机";
        }else if(/iPhone/i.test(userAgent)){
            device = "iPhone 手机";
        }





        
        console.log(device);
    }
