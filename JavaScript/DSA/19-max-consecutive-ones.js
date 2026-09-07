/**
 * ============================================================================
 * 19. Find Maximum Consecutive 1s in a Binary Array ⭐⭐
 * ============================================================================
 * Folder: JavaScript/DSA
 * File: 19-max-consecutive-ones.js
 *
 * Problem Statement:
 * Given a binary array of 0s and 1s, find and return the maximum number of consecutive 1s.
 *
 * Example:
 * Input: [1, 1, 0, 1, 1, 1] -> Output: 3
 * ============================================================================
 */

// Write your solution function here:
function findMaxConsecutiveOnes(arr) {
    // TODO: Write your code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run this file using: node "c:/MYREPOS/Interview/JavaScript/DSA/19-max-consecutive-ones.js")
// ----------------------------------------------------------------------------
console.log("Result:", findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Expected: 3


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function findMaxConsecutiveOnes(arr) {
    let maxCount = 0;
    let currentCount = 0;
    for (let num of arr) {
        if (num === 1) {
            currentCount++;
            if (currentCount > maxCount) maxCount = currentCount;
        } else {
            currentCount = 0;
        }
    }
    return maxCount;
}
===============================================================================
*/
