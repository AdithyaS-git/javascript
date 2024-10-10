// toLowerCase

var orginalText ="Hello,World"
var lowerCaseText =orginalText.toLowerCase()

console.log("Orginal Text: ",orginalText)
console.log("Lowercase Text :",lowerCaseText)

//trim()
var text ="  Hello,World  "
var trimmedText =text.trim();
console.log("Orginal : ",text);
console.log("triimed : ",trimmedText);

//slice()
text ="Hello, World"
var slicedText =text.slice(7,12);
console.log("Orginal : ",text);
console.log("Sliced Text : ",slicedText);

//split()
text ="apple,banana,orange,cherry";
var fruitArray=text.split(',');

console.log("orginal array :",text)
console.log("Splitted Array : ",fruitArray)

//replace()

text = "Hello,World!";
var newText = text.replace("World","Universe");
console.log("Replaced : ",newText);
console.log("Replaced : ",newText);

text = "Hello,World! World is so beautiful";
newText = text.replace(/World/g,"Universe");
console.log("Replaced : ",newText);

//match()
text ="The quick brown fox jumps over the lazy dog";
var matches = text.match(/fox/g)
console.log("Orginal text : ",text);
console.log("Matches: ",matches);

text ="The quick brown dog";
 var noMatches =text.match(/fox/g)
console.log("Orginal text : ",text);
console.log("Matches: ",noMatches);