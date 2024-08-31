function CountPalindrome(string1) {
    const length2=string1.length;
let str1=' madam ';
for (let i = 0; i < length2 / 2; i++) {

    // check if first and last string are same
    if (string1[i] !== string1[length2 - 1 - i]) {
        return 'It is not a palindrome';
    }
}
return 'It is a palindrome :'+ str1;
}

const value = CountPalindrome('madam');

console.log(value);

console.log('======================================')

function Palindrome(string2) {
    const length=string2.length;
let str2=' dad ';
for (let i = 0; i < length / 2; i++) {

    // check if first and last string are same
    if (string2[i] !== string2[length - 1 - i]) {
        return 'It is not a palindrome';
    }
}
return 'It is a palindrome :'+ str2;
}
const value1 = Palindrome('dad');

console.log(value1);

console.log('======================================')

function Palindrome1(string3) {
    const length3=string3.length;
let str3=' hello ';
for (let i = 0; i < length3 / 2; i++) {

    // check if first and last string are same
    if (string3[i] !== string3[length3 - 1 - i]) {
        return 'It is not a palindrome :'+ str3;
    }
}
return 'It is a palindrome';
}


const value3 = Palindrome1('hello');

console.log(value3);
