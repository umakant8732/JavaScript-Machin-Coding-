/**
 * Problem 10: First Non-Repeating Character
 * 
 * Given a string, find the first character that does not repeat anywhere in the string.
 * The search should be case-sensitive. If no such character exists, return null.
 * 
 * Example 1:
 * Input: "hello"
 * Output: "h"
 * 
 * Example 2:
 * Input: "swiss"
 * Output: "w"
 * 
 * Example 3:
 * Input: "aabb"
 * Output: null
 */

function firstNonRepeatingChar(str) {
    for (let i = 0; i < str.length; i++) {
        let isRepeating = false
        for (j = 0; j < str.length; j++) {
            if (i !== j && str[i] === str[j]) {
                isRepeating = true
                break
            }
        }

        if (!isRepeating) {
          return str[i]
        }
    }

    return null
}

console.log(firstNonRepeatingChar("hello"));  // Expected: "h"
console.log(firstNonRepeatingChar("swiss"));  // Expected: "w"
console.log(firstNonRepeatingChar("aabb"));   // Expected: null
