


/**
 * PROBLEM 1: Array.prototype.map Polyfill
 * 
 * Objective:
 * Implement a custom Array.prototype.myMap function that replicates the native Array.prototype.map method.
 * 
 * Why:
 * Map creates a new array of the same length by running a callback function on every element,
 * without mutating the original array (Immutability).
 */

// Step 1: Prototype Binding
// - Why: We want our custom method to be available on all array instances globally (e.g. [1,2].myMap()).
// - Action: We attach the 'myMap' function directly to the global 'Array.prototype'.
Array.prototype.myMap = function (callback) {

    // Step 2: New Array Initialization (Immutability)
    // - Why: Native map does not modify the original array; it must return a brand-new array.
    // - Action: We create a fresh empty array 'result' to collect the callback's returned values.
    const result = [];

    // Step 3: Iterate through elements (Accessing array via 'this')
    // - Why: To access the calling array, we use the implicit binding 'this' keyword (dot left rule).
    // - Action: We loop from index 0 to 'this.length' to inspect every item one by one.
    for (let i = 0; i < this.length; i++) {

        // Step 4: Callback Execution & Parameter Mapping
        // - Why: For each element, we must run the user-provided callback with its expected arguments (value, index, array).
        // - Action: We invoke callback(this[i], i, this) and push the returned value into our 'result' array.
        result.push(callback(this[i], i, this))
    }

    // Step 5: Returning the Mapped Array
    // - Why: To deliver the final transformed dataset back to the caller.
    // - Action: We return the 'result' array.
    return result
}

// ============================================================================
// Test Case Execution
// ============================================================================
const numbers = [ 12, 34, 56]
const doubled = numbers.myMap((num) => num * 2)
console.log(doubled); // Output: [24, 68, 112]