const isEven =function (number){
    //step 2 :define fun body
    if (number % 2 ===0){
        return true;
    }
    else{
        return false;
    }
}

//step 3 : call the fun
const num=7;
const result =isEven(num);

if(result){
    console.log(`${num} is even`)
}
else{
    console.log(`${num} is odd`)
}