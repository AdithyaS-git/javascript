let numbers =[1,2,3,4];
let firstEven =numbers.find(function(element){
    return element%2===0
});

//findIndex

let number =[1,2,3,4];
let firstEvenIndex =number.findIndex(function(element){
    return element%2===0
});

//filter

let num =[1,2,3,4];
let evenNumbers =number.filter(function(element){
    return element%2===0
});

//fill

num.fill(0)//[0,0,0,0]


//iteration methods:map()
let doubled =numbers.map(function(element){
    return element*2;
});

//reduce 
let sum =numbers.reduce(function(accumulator,element){
    return accumulator+element
})

