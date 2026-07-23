/**
 * Problem 5: Character Frequency
 * 
 * Given a string, return an object containing the frequency of each character in the string.
 * The frequency count should be case-sensitive.
 * 
 * Example 1:
 * Input: "hello"
 * Output: { h: 1, e: 1, l: 2, o: 1 }
 * 
 * Example 2:
 * Input: "Aab"
 * Output: { A: 1, a: 1, b: 1 }
 * 
 * Example 3:
 * Input: "112"
 * Output: { '1': 2, '2': 1 }
 */

function charFrequency(str) {

    const result = {}

    for (let i = 0; i < str.length; i++) {

        let char = str[i]

        if (!result.hasOwnProperty(str[i])) {
            result[char] = 0
        }

        result[char]++

    }

    return result

}

console.log(charFrequency("hello"));       // Expected: { h: 1, e: 1, l: 2, o: 1 }
console.log(charFrequency("Aab"));         // Expected: { A: 1, a: 1, b: 1 }
console.log(charFrequency("112"));         // Expected: { '1': 2, '2': 1 }
