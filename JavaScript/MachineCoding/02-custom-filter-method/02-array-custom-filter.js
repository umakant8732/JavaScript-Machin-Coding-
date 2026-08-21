

function myCustomFilter(array, callback) {
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i])
        }
    }

    return result
}

const array = [1, 2, 3, 4, 5, 6]

function evenNumbers(num) {
   return num % 2 === 0
}


console.log(myCustomFilter(array, evenNumbers))