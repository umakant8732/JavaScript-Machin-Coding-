/**
 * Step 3: Temporal Dead Zone (TDZ)
 * 
 * Task:
 * 1. Access a let variable in its surrounding scope before its declaration line.
 * 2. Observe the ReferenceError and define TDZ in your own words.
 */

// Write your code here

{
      // === TDZ Starts Here for variable 'b' ===
    // 'b' is in the Temporal Dead Zone (uninitialized in memory)

    // console.log(b); //accessing here throws ReferenceError
    let b = 10;
    //TDZ ends here for variable 'b'

    console.log(b);
}



// Case A: Safe Execution (Temporal Check)
// 1. Although printValue is defined before x, it is called after x is initialized in time.
// 2. At execution time, x is no longer in its TDZ, so it logs 100 safely.
const printValue = () => console.log(x);
let x = 100;
printValue(); 



// Case B: Crashed Execution (Temporal Check)
// 1. PrintValue is called before y is initialized in execution time.
// 2. Since y is still in its TDZ during execution, it throws a ReferenceError.
const PrintValue = () => console.log(y);
// PrintValue(); // Uncomment to test: Throws ReferenceError
let y = 100;






