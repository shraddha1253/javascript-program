

console.log("================log first and last element on console====================================")



const fruit = ['banana', 'orange', 'apple', 'mango', 'watermelon'];
console.log("first Element: banana");
console.log( "Last Element:watermelon");



console.log("============adding papaya before banana========================================")



const fruit01 = ['banana', 'orange', 'apple', 'mango', 'watermelon'];

fruit.unshift('papaya');

console.log(fruit);



console.log("=============removing mango from array=======================================")



const fruit02 = ['banana', 'orange', 'apple', 'mango', 'watermelon'];

const index = fruit.indexOf('mango');
if (index !== -1) {
  fruit.splice(index, 1);
}

console.log(fruit);




console.log("=============inserting pineapple at last position=======================================")


const fruit03 = ['banana', 'orange', 'apple', 'mango', 'watermelon'];

fruit.push('pineapple');

console.log(fruit);



console.log("=====================insert element dragon fruit before water melon===============================")

const fruit04 = ['banana', 'orange', 'apple', 'mango', 'watermelon'];

const indexof = fruit.indexOf('watermelon');
fruit.splice(index, 0, 'dragon fruit');

console.log(fruit);



console.log("=================replace an element orange with kiwi===================================")

const fruit05 = ['banana', 'orange', 'apple', 'mango', 'watermelon'];

const index03 = fruit.indexOf('orange');
fruit[index] = 'kiwi';

console.log(fruit);


console.log("==============log the element starting from index 1 to 4======================================")


const fruitList = ['banana', 'orange', 'apple', 'mango', 'watermelon'];

for (let i = 1; i <= 4; i++) {
  console.log(fruitList[i]);
}



console.log("==================select 3 element and log on console use length property==================================")

const fruitNum = ['banana', 'orange', 'apple', 'mango', 'watermelon'];

const numElementsToSelect = 3;
const selectedFruit = fruitNum .slice(0, numElementsToSelect);

console.log(selectedFruit);