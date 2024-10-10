//Calculate the avg of an arbitary value of test score

//defining the function

function calculateAvg(...score){

    //Calculating the avg
    const total =score.reduce((sum,score) => sum + score,0);
    const avg =total/score.length
    return avg;
}

//calling the fun
const avg1 =calculateAvg(90,88,78,67,34);
const avg2 = calculateAvg(54,89,90,99,67);

//display result

console.log(avg1)
console.log(avg2)