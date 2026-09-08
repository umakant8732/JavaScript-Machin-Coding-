/**
 * ============================================================================
 * 02. Sort an Array of 0s, 1s, and 2s (Dutch National Flag) ⭐⭐⭐⭐⭐
 * ============================================================================
 * Folder: JavaScript/DSA_TwoPointers
 * File: 02-sort-array-of-0s-1s-2s.js
 *
 * Problem Statement:
 * Given an array containing only 0s, 1s, and 2s, sort the array in-place in O(N) time and O(1) space without using built-in Array.prototype.sort().
 *
 * Example:
 * Input: [2, 0, 2, 1, 1, 0] -> Output: [0, 0, 1, 1, 2, 2]
 * ============================================================================
 */

// Write your solution function here:
function sort012(arr) {
    // TODO: Write your two-pointer code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run using: node "c:/MYREPOS/Interview/JavaScript/DSA_TwoPointers/02-sort-array-of-0s-1s-2s.js")
// ----------------------------------------------------------------------------
console.log("Result:", sort012([2, 0, 2, 1, 1, 0])); // Expected: [0, 0, 1, 1, 2, 2]


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function sort012(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;
    while (mid <= high) {
        if (arr[mid] === 0) {
            let temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            let temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;
            high--;
        }
    }
    return arr;
}
===============================================================================
*/
