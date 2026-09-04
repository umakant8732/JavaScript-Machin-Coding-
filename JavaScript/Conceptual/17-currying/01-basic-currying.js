/**
 * Step 1: Basic Currying
 * 
 * Definition:
 * Currying is a technique of converting a function with multiple arguments (e.g. fn(a, b, c))
 * into a sequence of nesting functions that each take a single argument (e.g. fn(a)(b)(c)).
 * 
 * Core Concept:
 * It relies on CLOSURES to retain access to outer function arguments across calls.
 */

// ==========================================
// 1. NORMAL VS CURRIED FUNCTION COMPARISON
// ==========================================

// Normal Function: Takes all arguments at once
function addNormal(a, b) {
    return a + b;
}

// Curried Function: Takes arguments one at a time using Closures
function addCurried(a) {
    return function(b) {
        return a + b; // Remembers 'a' via Closure
    };
}

console.log("1. Normal Add Output:", addNormal(5, 6));   // Output: 11
console.log("1. Curried Add Output:", addCurried(5)(6)); // Output: 11


// ==========================================
// 2. REAL-WORLD USE CASE: PARTIAL APPLICATION
// ==========================================
// Fixing a common configuration argument (e.g., discount rate or log level)

function calculateDiscount(discountRate) {
    return function(price) {
        return price - (price * discountRate);
    };
}

// Pre-configuring a 10% discount helper function
const tenPercentOff = calculateDiscount(0.10);

console.log("2. 10% off on $1000:", tenPercentOff(1000)); // Output: 900
console.log("2. 10% off on $500:", tenPercentOff(500));   // Output: 450


// ==========================================
// 3. ES6 ARROW FUNCTION CURRYING SHORTHAND
// ==========================================
// Shorthand syntax for multi-level curried functions

const multiplyCurried = (a) => (b) => (c) => a * b * c;

console.log("3. ES6 Arrow Curried Multiply (2)(3)(4):", multiplyCurried(2)(3)(4)); // Output: 24
