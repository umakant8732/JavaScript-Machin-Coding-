/**
 * RULE #3: STRING TO NUMBER CONVERSION
 * 
 * "Under double-equality (==), when comparing a String and a Number, 
 * JavaScript converts the String to a Number first, and then compares them."
 * 
 * Key Conversions:
 * - "5" -> 5
 * - "  5  " -> 5
 * - "" -> 0
 * - "  " -> 0
 * - "abc" -> NaN
 */

console.log('--- String to Number Questions ---');

console.log("5" == 5);       // 5 == 5 -> true
console.log("   5   " == 5); // 5 == 5 -> true (trimmed whitespace converts to 5)
console.log("" == 0);        // 0 == 0 -> true (empty string converts to 0)
console.log("   " == 0);     // 0 == 0 -> true (whitespace-only string converts to 0)
console.log("abc" == 0);     // NaN == 0 -> false (non-numeric string converts to NaN)
console.log("0" == 0);       // 0 == 0 -> true
