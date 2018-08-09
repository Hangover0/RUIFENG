function networking(options) {
    if(!options.url) {
        throw "networking: 缺乏url参数.";
    }
    // 默认设置
    options.method = options.method || "GET";
    options.parameter = options.parameter || {};
    // 创建请求对象
    var xhr = new XMLHttpRequest();
    // 配置请求对象
    xhr.open(options.method, options.url, true);
    //timeout 延时时间
    xhr.timeout = 10;
    //先对json字符串解析
    xhr.responseType = "json";
    // 发送请求
    xhr.send(options.parameter);
    // 添加事件监听
    xhr.onload = function() {
        if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            options.success && options.success(xhr.response);   
        }
    }
}
