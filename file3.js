import {avg} from "./file2.js";

if(avg>=90){
    console.log("Grade: A+")
}
else if(avg<90 && avg>=70){
    console.log("Grade: A")
}
else if(avg<70 && avg>=60){
    console.log("Grade: B")
}
else if(avg<60 && avg>=50){
    console.log("Grade: C")
}
else{
    console.log("You are Fail")
}