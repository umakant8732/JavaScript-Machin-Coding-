/**
 * Approach 1: Character Iteration
 * Loop and filter out vowels/non-alphabetic characters.
 */

function countConsonants(str) {

    const vowels = 'aeiou'
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            let isVowel = false
            for (let j = 0; j < vowels.length; j++) {
                if (str[i].toLowerCase() === vowels[j].toLowerCase()) {
                    isVowel = true
                    break;
                }
            }
            if (!isVowel) {
                counter++
            }
        }
    }

    return counter


}

console.log(countConsonants("hello world")); // Expected: 7
console.log(countConsonants("javascript"));  // Expected: 7
