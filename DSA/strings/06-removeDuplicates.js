/**
 * Problem 6: Remove Duplicate Characters
 * 
 * Given a string, return a new string with all duplicate characters removed.
 * Only the first occurrence of each character should be kept, maintaining their original order.
 * The removal should be case-sensitive.
 * 
 * Example 1:
 * Input: "hello"
 * Output: "helo"
 * 
 * Example 2:
 * Input: "programming"
 * Output: "progamin"
 * 
 * Example 3:
 * Input: "Aabbcc"
 * Output: "Aabc"
 */

function removeDuplicates(str) {

    const newString = []
    for (let i = 0; i < str.length; i++) {
        if (!newString.includes(str[i])) {
            newString.push(str[i])
        }
    }
    return newString.join("")
}

console.log(removeDuplicates("hello"));       // Expected: "helo"
console.log(removeDuplicates("programming")); // Expected: "progamin"
console.log(removeDuplicates("Aabbcc"));      // Expected: "Aabc"
