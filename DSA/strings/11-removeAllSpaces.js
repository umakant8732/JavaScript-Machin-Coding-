/**
 * Problem 11: Remove All Spaces from a String
 * 
 * Given a string, return a new string with all whitespace characters removed.
 * 
 * Example 1:
 * Input: "hello world"
 * Output: "helloworld"
 * 
 * Example 2:
 * Input: "  j a v a   s c r i p t  "
 * Output: "javascript"
 * 
 * Example 3:
 * Input: "a b c"
 * Output: "abc"
 */

function removeAllSpaces(str) {

    let newString = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            newString.push(str[i])
        }
    }

return newString.join("")

}


console.log(removeAllSpaces("hello world      bhai"));             // Expected: "helloworld"
console.log(removeAllSpaces("  j a v a   s c r i p t  ")); // Expected: "javascript"
console.log(removeAllSpaces("a b c"));                     // Expected: "abc"
