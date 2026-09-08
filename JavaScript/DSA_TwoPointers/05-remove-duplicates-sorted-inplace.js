/**
 * ============================================================================
 * 05. Remove Duplicates from Sorted Array In-Place ⭐⭐⭐⭐
 * ============================================================================
 * Folder: JavaScript/DSA_TwoPointers
 * File: 05-remove-duplicates-sorted-inplace.js
 *
 * Problem Statement:
 * Given a sorted array nums, remove the duplicates in-place using Two Pointers such that each unique element appears only once at the beginning of the array. Return the count of unique elements k.
 *
 * Example:
 * Input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] -> Output: 5 (Array becomes [0, 1, 2, 3, 4, ...])
 * ============================================================================
 */

// Write your solution function here:
function removeDuplicates(nums) {
    // TODO: Write your two-pointer code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run using: node "c:/MYREPOS/Interview/JavaScript/DSA_TwoPointers/05-remove-duplicates-sorted-inplace.js")
// ----------------------------------------------------------------------------
const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k = removeDuplicates(arr);
console.log("Unique count k:", k);
console.log("Modified array:", arr.slice(0, k)); // Expected: [0, 1, 2, 3, 4]


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
===============================================================================
*/
