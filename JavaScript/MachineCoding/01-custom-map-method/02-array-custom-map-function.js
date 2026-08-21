
function myCustomMap(array, callback) {

    const result = []

    for(let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array))
    }

    return result

}


const array = [1,2,3,4,5]

function double (num) {
    return num * 2
}

console.log(myCustomMap(array, double))
