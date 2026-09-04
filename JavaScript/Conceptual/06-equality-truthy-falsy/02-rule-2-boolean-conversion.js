/**
 * RULE #2: BOOLEAN CONVERSION TO NUMBER
 * 
 * "Under double-equality (==), if any of the operands is a Boolean (true/false), 
 * JavaScript converts the Boolean to a Number first (true -> 1, false -> 0), 
 * and then continues comparing."
 */

console.log('--- Boolean Conversion Questions ---');

console.log(true == 1);       // 1 == 1 -> true
console.log(false == 0);      // 0 == 0 -> true
console.log(true == "1");     // 1 == "1" -> 1 == 1 -> true
console.log(false == "0");    // 0 == "0" -> 0 == 0 -> true
console.log(true == "true");  // 1 == "true" -> 1 == NaN -> false
console.log(false == "false"); // 0 == "false" -> 0 == NaN -> false
console.log(true == []);      // 1 == [] -> 1 == "" -> 1 == 0 -> false
console.log(false == []);     // 0 == [] -> 0 == "" -> 0 == 0 -> true
console.log(true == {});      // 1 == {} -> 1 == "[object Object]" -> 1 == NaN -> false
console.log(false == {});     // 0 == {} -> 0 == "[object Object]" -> 0 == NaN -> false
