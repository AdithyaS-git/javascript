class Mathmatics{
    static square(number){
        return number*number;
    }
    static isEven(number){
        return number % 2===0
    }
}

console.log(Mathmatics.square(5));
console.log(Mathmatics.isEven(5));//false
console.log(Mathmatics.isEven(6));//true


// const mathUtil=new Mathmatics();
// console.log(mathUtil.square(5));//throw an error

class AdvanceMath extends Mathmatics{}
console.log(AdvanceMath.square(6))
console.log(AdvanceMath.isEven(6));