console.log("===========find all the even positioned element from array number sum it and log on console============")
let array09=[20,31,40,25,23,11,29,9,60,2,11];
var addition = 0;
for (let index = 0; index < array09.length; index++) {
    if (index%2==0) {
        const element = array09[index];
        addition =addition+element
    }

 
    
}
console.log(addition);

console.log("===========find all the odd positioned element from array number sum it and log on console============")

let array00=[20,31,40,25,23,11,29,9,60,2,11];
var addition = 0;
for (let index = 0; index < array00.length; index++) {
    if (index%2!==0) {
        const element = array00[index];
        addition =addition+element
    }

 
    
}
console.log(addition);


console.log("===============find the sum of all element from arrayNumber log on console==========================================")
let array08=[20,31,40,25,23,11,29,9,60,2,11];
let sum=0;
for ( const element of array08){
    sum = sum + element
}
 console.log(sum)   


