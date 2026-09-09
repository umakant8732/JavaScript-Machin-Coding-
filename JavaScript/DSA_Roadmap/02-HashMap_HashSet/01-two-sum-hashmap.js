/**
 * ============================================================================
 * 01. Two Sum using HashMap (O(N) Time) ⭐⭐
 * ============================================================================
 * Folder: JavaScript/DSA_Roadmap/02-HashMap_HashSet
 * File: 01-two-sum-hashmap.js
 *
 * Problem Statement:
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target using a Map/Object.
 *
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9 -> Output: [0, 1]
 * ============================================================================
 */

// Write your solution function here:
function twoSum(nums, target) {
    // TODO: Write your code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run using: node "c:/MYREPOS/Interview/JavaScript/DSA_Roadmap/02-HashMap_HashSet/01-two-sum-hashmap.js")
// ----------------------------------------------------------------------------
console.log("Result:", twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log("Result:", twoSum([3, 2, 4], 6)); // Expected: [1, 2]


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
===============================================================================
*/
