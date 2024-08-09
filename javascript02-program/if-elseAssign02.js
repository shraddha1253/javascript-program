var voteEligible= function(age) {
    if (age==0 || age<0  || age>130  || age==null) {
        console.log(`invalid data age-${age}`);
    } else {
        console.log(`valid Data age-${age}`);
         if (age>=18){

         console.log(`eligible for voting`);
        } else {
            console.log(`Not eligible for voting`);
        }
    }
}

voteEligible(45);
console.log("================================")
voteEligible(17);

console.log("================================")
voteEligible(-10);

console.log("================================")
voteEligible(200);

console.log("================================")
voteEligible(null);

