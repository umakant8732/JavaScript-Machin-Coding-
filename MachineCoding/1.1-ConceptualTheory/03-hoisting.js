/**
 * Problem 3: Hoisting with Output Questions
 * 
 * Predict the outputs and write explanations for each question to understand 
 * how the JavaScript engine hoists variable declarations (var vs let/const) and function declarations.
 */

// Question 1: Variable hoisting with var vs let
(function() {
    // Predict output:
    console.log(a);
    // console.log(b); // What happens if we uncomment this?
    
    var a = 10;
    let b = 20;
})();

// Question 2: Function declaration vs Function expression hoisting
(function() {
    // Predict output:
    // greetNormal();
    // greetExpression();

    function greetNormal() {
        console.log("Hello Normal!");
    }

    var greetExpression = function() {
        console.log("Hello Expression!");
    };
})();

// Question 3: Nested hoisting priority
var x = 1;
function outer() {
    // Predict output of x here:
    console.log(x);
    var x = 2;
}
outer();
