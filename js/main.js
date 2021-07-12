// declare variables 

var switchBtn = document.querySelector("button");
var bodyTag = document.querySelector("body");
var boxes = document.querySelector(".box")

switchBtn.addEventListener("click", function () {
    switchBtn.classList.toggle("switch-btn");
    boxes.classList.toggle("dark-mode");
})