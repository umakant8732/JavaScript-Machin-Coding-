/**
 * Problem 7: Capitalize First Letter of Each Word
 * 
 * Given a string, return a new string where the first letter of each word is capitalized.
 * Words are separated by a single space.
 * 
 * Example 1:
 * Input: "hello world"
 * Output: "Hello World"
 * 
 * Example 2:
 * Input: "javascript is awesome"
 * Output: "Javascript Is Awesome"
 * 
 * Example 3:
 * Input: "a"
 * Output: "A"
 */

function capitalizeWords(str) {
    const newString = []

    for(let i = 0; i < str.length; i++) {
        if(i === 0 || str[i-1] === " "){
            newString[i] = str[i].toUpperCase();
        } else {
            newString[i] = str[i];
        }
    }

    return newString.join("");
}

console.log(capitalizeWords("hello world"));           // Expected: "Hello World"
console.log(capitalizeWords("javascript is awesome")); // Expected: "Javascript Is Awesome"
console.log(capitalizeWords("a"));                     // Expected: "A"
