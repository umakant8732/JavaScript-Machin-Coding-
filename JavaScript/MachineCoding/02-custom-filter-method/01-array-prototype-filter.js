

Array.prototype.myCustomFilter =  function (callback) {
    const result = []

    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            result.push(this[i])
        }

    }
    return result
}


const array = [1,2,3,4,5,6,7,8,9,10]
function evenNumbers(num) {
    return num % 2 === 0
}
const result = array.myCustomFilter(evenNumbers)
console.log(result)