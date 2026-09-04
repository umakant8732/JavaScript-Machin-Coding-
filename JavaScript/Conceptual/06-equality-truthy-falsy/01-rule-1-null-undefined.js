/**
 * RULE #1: THE NULL & UNDEFINED ISOLATION BUBBLE
 * 
 * "Under double-equality (==), null and undefined form an isolated bubble. 
 * They are strictly equal only to each other or to themselves. 
 * They DO NOT undergo any numeric or string type coercion with any other value in JavaScript."
 */

console.log('--- Rule 1 Questions ---');

// A. Comparing with themselves & each other (Special specification rule: null == undefined)
console.log(null == null);             // true (no coercion, equal to itself)
console.log(undefined == undefined);   // true (no coercion, equal to itself)
console.log(null == undefined);        // true (spec rule: null and undefined are equal)
console.log(undefined == null);        // true (spec rule: null and undefined are equal)

// B. Comparing with Numbers (null and undefined never coerce to numbers)
console.log(null == 0);                // false (bubble rule: only equal to null/undefined)
console.log(undefined == 0);           // false (bubble rule: only equal to null/undefined)
console.log(null == 1);                // false
console.log(undefined == 1);           // false
console.log(null == NaN);              // false
console.log(undefined == NaN);         // false

// C. Comparing with Booleans (null and undefined never coerce to numbers)
console.log(null == true);             // false
console.log(undefined == true);        // false
console.log(null == false);            // false
console.log(undefined == false);       // false

// D. Comparing with Strings (null and undefined never coerce to strings)
console.log(null == "");               // false
console.log(undefined == "");          // false
console.log(null == "null");           // false
console.log(undefined == "undefined");  // false

// E. Comparing with Objects & Arrays (null and undefined never coerce)
console.log(null == []);               // false
console.log(undefined == []);          // false
console.log(null == {});               // false
console.log(undefined == {});          // false
