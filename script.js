document.getElementById("button").addEventListener("click", multiply);


function multiply() {
var price1 = prompt("Add the first number you want to multiply");
var price2 = prompt("Add the second number");
var total = parseInt(price1) * parseInt(price2);


document.getElementById("demo").innerHTML = (price1 + " * " + price2 + " is: " + total);
}
document.getElementById("button2").addEventListener("click", divide);

function divide() {
var price1 = prompt("Add the first number you want to divide");
var price2 = prompt("Add the second number");
var total = parseInt(price1) / parseInt(price2);


document.getElementById("demo").innerHTML = (price1 + " / " + price2 + " is: " + total);
}
document.getElementById("button3").addEventListener("click", add);

function add() {
var price1 = prompt("Add the first number you want to multiply");
var price2 = prompt("Add the second number");
var total = parseInt(price1) + parseInt(price2);


document.getElementById("demo").innerHTML = (price1 + " + " + price2 + " is: " + total);
}
document.getElementById("button4").addEventListener("click", subtraction);

function subtraction() {
var price1 = prompt("Add the first number you want to multiply");
var price2 = prompt("Add the second number");
var total = parseInt(price1) - parseInt(price2);


document.getElementById("demo").innerHTML = (price1 + " - " + price2 + " is: " + total);
}
