import { value1,value2,value3,value4,value5 } from "./fil1.js";
 
let total;
export let avg;
function add(value1,value2,value3,value4,value5 ) {
    total=value1+value2+value3+value4,value5;
    return total;
}

function percentage (total){
    avg=((total/400)*100);
    return avg;
}
console.log("Total is : "+add(value1,value2,value3,value4,value5));

let result=percentage(total);
console.log("Average is :"+result);




