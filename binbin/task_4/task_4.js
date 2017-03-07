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
    var inputValue = oInput.value;

    if (/^[0-9]+$/.test(inputValue)) {
        oLi.innerHTML = inputValue;
        oUl.insertBefore(oLi, oUl.firstChild);
    } else {
        alert("请输入数字");
    }

};
//点击右侧入事件处理
rightIn.onclick = function () {
    var oLi = document.createElement("li");
    var inputValue = oInput.value;

    if (/^[0-9]+$/.test(inputValue)) {
        oLi.innerHTML = inputValue;
        oUl.appendChild(oLi);
    } else {
        alert("请输入数字");
    }
};

//点击左侧出
leftOut.onclick = function () {
    var temp = oUl.firstElementChild;
    if (temp.innerHTML) {
        oUl.removeChild(temp);
        alert("删除的元素是：" + temp.innerHTML);
    } else {
        alert("没有可删除的元素");
    }

};
//点击右侧出
rightOut.onclick = function () {
    var temp = oUl.lastElementChild;
    if (temp.innerHTML) {
        oUl.removeChild(temp);
        alert("删除的元素是：" + temp.innerHTML);
    } else {
        alert("没有可删除的元素");
    }

};
//点击li删除相应元素
oUl.onclick = function (event) {
    var ev = event.target || event.srcElement;
    oUl.removeChild(ev);
}

