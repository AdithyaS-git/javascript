//simulat rolling a six-sided die until we roll a 6
let rollResult;
let numRoll=0;
while(rollResult !== 6){
rollResult =Math.floor(Math.random()*6)+1;
numRoll++;
console.log("Roll # "+numRoll+":"+rollResult);
}
console.log("It took : " + numRoll +" rolls tp get 6")