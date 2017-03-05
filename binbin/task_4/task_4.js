/**
 * Created by hzc on 2017/3/5.
 */
var oUl = document.getElementById("list");
var oInput = document.getElementById("inputText");
var leftIn = document.getElementById("leftIn");
var rightIn = document.getElementById("rightIn");
var leftOut = document.getElementById("leftOut");
var rightOut = document.getElementById("rightOut");

//点击左侧入按钮添加事件
leftIn.onclick = function () {
    var oLi = document.createElement("li");
    oLi.innerHTML = oInput.value;
    oUl.insertBefore(oLi, oUl.firstChild);
};
//点击右侧入事件处理
rightIn.onclick = function () {
    var oLi = document.createElement("li");
    oLi.innerHTML = oInput.value;
    oUl.appendChild(oLi);
};

//点击左侧出
leftOut.onclick = function () {
    var temp = oUl.firstChild;
    if (temp.innerHTML) {
        oUl.removeChild(temp);
        alert(temp.innerHTML);
    }

};
//点击右侧出
rightOut.onclick = function () {
    var temp = oUl.lastChild;
    if (temp.innerHTML) {
        oUl.removeChild(oUl.lastChild);
        alert(temp.innerHTML);
    }

};