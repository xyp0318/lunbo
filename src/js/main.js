require.config({
    baseurl: "./js"
})
var pic = document.querySelector(".pic")
var list = document.querySelector(".list")
var imgArr = Array.from(pic.children);
var liArr = Array.from(list.children);
var left = document.querySelector(".left");
var right = document.querySelector(".right");
var num = 0;
require(["lunbo"], function(a) {
    a.lunbo(imgArr, liArr, num, left, right);
})