/**
 * Problem 3: Count Vowels
 * 
 * Given a string, count the number of vowels (a, e, i, o, u) present in it.
 * The check should be case-insensitive (both uppercase and lowercase vowels count).
 * 
 * Example 1:
 * Input: "hello"
 * Output: 2 (e, o)
 * 
 * Example 2:
 * Input: "JavaScript"
 * Output: 3 (a, a, i)
 * 
 * Example 3:
 * Input: "xyz"
 * Output: 0
 */

function countVowels(str) {
    let counter = 0;
    let vowels = 'aeiouAEIOU'
    for (let i = 0; i <= str.length - 1; i++) {
        if (vowels.includes(str.charAt(i))) {
            counter++
        }
    }
    return counter
}

console.log(countVowels("hello"));      // Expected: 2
console.log(countVowels("JavaScriptaaaa")); // Expected: 3
console.log(countVowels("xyz"));        // Expected: 0
