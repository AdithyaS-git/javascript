function varTDZ(){
   console.log(x) //undefined due to temporal dead zone
   var x =10;
   console.log(x) 
}
varTDZ();

function letTDZ(){
    console.log(x) //error
    let x =10;
    console.log(x)
}
letTDZ();

