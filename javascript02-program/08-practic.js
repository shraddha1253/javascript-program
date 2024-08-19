// Create an object with properties
let person = {
    name: 'John Doe',
    age: 35,
    occupation: 'Software Engineer',
    location: 'New York',
    degrees: {
      engineering: 'CSC',
      phd: 'Adv Computing',
      masters: 'Computer Science',
      bachelors: 'Information Technology'
    },
    certificates: [
      'Hacker Rank Participation',
      'Certificate in IFE course',
      'Certificate in Adv Programming'
    ]
  };
  
console.log("===========================Add a new property=================")

  person.totalExperience = ' Total experaince 14 years';
  console.log(person);
  
  console.log("===========================Modify an existing property=================") 
  person.age = 40;
  console.log(`Updated age: ${person.age}`);
  console.log(person);
  
  console.log("===========================Add a new certificate at the 2nd index=================") 
  person.certificates.splice(1, 0, 'Oracle Certified');
  console.log(person.certificates);
  
  console.log("===========================Log the last element of the array=================")
  console.log(person.certificates[person.certificates.length - 1]);
  
  console.log("===========================Traverse the array using for loop=================")
  for (let i = 0; i < person.certificates.length; i++) {
    console.log(person.certificates[i]);
  }
  
  console.log("===========================Log complete object on console using for in loop=================") 
  for (const key in person) {
    if (Object.prototype.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(`${key}, ${element}`);
    }
}