//Define a function
function calculate(num1,num2,callback){
    const result =num1+num2;
    callback(result);
}
//define callback fn
function logresult(result){
    console.log("The result is : "+result);

}

//call the main function

calculate(5,3,logresult);