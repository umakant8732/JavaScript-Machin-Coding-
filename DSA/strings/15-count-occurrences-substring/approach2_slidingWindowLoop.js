/**
 * Approach 2: Nested Sliding Window
 * Compare str[i + j] vs sub[j] / tempPointer.
 */

function countSubstrings(str, sub) {
    // Write your code here
}

console.log(countSubstrings("hello hello world", "hello")); // Expected: 2
console.log(countSubstrings("aaaa", "aa"));                 // Expected: 2
console.log(countSubstrings("abcdef", "xyz"));              // Expected: 0
