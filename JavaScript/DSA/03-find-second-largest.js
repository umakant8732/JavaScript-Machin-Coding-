/**
 * ============================================================================
 * 03. Find Second Largest Element in an Array ⭐⭐⭐
 * ============================================================================
 * Folder: JavaScript/DSA
 * File: 03-find-second-largest.js
 *
 * Problem Statement:
 * Given an array of numbers, find and return the second largest element without sorting the array. If no second largest exists, return null or -1.
 *
 * Example:
 * Input: [12, 35, 1, 10, 34, 1] -> Output: 34
 * ============================================================================
 */

// Write your solution function here:
function findSecondLargest(arr) {
    // TODO: Write your code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run this file using: node "c:/MYREPOS/Interview/JavaScript/DSA/03-find-second-largest.js")
// ----------------------------------------------------------------------------
console.log("Result:", findSecondLargest([12, 35, 1, 10, 34, 1])); // Expected: 34
console.log("Result:", findSecondLargest([10, 10, 10])); // Expected: null


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function findSecondLargest(arr) {
    if (!arr || arr.length < 2) return null;
    let largest = -Infinity;
    let secondLargest = -Infinity;
    
    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }
    return secondLargest === -Infinity ? null : secondLargest;
}
===============================================================================
*/
