/**
 * Problem 28: Minimum Window Substring
 * 
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring of s
 * such that every character in t (including duplicates) is included in the window.
 * If there is no such substring, return the empty string "".
 * The test cases will be generated such that the answer is unique.
 * 
 * Example 1:
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 * 
 * Example 2:
 * Input: s = "a", t = "a"
 * Output: "a"
 * 
 * Example 3:
 * Input: s = "a", t = "aa"
 * Output: ""
 */

function minWindow(s, t) {
    // Write your code here
}

console.log(minWindow("ADOBECODEBANC", "ABC")); // Expected: "BANC"
console.log(minWindow("a", "a"));               // Expected: "a"
console.log(minWindow("a", "aa"));              // Expected: ""
