//初始化页面给根元素设置字体大小，实现rem自适应
function initDocumentSize() {
    var b = document.documentElement.clientWidth;
    b = b > 750 ? 750 : b;
    var c = b / 750 * 100;
    document.getElementsByTagName("html")[0].style.fontSize = c + "px"
  }
initDocumentSize();
window.onresize = initDocumentSize;