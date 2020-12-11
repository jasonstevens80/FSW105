var readLineSync = require("readline-sync");
var firstnum= readLineSync.questionInt("Please provide first number: ");
var secondnum= readLineSync.questionInt("please provide sesond number: ");
var enteredOperator = readLineSync.question("What operation do you want to perform: add/sub/mul/div? ");



function calculator(firstnum, secondnum, operator){


function add(num1, num2){
    return (num1 + num2);
}
function sub(num1, num2){
    return (num1 - num2);
}
function mul(num1, num2){
    return (num1 * num2);
}
function div(num1, num2){
    return (num1 / num2);
}

if(enteredOperator =="add"){
    //do addition routine
   console.log(add(firstnum, secondnum));
}
else if(enteredOperator =="sub"){
    //do subtraction rountine
   console.log(sub(firstnum, secondnum));
}
else if(enteredOperator =="mul"){
    //do multiply routine
    console.log(mul(firstnum, secondnum))
}
else  (enteredOperator == "div"){
    //do multiply routine
    console.log(div(firstnum, secondnum))
}
}
calculator(firstnum,secondnum, enteredOperator)