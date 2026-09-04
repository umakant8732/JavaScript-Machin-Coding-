/**
 * RULE #5: STRICT EQUALITY (===) & OBJECT.IS()
 * 
 * "Strict equality (===) compares both type and value with no coercion. 
 * But it has two famous traps: NaN === NaN is false, and -0 === +0 is true.
 * Object.is() is a modern ES6 feature that solves these traps: 
 * Object.is(NaN, NaN) is true, and Object.is(-0, +0) is false."
 */

console.log('--- Strict Equality & Object.is Questions ---');

console.log(NaN === NaN);           // false (IEEE 754 spec: NaN is never equal to anything, including itself)
console.log(Object.is(NaN, NaN));   // true (Object.is fixes the NaN trap and considers NaN equal to NaN)
console.log(-0 === +0);             // true (strict equality treats negative zero and positive zero as equal)
console.log(Object.is(-0, +0));     // false (Object.is distinguishes signed zeros: -0 is not equal to +0)
console.log([] === []);             // false (different memory references for newly created arrays)
console.log(Object.is([], []));     // false (different memory references for newly created arrays)
