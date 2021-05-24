(function() {
    'use strict';
 
    window.addEventListener('load',getTiming)
 
    function getTiming() {
        var time = performance.timing;
        var timingObj = {};
        var loadTime = (time.loadEventEnd - time.loadEventStart) / 1000;
 
        if (loadTime < 0) {
            setTimeout(function() {
                getTiming();
            },200);
            return;
        }
 
        timingObj['重定向时间'] = (time.redirectEnd - time.redirectStart);
        timingObj['DNS解析时间'] = (time.domainLookupEnd - time.domainLookupStart);
        timingObj['TCP完成握手时间'] = (time.connectEnd - time.connectStart);
        timingObj['HTTP请求响应完成时间'] = (time.responseEnd - time.requestStart);
        timingObj['DOM开始加载前所花费时间'] = (time.responseEnd - time.navigationStart);
        timingObj['DOM加载完成时间'] = (time.domComplete - time.domLoading);
        timingObj['DOM结构解析完成时间'] = (time.domInteractive - time.domLoading);
        timingObj['脚本加载时间'] = (time.domContentLoadedEventEnd - time.domContentLoadedEventStart);
        timingObj['onload事件时间'] = (time.loadEventEnd - time.loadEventStart);
        timingObj['页面完全加载时间'] = (timingObj['重定向时间'] + timingObj['DNS解析时间'] + timingObj['TCP完成握手时间'] + timingObj['HTTP请求响应完成时间'] + timingObj['DOM结构解析完成时间'] + timingObj['DOM加载完成时间']);
 
        for (var item in timingObj) {
            console.log(item + ":" + timingObj[item] + '毫秒(ms)');
        }
    }
})();
