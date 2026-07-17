
function calculate(a, b, operation){
    const result = operation(a,b)
    console.log(result);
}

function add (a,b) {
    return a + b
} 

function subtract (a,b){
    return a -b
}

function multiply (a,b) {
   return a * b
}

function divide (a , b) {
    return a / b
}

calculate(70, 50 , add)

