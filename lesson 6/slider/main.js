"use strict";


let imgArray = document.getElementsByClassName("img");
imgArray[0].src = "img/first.png";
imgArray[1].src = "img/second.png"
imgArray[2].src = "img/third.png";

let i = 0;
let fwdButton = document.createElement("button");
let backButton = document.createElement("button");
let img = document.createElement("img");
fwdButton.setAttribute("id", "f");
backButton.setAttribute("id", "b");
fwdButton.innerText = "▶";
backButton.innerText = "◀";
let div = document.createElement("div");
imgArray[0].classList.add("visible");
div.appendChild(img);
div.appendChild(backButton);
div.appendChild(fwdButton);
document.body.appendChild(div);




fwdButton.addEventListener("click", function () {

    if (i == imgArray.length - 1) {
        imgArray[i].classList.remove("visible");
        i = 0;
        imgArray[i].classList.add("visible");
    } else {
        imgArray[i].classList.remove("visible");
        imgArray[++i].classList.add("visible");
    }
    console.log(i, imgArray.length);
});

backButton.addEventListener("click", function () {
    if (i == 0) {
        imgArray[i].classList.remove("visible");
        i = imgArray.length - 1;
        imgArray[i].classList.add("visible");
    } else {
        imgArray[i].classList.remove("visible");
        imgArray[--i].classList.add("visible");
    }
    console.log(i, imgArray.length);
});