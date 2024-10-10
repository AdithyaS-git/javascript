//Creating a person object

//Creating an empty object

const person ={};

//Add properties to the object
person.name="Alice";
person.age =24;
person.isStudent =true;

//Accessing object
const name =person.name;
console.log(name);

//Adding a method to object

person.introduce =function(){
    console.log( `Hi ,Im ${this.name}. I'm ${age}`)

    //invoking the method
    person.introduce()

    //object Literal notation

    const person2 ={
        name :"Alice.",
        age : 23,
  isStudent :true,
  introduce :function(){
    console.log( `Hi ,Im ${this.name}. I'm ${age}`)
  }

    }
}


//Modify and delete properties
person.name ="Bob";
person.country ="Canada"
delete person.isStudent