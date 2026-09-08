/**
 * ============================================================================
 * 03. Squares of a Sorted Array ⭐⭐⭐⭐
 * ============================================================================
 * Folder: JavaScript/DSA_TwoPointers
 * File: 03-square-and-sort-sorted-array.js
 *
 * Problem Statement:
 * Given an array of integers sorted in non-decreasing order (including negative numbers), return an array of the squares of each number sorted in non-decreasing order using Two Pointers in O(N) time.
 *
 * Example:
 * Input: [-4, -1, 0, 3, 10] -> Output: [0, 1, 9, 16, 100]
 * ============================================================================
 */

// Write your solution function here:
function sortedSquares(nums) {
    // TODO: Write your two-pointer code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run using: node "c:/MYREPOS/Interview/JavaScript/DSA_TwoPointers/03-square-and-sort-sorted-array.js")
// ----------------------------------------------------------------------------
console.log("Result:", sortedSquares([-4, -1, 0, 3, 10])); // Expected: [0, 1, 9, 16, 100]


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function sortedSquares(nums) {
    let n = nums.length;
    let result = new Array(n);
    let left = 0;
    let right = n - 1;
    let pos = n - 1;
    while (left <= right) {
        let leftSquare = nums[left] * nums[left];
        let rightSquare = nums[right] * nums[right];
        if (leftSquare > rightSquare) {
            result[pos] = leftSquare;
            left++;
        } else {
            result[pos] = rightSquare;
            right--;
        }
        pos--;
    }
    return result;
}
===============================================================================
*/
