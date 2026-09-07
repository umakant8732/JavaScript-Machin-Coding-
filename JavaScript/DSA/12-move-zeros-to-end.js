/**
 * ============================================================================
 * 12. Move All Zeros to the End ⭐⭐⭐
 * ============================================================================
 * Folder: JavaScript/DSA
 * File: 12-move-zeros-to-end.js
 *
 * Problem Statement:
 * Given an array of numbers, move all 0s to the end of the array while maintaining the relative order of non-zero elements.
 *
 * Example:
 * Input: [0, 1, 0, 3, 12] -> Output: [1, 3, 12, 0, 0]
 * ============================================================================
 */

// Write your solution function here:
function moveZerosToEnd(arr) {
    // TODO: Write your code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run this file using: node "c:/MYREPOS/Interview/JavaScript/DSA/12-move-zeros-to-end.js")
// ----------------------------------------------------------------------------
console.log("Result:", moveZerosToEnd([0, 1, 0, 3, 12])); // Expected: [1, 3, 12, 0, 0]


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function moveZerosToEnd(arr) {
    let insertPos = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[insertPos] = arr[i];
            insertPos++;
        }
    }
    while (insertPos < arr.length) {
        arr[insertPos] = 0;
        insertPos++;
    }
    return arr;
}
===============================================================================
*/
