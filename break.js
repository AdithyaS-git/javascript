//Searching an item

const color = ['red','blue','green','yellow'] 
const targetColor ='green';

let indexOfColor = -1; //initialize color

for(let i=0;i< color.length;i++){
    if(color[i] ===targetColor){
        indexOfColor = i;
        break;//exit the loop 
    }
}
if(indexOfColor !==-1){
    console.log("The color" +targetColor + "was found at the index"+indexOfColor);
 }
 else{
    console.log("The color" + targetColor + "was not found");

}