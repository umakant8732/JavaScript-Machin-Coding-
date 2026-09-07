/**
 * ============================================================================
 * 04. Reverse an Array without using reverse() ⭐⭐
 * ============================================================================
 * Folder: JavaScript/DSA
 * File: 04-reverse-array.js
 *
 * Problem Statement:
 * Given an array, reverse its elements in-place or return a new reversed array without using built-in Array.prototype.reverse().
 *
 * Example:
 * Input: [1, 2, 3, 4, 5] -> Output: [5, 4, 3, 2, 1]
 * ============================================================================
 */

// Write your solution function here:
function reverseArray(arr) {
    // TODO: Write your code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run this file using: node "c:/MYREPOS/Interview/JavaScript/DSA/04-reverse-array.js")
// ----------------------------------------------------------------------------
console.log("Result:", reverseArray([1, 2, 3, 4, 5])); // Expected: [5, 4, 3, 2, 1]


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}
===============================================================================
*/
