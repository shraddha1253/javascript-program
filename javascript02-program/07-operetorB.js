

console.log("=============1=============");

function greaterNumber (n1,n2){

    var result = n1>=n2 ? n1:n2;
    console.log(`Given number are:${n1}, ${n2} and greater number is: ${result}`);
}
     greaterNumber (10,-10);
           greaterNumber (800,899);

 console.log("=====================================================================")



function isEvenOrOddNum( num){
    console.log (`number is;${ num}`);
   var result= num%2==0 ? true : false;
   return result;

}
var result

isEvenOrOddNum(29);
console.log (`is number;${ 29} even;`);

isEvenOrOddNum(44);
console.log (`is number;${ 44} even;`);

isEvenOrOddNum(0);
console.log (`is number;${ 0} even;`);

isEvenOrOddNum(101);
console.log (`is number;${ 101} even;`);

