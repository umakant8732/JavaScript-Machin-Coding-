/**
 * ============================================================================
 * 06. Count Even and Odd Numbers in an Array ⭐
 * ============================================================================
 * Folder: JavaScript/DSA
 * File: 06-count-even-odd.js
 *
 * Problem Statement:
 * Given an array of numbers, return an object containing the counts of even and odd numbers.
 *
 * Example:
 * Input: [1, 2, 3, 4, 5, 6] -> Output: { even: 3, odd: 3 }
 * ============================================================================
 */

// Write your solution function here:
function countEvenOdd(arr) {
    // TODO: Write your code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run this file using: node "c:/MYREPOS/Interview/JavaScript/DSA/06-count-even-odd.js")
// ----------------------------------------------------------------------------
console.log("Result:", countEvenOdd([1, 2, 3, 4, 5, 6])); // Expected: { even: 3, odd: 3 }


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function countEvenOdd(arr) {
    let even = 0;
    let odd = 0;
    for (let num of arr) {
        if (num % 2 === 0) even++;
        else odd++;
    }
    return { even, odd };
}
===============================================================================
*/
