// declare variables 

var switchBtn = document.querySelector("button");
var bodyTag = document.querySelectorAll(".first-container");
var boxes = document.querySelectorAll(".box");
var todayBoxes = document.querySelectorAll(".today-box");
var midH1 = document.querySelectorAll(".mid h1:first-of-type")

switchBtn.addEventListener("click", function () {
    bodyTag[0].classList.toggle("background-black")
    switchBtn.classList.toggle("switch-btn");
    for(i = 0; i < boxes.length; i = i +1 ) {
        boxes[i].classList.toggle("dark-mode")
       
    }
    for(i = 0; i < todayBoxes.length; i = i +1 ) {
        todayBoxes[i].classList.toggle("dark-mode")
    }
    for(i = 0; i < midH1.length; i = i +1 ) {
        midH1[i].classList.toggle("white-text")
    }
   
    
})