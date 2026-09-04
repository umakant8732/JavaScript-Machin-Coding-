/**
 * JAVASCRIPT STRING-ONLY METHODS
 * 
 * NOTE: Strings in JavaScript are IMMUTABLE. 
 * None of these methods modify the original string; they all return a NEW string/value.
 * 
 * METHOD DETAILS:
 * 1. toUpperCase()
 *    - Action: Converts all characters in string to uppercase.
 *    - Arguments: None.
 *    - Returns: A new uppercase String.
 * 
 * 2. toLowerCase()
 *    - Action: Converts all characters in string to lowercase.
 *    - Arguments: None.
 *    - Returns: A new lowercase String.
 * 
 * 3. trim()
 *    - Action: Removes whitespace from BOTH ends (start & end) of a string.
 *    - Arguments: None.
 *    - Returns: A new trimmed String.
 * 
 * 4. trimStart() / trimEnd()
 *    - Action: Removes whitespace from ONLY the start or ONLY the end of a string.
 *    - Arguments: None.
 *    - Returns: A new trimmed String.
 * 
 * 5. split(separator, limit)
 *    - Action: Splits a string into an array of substrings based on a separator pattern.
 *    - Arguments: separator (String/RegExp), limit (Number - optional max items).
 *    - Returns: A new Array of string elements.
 * 
 * 6. replace(pattern, replacement)
 *    - Action: Replaces the FIRST match of a pattern/substring with a new substring.
 *    - Arguments: pattern (String/RegExp), replacement (String/Function).
 *    - Returns: A new String with first match replaced.
 * 
 * 7. replaceAll(pattern, replacement)
 *    - Action: Replaces ALL matches of a pattern/substring with a new substring.
 *    - Arguments: pattern (String/RegExp), replacement (String/Function).
 *    - Returns: A new String with all matches replaced.
 * 
 * 8. charAt(index)
 *    - Action: Returns the character at a specified 0-based index.
 *    - Arguments: index (Number - defaults to 0).
 *    - Returns: A single character String (or empty string if index out of bounds).
 * 
 * 9. charCodeAt(index)
 *    - Action: Returns the UTF-16 / ASCII code integer of character at index.
 *    - Arguments: index (Number - defaults to 0).
 *    - Returns: An Integer (e.g. 65 for 'A', NaN if out of bounds).
 * 
 * 10. padStart(targetLength, padString) / padEnd(targetLength, padString)
 *     - Action: Pads current string from start/end until targetLength is reached.
 *     - Arguments: targetLength (Number), padString (String - defaults to " ").
 *     - Returns: A new padded String of targetLength.
 * 
 * 11. repeat(count)
 *     - Action: Copies and concatenates the string count times.
 *     - Arguments: count (Number - non-negative integer).
 *     - Returns: A new repeated String.
 */

const str = "  Hello JavaScript World!  ";

// 1. Case Conversion
console.log("1. toUpperCase():", str.toUpperCase()); // "  HELLO JAVASCRIPT WORLD!  "
console.log("   toLowerCase():", str.toLowerCase()); // "  hello javascript world!  "

// 2. Trimming Whitespace
console.log("2. trim():", str.trim());               // "Hello JavaScript World!"
console.log("   trimStart():", str.trimStart());     // "Hello JavaScript World!  "
console.log("   trimEnd():", str.trimEnd());         // "  Hello JavaScript World!"

// 3. String Splitting (String -> Array)
console.log("3. split(' '):", str.trim().split(" ")); // ["Hello", "JavaScript", "World!"]

// 4. Replacing Substrings
console.log("4. replace():", str.replace("World", "Developer")); // "  Hello JavaScript Developer!  "
console.log("   replaceAll():", "cat cat".replaceAll("cat", "dog")); // "dog dog"

// 5. Character Access
console.log("5. charAt(0):", str.trim().charAt(0));   // "H"
console.log("   charCodeAt(0):", "A".charCodeAt(0));  // 65 (ASCII code)

// 6. Padding & Repeating
console.log("6. padStart(10, '*'):", "5".padStart(10, "*")); // "*********5"
console.log("   padEnd(10, '*'):", "5".padEnd(10, "*"));   // "5*********"
console.log("   repeat(3):", "abc".repeat(3));              // "abcabcabc"
