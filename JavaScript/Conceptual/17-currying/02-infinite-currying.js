/**
 * Step 2: Infinite Currying
 * 
 * Concept:
 * Infinite currying allows calling a function N number of times until an empty bracket () is called.
 * e.g., add(1)(2)(3)(4)...()
 * 
 * Key Rules:
 * 1. 'a' gets its value from the outer function call: add(a + b).
 * 2. 'b' gets its value from the trailing invocation brackets: (b).
 * 3. Base Condition: When b is undefined (empty call ()), return the accumulated sum 'a'.
 */

function add(a) {
    return function(b) {
        // If an argument 'b' is passed, recursively accumulate sum
        if (b !== undefined) {
            return add(a + b); // 'a + b' becomes the new 'a' for the next step
        }
        // Base case: Empty () invocation returns final accumulated sum
        return a;
    };
}

// Test Case 1: 3 arguments -> add(1)(2)()
console.log("1. add(1)(2)():", add(1)(2)()); // Output: 3

// Test Case 2: 4 arguments -> add(1)(2)(3)()
console.log("2. add(1)(2)(3)():", add(1)(2)(3)()); // Output: 6

// Test Case 3: 6 arguments -> add(1)(2)(3)(4)(5)()
console.log("3. add(1)(2)(3)(4)(5)():", add(1)(2)(3)(4)(5)()); // Output: 15
