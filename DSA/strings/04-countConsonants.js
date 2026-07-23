/**
 * Problem 4: Count Consonants
 * 
 * Given a string, count the number of consonants present in it.
 * Consonants are alphabetic characters (A-Z, a-z) that are NOT vowels (a, e, i, o, u).
 * Non-alphabetic characters like numbers, spaces, and punctuation do NOT count.
 * 
 * Example 1:
 * Input: "hello"
 * Output: 3 (h, l, l)
 * 
 * Example 2:
 * Input: "JavaScript!"
 * Output: 7 (J, v, S, c, r, p, t - note: '!' is not a consonant)
 * 
 * Example 3:
 * Input: "123 xyz"
 * Output: 3 (x, y, z - note: digits and space are ignored)
 */

function countConsonants(str) {
    const vowels = 'aeiou';
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (char >= 'a' && char <= 'z' && !vowels.includes(char)) {
            counter++;
        }
    }

    return counter;
}

console.log(countConsonants("hello"));       // Expected: 3
console.log(countConsonants("JavaScript!")); // Expected: 7
console.log(countConsonants("123 xyz"));     // Expected: 3
