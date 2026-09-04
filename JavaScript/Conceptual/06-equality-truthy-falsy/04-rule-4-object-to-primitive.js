/**
 * RULE #4: OBJECT TO PRIMITIVE CONVERSION
 * 
 * "Under double-equality (==), when comparing an Object (Array or Object literal) 
 * with a Primitive value (String, Number, Symbol, BigInt), JavaScript converts 
 * the Object to a Primitive (usually by calling object.toString() first)."
 * 
 * Key Conversions:
 * - [] -> ""
 * - [5] -> "5"
 * - [1, 2] -> "1,2"
 * - {} -> "[object Object]"
 */

console.log('--- Object to Primitive Questions ---');

console.log([] == "");                 // "" == "" -> true (empty array toString() becomes "")
console.log([] == 0);                  // "" == 0 -> 0 == 0 -> true (empty array toString() becomes "", then string to number becomes 0)
console.log([5] == 5);                 // "5" == 5 -> 5 == 5 -> true ([5] toString() becomes "5", then string to number becomes 5)
console.log([1, 2] == "1,2");          // "1,2" == "1,2" -> true ([1,2] toString() becomes "1,2")
console.log([1, 2] == "1, 2");         // "1,2" == "1, 2" -> false (no space in array toString() output)
console.log({} == "[object Object]");  // "[object Object]" == "[object Object]" -> true (plain object toString() becomes "[object Object]")
