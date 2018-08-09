
//展示地图
function showMap() {
    //1.创建地图
    var map = new BMap.Map("container");
    //2.创建坐标
    var point = new BMap.Point(104.0607569093,30.5622079951);
    //3.设置地图中心点坐标和级别
    map.centerAndZoom(point, 15);
    //4.开启鼠标滚轮缩放
    map.enableScrollWheelZoom(true);
    //5.导航控件
    map.addControl(new BMap.NavigationControl());
    //6.比例尺控件
    map.addControl(new BMap.ScaleControl());
    //7.地图类型控件
    map.addControl(new BMap.MapTypeControl());
    //8.缩略地图
    map.addControl(new BMap.OverviewMapControl());
    // 创建标注
    var marker = new BMap.Marker(point);
    // 将标注添加到地图中
    map.addOverlay(marker);
};






