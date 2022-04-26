import React, { Component, useEffect } from 'react'

const BMap = window.BMap;
let map;
const MapView = () => {

    console.log(window);

    useEffect(() => {
        map = new BMap.Map("container", { minZoom: 16 }); // 创建Map实例 
        map.centerAndZoom(new BMap.Point("106.7894399854", "30.3962356879"), 16); // 初始化地图,设置中心点坐标和地图级别
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        map.enableAutoResize();
    }, [])


    return <div id="container" style={{width:'100%',height:'100%'}}>map</div>
}
export default MapView