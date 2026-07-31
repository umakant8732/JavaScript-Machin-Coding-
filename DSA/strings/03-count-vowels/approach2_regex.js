/**
 * Approach 2: Regular Expression
 * Use match(/[aeiou]/gi).
 */

function countVowels(str) {
    const matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0
}

console.log(countVowels("hello world")); // Expected: 3
console.log(countVowels("javascript"));  // Expected: 3
