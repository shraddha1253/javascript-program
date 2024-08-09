var interview = function(age, person){
    if (age>=18) {
        console.log(`Hey ${person} you are eligible for interview`);
    } else {
        console.log(`Unfortunately , Hey ${person}  you are not eligible for interview`);
    }
}
interview(21, "shraddha");
interview(17, "pravin");
interview(20, "atul");