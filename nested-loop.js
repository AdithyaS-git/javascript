//creating a right angled triangle pattern

const height =5;

for(let i=1;i<=height;i++){
    let row =' ';
    //innerloop
    for(let  j=1;j<=i;j++){
        row+='*'
    }
    console.log(row);
}