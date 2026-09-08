/**
 * ============================================================================
 * 04. Container With Most Water ⭐⭐⭐⭐⭐
 * ============================================================================
 * Folder: JavaScript/DSA_TwoPointers
 * File: 04-container-with-most-water.js
 *
 * Problem Statement:
 * Given an array of non-negative integers height representing vertical lines on a graph, find two lines that together with the x-axis form a container that holds the most water. Return the maximum area of water.
 *
 * Example:
 * Input: [1, 8, 6, 2, 5, 4, 8, 3, 7] -> Output: 49 (Between index 1 (height 8) and index 8 (height 7), width 7, height min(8, 7)=7, area 7x7=49)
 * ============================================================================
 */

// Write your solution function here:
function maxArea(height) {
    // TODO: Write your two-pointer code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run using: node "c:/MYREPOS/Interview/JavaScript/DSA_TwoPointers/04-container-with-most-water.js")
// ----------------------------------------------------------------------------
console.log("Result:", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Expected: 49


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;
    while (left < right) {
        let currentWidth = right - left;
        let currentHeight = Math.min(height[left], height[right]);
        let currentArea = currentWidth * currentHeight;
        maxWater = Math.max(maxWater, currentArea);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWater;
}
===============================================================================
*/
