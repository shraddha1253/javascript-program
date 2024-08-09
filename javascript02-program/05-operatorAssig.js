function interviewCheck(gradScore, hscScore, sscScore, candidateName){

    console.log(`Given criteria's are: ${gradScore}, ${hscScore}, ${sscScore}, ${candidateName}`);
    
         var result = gradScore>=70 || hscScore>=80 || sscScore>=90 ? " You are eligible for TCS" : "  Unfortunately You are not eligible";
    
         console.log(`${result}`);
    
         } 

         
    
    interviewCheck(80,86, 90, "prem");
    
   console.log ( "========================================================")
    
    interviewCheck(70,65, 55, "jenny");

     console.log( "=============================================================")
    
    interviewCheck(60,79, 88, "jay");




 