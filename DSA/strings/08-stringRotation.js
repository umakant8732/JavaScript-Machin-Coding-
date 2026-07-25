/**
 * Problem 8: String Rotation Check
 * 
 * Given two strings A and B, check if B is a rotation of A.
 * A rotation of a string is obtained by shifting characters to the left or right,
 * wrapping around to the other side.
 * 
 * Example 1:
 * Input: A = "waterbottle", B = "erbottlewat"
 * Output: true
 * 
 * Example 2:
 * Input: A = "hello", B = "olleh"
 * Output: false
 * 
 * Example 3:
 * Input: A = "abc", B = "cab"
 * Output: true
 */

function isRotation(a, b) {

    let startIndexes = []

    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[0]) {
            startIndexes.push(i)
        }
    }

    //looping over startIndexes array 

    for (let j = 0; j < startIndexes.length; j++) {
        let start = startIndexes[j]
        let isMatch = true

        for (let k = 0; k < b.length; k++) {
            let index = (start + k) % a.length

            if (a[index] !== b[k]) {
                isMatch = false
                break
            }
        }

        if(isMatch){
            return true
        }
    }

    return false


    let isMatch = true;




























}

console.log(isRotation("waterbottle", "erbottlewat")); // Expected: true
console.log(isRotation("hello", "olleh"));             // Expected: false
console.log(isRotation("abc", "cab"));                 // Expected: true
