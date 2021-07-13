// declare variables 
'use-strict';

var switchBtn = document.querySelector("button");
var bodyTag = document.querySelectorAll("body");
var boxes = document.querySelectorAll(".box");
var todayBoxes = document.querySelectorAll(".today-box");
var midH1 = document.querySelectorAll(".black-text")
var firstContainer = document.querySelector(".first-container")
var buttonSpan = document.querySelector("button span")

// toggling dark mode on and off based on button clicking

switchBtn.addEventListener("click", function () {
    bodyTag[0].classList.toggle("background-black");
    bodyTag[0].classList.toggle("white-text");
    switchBtn.classList.toggle("switch-btn");
    firstContainer.classList.toggle("dark-mode");
    buttonSpan.classList.toggle("mode-switch-light")
    buttonSpan.classList.toggle("switch-btn-span-dark")
    buttonSpan.classList.toggle("white-text");
    for(i = 0; i < boxes.length; i = i +1 ) {
        boxes[i].classList.toggle("dark-mode")
    }
    for(i = 0; i < todayBoxes.length; i = i +1 ) {
        todayBoxes[i].classList.toggle("dark-mode")
    }
 
   for (i = 0; midH1.length; i = i + 1){
   midH1[i].classList.toggle("black-text");
    midH1[i].classList.toggle("white-text");

     }
})

