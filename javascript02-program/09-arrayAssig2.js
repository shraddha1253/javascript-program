
console.log("================log total length of  element on console====================================")
let array=[20,31,40,25,23,11,29,9,60,2,11];
console.log(array);
console.log("total number of the element is 11");






console.log("================log first and last element on console====================================")



const number = [20,31,40,25,23,11,29,9,60,2,11];
console.log("first Element: 20");
console.log( "Last Element:11");

console.log("================the third last element====================================")

let array1=[20,31,40,25,23,11,29,9,60,2,11];
console.log(array[array.length-3]);//read the last value

console.log("================find odd number from the loop====================================")


const array2 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

const oddNumbers = array.filter(num => num % 2 !== 0);

console.log(oddNumbers); // [31, 25, 23, 11, 29, 9, 11]
console.log("==============find the number which are multiple of 5======================================")

const array3 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

const multiplesOf5 = array.filter(num => num % 5 === 0);

console.log(multiplesOf5); 

console.log("=================is number 115 available in array ===================================")


const array4 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log(array.includes(115)); 

console.log("=================is number 23 available in array ===================================")


const array5 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log(array.includes(23)); 

console.log("=================insert number 55,66at index 3 ===================================")

const array6 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

array.splice(3, 0, 55, 60);

console.log(array);

console.log("=================delete 3 element starting from index 4 and log array on console===================================")

const array7 = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

array.splice(4, 3);

console.log(array);