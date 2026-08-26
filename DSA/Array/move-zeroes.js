/*
 * Problem: Move Zeroes (LeetCode #283 - Easy)
 * 
 * Given an integer array 'nums', move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * 
 * Note that you must do this in-place without making a copy of the array.
 * 
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * 
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 */

function moveZeroes(nums) {

    let index = 0

    for(let i = 0; i < nums.length; i++){

        if(nums[i] !== 0){
           let temp = nums[i] //1
            nums[i] = nums[index]
            nums[index] = temp
            index++
        }
       

    }
  
    
    return nums; 
}

// ========================
// TEST CASES
// ========================
console.log(moveZeroes([0, 1, 0, 3, 12])); // Expected output: [1, 3, 12, 0, 0]
console.log(moveZeroes([0]));              // Expected output: [0]
console.log(moveZeroes([4, 2, 4, 0, 0, 3, 0, 5, 1, 0])); // Expected: [4, 2, 4, 3, 5, 1, 0, 0, 0, 0]
