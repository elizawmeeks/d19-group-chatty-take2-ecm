console.log("main.js loaded");

var themesBtn = document.getElementById('btn-selectTheme');
var textBtn = document.getElementById("btn-selectText");

Chatty.xhrfunction();

themesBtn.addEventListener("click", Chatty.selectTheme);
textBtn.addEventListener("click", Chatty.selectTextSize);
var clearLogButton = document.getElementById('clear-log');
clearLogButton.addEventListener("click", Chatty.navClear);
