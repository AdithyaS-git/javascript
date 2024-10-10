let studentGrades = [80,75,99,76];
studentGrades.push(98,77);
console.log(studentGrades);

let students = [
    {name : 'Alice' ,grade :85 },
    {name : 'Charlie' ,grade :80}
]

students.push(
    {name : "Tessa",grade : 99}
)
console.log(students)


let newGrades = [67,88,90];
studentGrades.push(...newGrades);
console.log(studentGrades);