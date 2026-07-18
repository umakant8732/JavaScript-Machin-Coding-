/**
 * Problem 2: Check Palindrome
 * 
 * Given a string, check if it is a palindrome.
 * A string is a palindrome if it reads the same backward as forward.
 * 
 * Note: For standard interviews, you might need to handle uppercase/lowercase 
 * and ignore non-alphanumeric characters (like spaces, punctuation).
 * 
 * Example 1:
 * Input: "racecar"
 * Output: true
 * 
 * Example 2:
 * Input: "hello"
 * Output: false
 * 
 * Example 3 (Advanced/Cleaned):
 * Input: "A man, a plan, a canal: Panama"
 * Output: true (after removing spaces/punctuation and converting to lowercase)
 */

function isPalindrome(str) {

   
    let left = 0;
    let right = str.length - 1;


    while (left <= right) {
        if (str.charAt(left) !== str.charAt(right)) {
            return false
        }
        left++;
        right--
    }
    return true
}

console.log(isPalindrome("racecar")); // Expected: true
console.log(isPalindrome("hello"));   // Expected: false
