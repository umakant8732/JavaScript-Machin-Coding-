/*
 * RULE 4: Variable lookup is always Inside-Out (Scope Chain).
 * The engine searches the local scope first. If it finds the variable declared locally 
 * (even if it's currently undefined or in TDZ), it will use it and NEVER check parent/global scopes.
 */

// --- Example 1: Shadowing and Temporal Dead Zone (TDZ) ---
var x = 10;
{
    // The engine sees 'let x' declared inside this block.
    // It will use this local x, but since it is accessed before initialization, it throws a ReferenceError.
    // It will NOT fallback to the global x = 10.
    
    // console.log(x); // Uncommenting this throws: ReferenceError: Cannot access 'x' before initialization
    let x = 20;
    console.log(x); // Output: 20
}


// --- Example 2: Local var shadowing global var ---
var a = 1;
function parent() {
    // Local 'var a' is hoisted inside parent(). So local a = undefined.
    // The engine ignores the global a = 1.
    console.log(a); // Output: undefined
    var a = 2;
}
parent();
