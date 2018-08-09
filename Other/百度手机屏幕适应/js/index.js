/**
 * 根据设备加载指定的css文件
 */
(function() {
    // 获取当前设备信息
    var currentDeviceInfo = navigator.userAgent;

    // 如果是移动端
    var isMobile = currentDeviceInfo.indexOf('Mobile') !== -1;
    
    // 如果是iPhone或者是Android
    var isIPhone = currentDeviceInfo.indexOf('iPhone') !== -1;
    var isAndroid = currentDeviceInfo.indexOf('Android') !== -1;

    // 获取link标签
    var laodDevCSS = document.getElementById('laodDevCSS');
    // 如果是移动端
    if(isMobile) {
        
        laodDevCSS.setAttribute('href', 'css/style-mobile.css');
        // 如果是苹果手机
        if(isIPhone) {
            console.log('您的手机是苹果手机');
        } 
        else if(isAndroid) {
            var advertisement = document.getElementById('advertisement');
            advertisement.style.display = 'block';
        }
    } 
    // 如果是PC端
    else {
        laodDevCSS.setAttribute('href', 'css/style-pc.css');
    }

})();

