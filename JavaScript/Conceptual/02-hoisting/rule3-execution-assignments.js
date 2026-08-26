/*
 * RULE 3: Execution Phase Assignments overwrite Memory Phase values.
 * Hoisting only sets up the starting state. During the execution phase,
 * assignment statements (=) modify the values. If an assignment line does not execute 
 * (e.g. inside an 'if (false)' block), the variable retains its memory-phase value.
 */

// --- Example 1: Overwriting a hoisted function ---
var a = 5;
function a() {} 
// Memory Phase: 'a' points to the function.
// Execution Phase: Line 'a = 5' overwrites the function with the number 5.
console.log(a); // Output: 5


// --- Example 2: Non-executed assignment ---
var x = 10;
function test() {
    if (false) {
        var x = 20; // This assignment NEVER runs
    }
    console.log(x); // Output: undefined
}
// Memory Phase inside test: Local 'var x' is hoisted and initialized to undefined.
// Execution Phase inside test: 'if (false)' prevents the assignment 'x = 20' from running.
// So x remains undefined.
test();
