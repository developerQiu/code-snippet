// https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver
// http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html
// 懒加载原理

var io = new IntersectionObserver(callback, option);
// 开始观察
io.observe(document.getElementById('example'));
// 停止观察
io.unobserve(element);
// 关闭观察器
io.disconnect();

// 多节点监听
io.observe(elementA);
io.observe(elementB);


// 实例：惰性加载（lazy load）
function query(selector) {
  return Array.from(document.querySelectorAll(selector));
}

var observer = new IntersectionObserver(
  function(changes) {
    changes.forEach(function(change) {
      var container = change.target;
      var content = container.querySelector('template').content;
      container.appendChild(content);
      observer.unobserve(container);
    });
  }
);

query('.lazy-loaded').forEach(function (item) {
  observer.observe(item);
});
