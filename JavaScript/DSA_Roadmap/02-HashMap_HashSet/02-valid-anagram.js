/**
 * ============================================================================
 * 02. Valid Anagram using Frequency Map ⭐
 * ============================================================================
 * Folder: JavaScript/DSA_Roadmap/02-HashMap_HashSet
 * File: 02-valid-anagram.js
 *
 * Problem Statement:
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise using a frequency count map.
 *
 * Example:
 * Input: s = "anagram", t = "nagaram" -> Output: true
 * ============================================================================
 */

// Write your solution function here:
function isAnagram(s, t) {
    // TODO: Write your code here
}

// ----------------------------------------------------------------------------
// TEST CASES (Run using: node "c:/MYREPOS/Interview/JavaScript/DSA_Roadmap/02-HashMap_HashSet/02-valid-anagram.js")
// ----------------------------------------------------------------------------
console.log("Result:", isAnagram("anagram", "nagaram")); // Expected: true
console.log("Result:", isAnagram("rat", "car")); // Expected: false


/*
===============================================================================
💡 REFERENCE SOLUTION (Uncomment to check answer after trying):
-------------------------------------------------------------------------------
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    let count = {};
    for (let char of s) count[char] = (count[char] || 0) + 1;
    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }
    return true;
}
===============================================================================
*/
