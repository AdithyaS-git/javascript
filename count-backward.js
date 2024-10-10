function countBackwards (start){
    let result =[];
    while(start>=1){
        result.push(start);
        start--;
    }
    return result;
}
let result = countBackwards();
console.log(result);