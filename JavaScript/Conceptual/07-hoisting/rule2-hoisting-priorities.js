/*
 * RULE 2: Priority Order in Memory Creation Phase:
 * 1. Parameters & Function Declarations (High Priority - gets registered and stored fully in heap).
 * 2. var Declarations (Medium Priority - initialized to 'undefined'. If the variable name already exists, the var declaration is ignored).
 * 3. let & const Declarations (Low Priority - registered in block scope but NOT initialized, leading to Temporal Dead Zone).
 */

// --- Example 1: Same name var and function ---
// Memory Phase: function 'x' gets registered first. The declaration 'var x' is ignored because 'x' is already taken.
// Execution Phase: x starts as a function, but 'x = 10' overwrites it to a number.
var x = 10;
function x() {}
console.log(typeof x); // Output: "number" (due to execution phase assignment)


// --- Example 2: Parameter vs var ---
// Memory Phase: Parameter 'y' gets initialized with the passed value (100). The 'var y' inside is ignored.
// Execution Phase: y starts as 100, then gets reassigned to 200.
function test(y) {
    console.log(y); // Output: 100
    var y = 200;
    console.log(y); // Output: 200
}
test(100);
