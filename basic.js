//single quotes
var singQuotedString="this is a single quoted string"

//double qoute
var doublequoteString ="this is double quoted string"

//escaping single and double quotes
var singleQuotes="This is a single quoted string a\'single quote\' inside";
var doubleQuotes ="This is a double quoted string a\"double quote\" inside";

console.log(singQuotedString)
console.log(doublequoteString)
console.log(singleQuotes)
console.log(doubleQuotes)

//string length
var text ="hello,world"
var length=text.length;
console.log("the length is ",length)

//Access character
text ="hello ,world";
var firstChar =text[0]
var fifthChar =text[4]

console.log('first char : ',firstChar)
console.log('fifth char : ',fifthChar)

//concatenating in string
//using the + operator

var firstName ="John"
var lastName ="Doe"
var fullName =firstName +" "+lastName;
console.log("Full Name is ",fullName);

//Using template literals(ES6)

var fullName  =`${firstName} ${lastName}`
console.log(fullName)

//Template literals
var age =30;
var message =`My name is ${firstName} ${lastName} ,and ${age}`
console.log(message)