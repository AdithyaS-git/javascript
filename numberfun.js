//Basic syntax
//Without new keyword

let num = Number(10);
console.log(num);

//Without new keyword
let num2 =new Number("123");
console.log(num2);

//Conversion from strings

let strNum ="42";
let num3 = Number(strNum);
console.log(num3);

//invalid string

let invalidStr ="avd"
let num4 = new Number(invalidStr)

console.log(num4);

//Conversion of boolean

let boolTrue =true;
let numTrue = Number(boolTrue);
console.log(boolTrue);

let boolFalse =false;
let numFalse =Number(boolFalse)
console.log(boolFalse);

//Conversion fromother datatypes

let date =new Date()
let numdate =Number(date)
console.log(numdate);

//Handling nan

let userInput ="abc"
let numInput =Number(userInput);

if(isNaN(numInput)){
    console.log("Invalid input");
}

