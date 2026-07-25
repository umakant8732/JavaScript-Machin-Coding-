/**
 * Problem 9: First Repeating Character
 * 
 * Given a string, find the first character that repeats itself.
 * The search should be case-sensitive. If no character repeats, return null.
 * 
 * Example 1:
 * Input: "hello"
 * Output: "l"
 * 
 * Example 2:
 * Input: "programming"
 * Output: "r" (r is the first character to appear a second time)
 * 
 * Example 3:
 * Input: "abcdef"
 * Output: null
 */

function firstRepeatingChar(str) {

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < i; j++) {
            if (str[i] === str[j]) {
                return str[i]
            }
        }
    }

    return null




}

console.log(firstRepeatingChar("hello"));       // Expected: "l"
console.log(firstRepeatingChar("programming")); // Expected: "r"
console.log(firstRepeatingChar("abcdef"));      // Expected: null
