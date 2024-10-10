//charAt
var text ="Hello,world"
var firstChar = text.charAt(0)
var fifthChar =text.charAt(4)

console.log("First character : ",firstChar);

//charCodeAt

var firstCharCode =text.charCodeAt(0);
var fifthCharCode= text.charCodeAt(4);

console.log(" Unicode value of First character : ",firstCharCode);
console.log("Unicode value of fifth character: ",fifthCharCode)

//concat

var firstName ="John";
var lastName ="DOE"
var greet ="Hello, ";
var fullName =greet.concat(firstName," ",lastName)
console.log(fullName);

//indexOf

text ="Hello,world!";
var searchingString ="world";
var index =text.indexOf(searchingString)
console.log("Index of 'world' :",index)

//lastIndexOf

text ="Hello,world! This world is beautiful."
searchingString ="world"

var lastIndex =text.lastIndexOf(searchingString)
console.log("Last index of 'world'",lastIndex)

//includes
text ="Hello,world!"
searchingString="world"

var isFound =text.includes(searchingString);
console.log("Does the string include 'world' ;" ,isFound)