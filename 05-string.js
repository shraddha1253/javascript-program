  
  var greet ="  Hey, you are doing good,keep it up  ";
  console.log("Given string is: ", greet);

  console.log('==============================================')
  
  var greetLength = greet.length;
  console.log("Total number of characters is: ",greetLength);



  console.log("============================");


  var greet ="  Hey, you are doing good,keep it up  ";
  var greetLength = greet.length;
  console.log("Before string length is: ", greetLength);

  console.log('==============================================')
  
  var greetAfterTrim = greet.trim();
  var greetAfterTrimLength= greetAfterTrim.length;
  console.log("After string length is: ", greetAfterTrimLength);
  console.log(greetAfterTrim);
  
  console.log('==============================================')


  console.log("Total number of space removed : ",greetLength- greetAfterTrimLength);



  console.log('==============================================')

  var lastChar= greet.charAt(greet.length);
console.log("Character at last index is: p", lastChar);

console.log('==============================================')

var firstChar= greet.charAt(greet.length);
console.log("Character at first index is: H",firstChar);

console.log('==============================================')


function countWords(mysentence) {
  const words = mysentence.split(' ');

  const totalWords = words.length;

  console.log('Total words available in string:', totalWords);
}

const mysentence = 'Hey you are doing good, keep it up';
countWords(mysentence);

console.log('==============================================')
var result = greet.indexOf("good");
console.log("Index of character good is: ", result);

console.log('==============================================')

console.log("substring starting from index : ", result);
const str= "Hey, you are doing good,keep it up";
const resultOne= str.substring(24);
console.log(resultOne);

console.log('==============================================')




var result = greet.includes("up");
console.log("does string end with  up is:", result);

console.log('==============================================')

var result = greet.includes("hey");
console.log("does string start with hey is:", result);



