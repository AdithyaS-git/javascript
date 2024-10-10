//Create the Student object

const student ={
    name :"Alice",
    age:20,
    grades:{
        math:95,
        science:90,
        history:87,
        english:75
    }
}

//iterate through the object prop using for
for(const key in student){
    if(student.hasOwnProperty(key)){
        console.log(`Property :${key},value :${student[key]}`);
    }
}

//get prop names using Object.keys()
const propertyNames =Object.keys(student);
console.log("Property Names : ",propertyNames)

//get prop values using Object.values()
const propertyValues =Object.values(student);
console.log("Property values : ", propertyValues);

//Calculate avg grade
const gradeValue =Object.values(student.grades);
let total =0;

for(const grade in gradeValue){
    total +=gradeValue[grade];

}

const averageGrade =total/gradeValue.length;
console.log("Average Grade ; ",averageGrade)