/**
 * ============================================================================
 * 11. Move All Odd Numbers to Left and Even Numbers to Right ⭐⭐⭐⭐⭐
 * ============================================================================
 * Folder: JavaScript/DSA
 * File: 11-move-odds-left-evens-right.js
 *
 * Problem Statement:
 * Given an array of numbers, reorder the array such that all odd numbers appear on the left side and all even numbers appear on the right side. (Order of elements does not need to be preserved).
 *
 * Example:
 * Input: [2, 7, 4, 9, 1, 6, 3] -> Expected: Odds on left, Evens on right (e.g. [7, 9, 1, 3, 2, 4, 6])
 * ============================================================================
 */

// Write your solution function here:
function moveOddsLeftEvensRight(arr) {
    // TODO: Write your code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run this file using: node "c:/MYREPOS/Interview/JavaScript/DSA/11-move-odds-left-evens-right.js")
// ----------------------------------------------------------------------------
console.log("Result:", moveOddsLeftEvensRight([2, 7, 4, 9, 1, 6, 3]));


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function moveOddsLeftEvensRight(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        while (left < right && arr[left] % 2 !== 0) left++;
        while (left < right && arr[right] % 2 === 0) right--;
        if (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return arr;
}
===============================================================================
*/
