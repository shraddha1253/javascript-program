function isPrime(num){
    for (let index = 2; index < num; index++) {
        if(num%index==0){
            return false;
        } 
    }
   return true; 
}
var result = isPrime(3);
console.log(`Is number 3 Prime - ${result}`);

var result = isPrime(9);
console.log(`Is number 9 Prime - ${result}`);

var result = isPrime(7);
console.log(`Is number 7 Prime - ${result}`);

var result = isPrime(6);
console.log(`Is number 6 Prime - ${result}`);

var result = isPrime(19);
console.log(`Is number 19 Prime - ${result}`);

var result = isPrime(29);
console.log(`Is number 29 Prime - ${result}`);

var result = isPrime(53);
console.log(`Is number 53 Prime - ${result}`);


function spaceCount(inputString) {

    return (inputString.match(/ /g) || []).length;
}

console.log("==============total number of space in  Revision is the mother of success=======================")

console.log(spaceCount("Revision is the mother of success"));


console.log("=================total number of space in  JavaScript is the language of internet world=======")

console.log(spaceCount("JavaScript is the language of internet world"));  


