// Reverse String
//- Pattern: Two Pointers / In-place swap


//eg : input "hello" , output "olleh"

//brute force way

function reverseStringBruteForce(str) {

    let newString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i]
    }

    return newString
}

console.log(reverseStringBruteForce("umakant"));

//--------------------------------------------------------

//optimise way to make a string reverse

function reverseStringOptimisely(str) {

    let arr = str.split('')

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left++
        right--
    }

    return arr.join("")
}

console.log(reverseStringOptimisely("umakant"));