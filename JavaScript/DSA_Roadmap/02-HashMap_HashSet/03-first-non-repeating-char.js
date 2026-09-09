/**
 * ============================================================================
 * 03. First Non-Repeating Character ⭐⭐
 * ============================================================================
 * Folder: JavaScript/DSA_Roadmap/02-HashMap_HashSet
 * File: 03-first-non-repeating-char.js
 *
 * Problem Statement:
 * Given a string s, find the first non-repeating character in it and return its index or character. If it does not exist, return -1 or null.
 *
 * Example:
 * Input: "leetcode" -> Output: 0 ("l") | Input: "loveleetcode" -> Output: 2 ("v")
 * ============================================================================
 */

// Write your solution function here:
function firstUniqChar(s) {
    // TODO: Write your code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run using: node "c:/MYREPOS/Interview/JavaScript/DSA_Roadmap/02-HashMap_HashSet/03-first-non-repeating-char.js")
// ----------------------------------------------------------------------------
console.log("Result:", firstUniqChar("leetcode")); // Expected: 0
console.log("Result:", firstUniqChar("loveleetcode")); // Expected: 2


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function firstUniqChar(s) {
    let map = {};
    for (let char of s) map[char] = (map[char] || 0) + 1;
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) return i;
    }
    return -1;
}
===============================================================================
*/
