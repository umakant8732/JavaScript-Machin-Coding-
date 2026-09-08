/**
 * ============================================================================
 * 01. Move Negative Numbers to Left & Positives to Right ⭐⭐⭐⭐⭐
 * ============================================================================
 * Folder: JavaScript/DSA_TwoPointers
 * File: 01-move-negatives-left-positives-right.js
 *
 * Problem Statement:
 * Given an array of numbers, reorder it in-place such that all negative numbers appear on the left side and all positive numbers appear on the right side using Two Pointers.
 *
 * Example:
 * Input: [-12, 11, -13, -5, 6, -7, 5, -3, -6]
Expected: Negatives on Left, Positives on Right (e.g. [-12, -6, -13, -5, -3, -7, 5, 6, 11])
 * ============================================================================
 */

// Write your solution function here:
function moveNegativesLeftPositivesRight(arr) {
    // TODO: Write your two-pointer code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run using: node "c:/MYREPOS/Interview/JavaScript/DSA_TwoPointers/01-move-negatives-left-positives-right.js")
// ----------------------------------------------------------------------------
console.log("Result:", moveNegativesLeftPositivesRight([-12, 11, -13, -5, 6, -7, 5, -3, -6]));


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function moveNegativesLeftPositivesRight(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] < 0) {
            left++;
        } else if (arr[right] >= 0) {
            right--;
        } else {
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
