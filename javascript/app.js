"use strict";

let operators = ["+","-"];

let operator = document.getElementsByClassName("operator")[0];
let firstNumber = document.getElementsByClassName("first")[0];
let secondNumber = document.getElementsByClassName("second")[0];
let input = document.getElementsByClassName("solution")[0];

let randomNumbers = function() {
    firstNumber.innerText = parseInt(Math.floor(Math.random() * 10) + 1);
    secondNumber.innerText = parseInt(Math.floor(Math.random() * 10) + 1);
}
randomNumbers();

operator.innerText = operators[Math.floor(Math.random()*operators.length)];

document.addEventListener("keydown", function(e) {
    if(e.keyCode == 13) {
        let solution = firstNumber.innerText - secondNumber.innerText;
        if(input.value == solution) {
            alert("nice");
            randomNumbers();
        }
        else {
            alert("try it again");
        }
    }
});