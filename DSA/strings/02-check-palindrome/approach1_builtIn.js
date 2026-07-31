/**
 * Approach 1: Built-in Methods
 * Reverse string and compare with original.
 */

function isPalindrome(str) {

     let reversedString = str.split("").reverse().join("")
    
     if(str !== reversedString){
        return false
     }

     return true
    
}

console.log(isPalindrome("madam"));   // Expected: true
console.log(isPalindrome("hello"));   // Expected: false
console.log(isPalindrome("racecar")); // Expected: true
