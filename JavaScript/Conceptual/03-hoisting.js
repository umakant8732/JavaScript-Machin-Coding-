/**
 * Problem 3: Hoisting with Output Questions
 * 
 * Predict the outputs and write explanations for each question to understand 
 * how the JavaScript engine hoists variable declarations (var vs let/const) and function declarations.
 */

// Question 1: Variable hoisting with var vs let
// TODO: Explain what happens when you try to access 'a' and 'b' before they are declared in the code block.
// Write predictions and code exercises here...

//  (function() {
//     console.log('value of a:', a);
//     console.log('value of b:', b);

//     var a = 10;
//     let b = 20
//  })()


// Question 2: Function declaration vs Function expression hoisting
// TODO: Explain what happens when you try to call 'greetNormal()' and 'greetExpression()' before their definitions.
// Write predictions and code exercises here...

console.log("-----------------------------------------");


// greetNormal()
// greetExpression()


//function declaration (normal function)
// function greetNormal() {
//    console.log("Hello from Normal Function");
// }

//function expression
// var greetExpression = function () {
//    console.log("Hello from Expression Function");
// }





// Question 3: Nested hoisting priority
// TODO: Predict outer function scope variable lookup and write explanations here.
// Write predictions and code exercises here...

// Question 3: Scope Lookup
var x = 100;

function testScope() {
    console.log("Value of x inside before declaration:", x);

    var x = 50;

    console.log("Value of x inside after declaration:", x);
}

testScope();
console.log("Value of x outside:", x);
