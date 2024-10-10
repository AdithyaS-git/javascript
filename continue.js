//skipping negetive numbers
 const numbers =[5,-2,9,-7,3,12,14]
 for(let i=0;i<numbers.length;i++){
    if(numbers[i]<0){
        continue;//skip negetive and continue
    }
    console.log(numbers[i]);
 }