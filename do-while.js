//calculate the sum of numbers entered by the user until they stop

let sum=0;
let userInput;

do{
    userInput =prompt("Enter a number(or'stop' to quit)")
//convert the inpt to a number if its not stop
if(userInput!==stop){
    let number =parseFloat(userInput)
    if(!isNaN(number)){
        sum+=number;

    }else{
        alert("Invalid input")
    }

}
}while(userInput!=='stop');
console.log("Sum of  entered number is :",sum)