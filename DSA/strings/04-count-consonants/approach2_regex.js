/**
 * Approach 2: Regular Expression
 * Use match(/[^aeioua-zA-Z]/g).
 */

function countConsonants(str) {
    const matches = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    return matches ? matches.length : 0;
}

console.log(countConsonants("hello world")); // Expected: 7
console.log(countConsonants("javascript"));  // Expected: 7
