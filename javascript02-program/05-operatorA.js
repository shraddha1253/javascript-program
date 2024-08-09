function squareOfWordLength(sentence){

    console.log(`Given sentence is: ${sentence}`);

    var result = sentence.split(" ");

    var len = result.length;

    var square = len * len;

    return square;

}

var result = squareOfWordLength("JavaScript");

console.log(`Square of world length is: ${result}`);

 

var result = squareOfWordLength("Google Chrome");

console.log(`Square of world length is: ${result}`);

 

var result = squareOfWordLength("Web Developer Smart");

console.log(`Square of world length is: ${result}`);





console.log("==========================");

function wordLength(num){
    var result=num.length;
    var check=result%2==0 ? "even" : "odd";
    return check;

}
var result=wordLength("Javascript");
console.log(`The word "Javascript" has ${result} length`);

var result=wordLength("Developer");
console.log(`The word "Developer" has ${result} length`);

var result=wordLength("Google ");
console.log(`The word "Google" has ${result} length`);



console.log("======================================================")

var string = (`"I am Angular Developer" `);
var result = string.trim();
console.log(`Given string is: ${result} is: ${result.length}`);

var result = 24 / 4;
console.log(`The result after Division is : ${result}`);

var result = 24 * 4;
console.log(`Multiplication is : ${result}`);
