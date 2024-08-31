function checkStringsAnagram(a, b) {
  let len1 = a.length;
  let len2 = b.length;
  if(len1 !== len2){
     console.log('invalid input');
     return
  }
  let str1 = a.split('').sort().join('');
  let str2 = b.split('').sort().join('');
  if(str1 === str2){
     console.log(" silent and listen are anagrams:True " + str1);
     
  } else { 
     console.log("False");
  }
}
checkStringsAnagram("silent", "listen")

console.log('==================================================================')

function checkStringsAnagram1(c, d) {
  let len1 = c.length;
  let len2 = d.length;
  if(len1 !== len2){
     console.log('invalid input');
     return
  }
  let str3 = c.split('').sort().join('');
  let str4 = d.split('').sort().join('');
  if(str3 === str4){
     console.log("True ");
     
  } else { 
     console.log(" hello and world are not anagrams: False"+"  " + str3 +"  "+str4);
  }
}
checkStringsAnagram1("hello", "world")

console.log('==================================================================')

function checkStringsAnagram2(e, f) {
  let len1 = e.length;
  let len2 = f.length;
  if(len1 !== len2){
     console.log('invalid input');
     return
  }
  let str5 = e.split('').sort().join('');
  let str6 = f.split('').sort().join('');
  if(str5 === str6){
     console.log("True ");
     
  } else { 
     console.log(" such and much are not anagrams: False"+"  " + str5 +"  "+str6);
  }
}
checkStringsAnagram2("such", "much")
