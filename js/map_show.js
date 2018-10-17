(function () {
    var map = new BMap.Map("mapContainer"); // 创建地图实例  
    var point = new BMap.Point(117.283106, 31.763293); // 创建点坐标  
    map.centerAndZoom(point, 14); // 初始化地图，设置中心点坐标和地图级别 
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

    var marker = new BMap.Marker(point); // 创建标注    
    map.addOverlay(marker); // 将标注添加到地图中 
}())