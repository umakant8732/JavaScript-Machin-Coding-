/**
 * Approach 1: Character Iteration
 * Loop through string and check if character is in vowel set.
 */

function countVowels(str) {

    const vowelString = 'aeiouAEIOU';
    let count = 0;
    for(let i = 0; i < str.length; i++){
        for(j = 0; j < vowelString.length; j++){
            if(str[i].toLowerCase() === vowelString[j].toLowerCase()){
                count++
                break
            }
        }
    }

    return count

}



function countVowelsUsingBuiltIn (str) {
    const vowelString = 'aeiouAEIOU';
    let count = 0;

    for(let i = 0; i < str.length; i++){
        if(vowelString.toLowerCase().includes(str[i].toLowerCase())){
            count++
        }
    }

    return count

}


console.log(countVowelsUsingBuiltIn("umaknt"));
console.log(countVowels("hello world")); // Expected: 3
console.log(countVowels("javascript"));  // Expected: 3



