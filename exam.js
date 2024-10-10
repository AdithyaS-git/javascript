//Declaration and initialization a const value
const PI =3.1415
console.log("The value of PI is",PI)

//Attempting to reassign

//PI =3.14 //cant be reassigned


//constant can hold various datatypes
const person = {
firstName :"Jane",
lastName :"Doe",
age :23
}
console.log("Person :",person)

//Modifying prop of obj declared as const
person .age =28;
console.log("Updated person :",person)

//cont can also be used d=for array

const colors =["red","blue"]
console.log("colors :",colors)

//const within block scope

function exampleFunctiom(){
    if (true){
        const blockScopeVar ="I am a block scoped variable"
   console.log(blockScopeVar)
    }
  //  console.log(blockScopeVar) //throws error
}
exampleFunctiom()

//constants are affected by tdz

//console.log(TDZVar); //will cause Reference Error
const TDZVar ="I am in the TDZ"
console.log(TDZVar);

//Const must be initialized when declared

//const with destructing

const {firstName,lastName} = person;
console.log("Destructured :" ,firstName,lastName)