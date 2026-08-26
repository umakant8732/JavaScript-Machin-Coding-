/**
 * Step 1: Variable Hoisting (var vs let/const)
 * 
 * Task:
 * 1. Declare and access variables using var, let, and const before their initialization.
 * 2. Log them to observe the differences in creation vs execution phases.
 */

// Write your code here


//in memeory phase a has undefined stored already, that is why at call time it printed undefined without any error
console.log(a); //output -> undefined
var a = 10;



// b was registered in memory but it was not initialized, because of that it was in TDZ, thats why it gaves error at call time
console.log(b); //crash -> reference error
let b = 20; 


//same as let 
console.log(c);
const c = 30;

