/**
 * COMMON METHODS SHARED BY BOTH ARRAYS AND STRINGS
 * 
 * Both Array.prototype and String.prototype natively support these methods/properties!
 * 
 * METHOD DETAILS:
 * 1. .length Property
 *    - Action: Measures total count of elements/characters.
 *    - Arguments: None (Property access).
 *    - Returns: Non-negative Integer count.
 * 
 * 2. indexOf(searchItem, fromIndex)
 *    - Action: Finds the first occurrence of an item/substring.
 *    - Arguments: searchItem (Value/String), fromIndex (Number - optional start position).
 *    - Returns: Index Number if found, or -1 if not found.
 * 
 * 3. lastIndexOf(searchItem, fromIndex)
 *    - Action: Finds the last occurrence searching backwards from the end.
 *    - Arguments: searchItem (Value/String), fromIndex (Number - optional).
 *    - Returns: Index Number if found, or -1 if not found.
 * 
 * 4. includes(searchItem, fromIndex)
 *    - Action: Checks if item/substring exists anywhere in array/string.
 *    - Arguments: searchItem (Value/String), fromIndex (Number - optional).
 *    - Returns: Boolean (true if found, false otherwise).
 * 
 * 5. slice(startIndex, endIndex)
 *    - Action: Extracts a portion of array/string without modifying original.
 *    - Arguments: startIndex (Number - inclusive), endIndex (Number - exclusive).
 *    - Returns: A new Array or String containing extracted section.
 * 
 * 6. concat(...itemsOrStrings)
 *    - Action: Merges arrays/strings together.
 *    - Arguments: One or more Arrays/Strings.
 *    - Returns: A new merged Array or String.
 * 
 * 7. at(index)
 *    - Action: ES2022 Relative indexing supporting negative numbers (counts from end).
 *    - Arguments: index (Number - e.g. -1 for last element).
 *    - Returns: Element at specified index, or undefined.
 */

const sampleArray = ["H", "e", "l", "l", "o"];
const sampleString = "Hello";

// 1. length Property (Shared Property)
console.log("1. Array length:", sampleArray.length);   // 5
console.log("   String length:", sampleString.length); // 5

// 2. indexOf(item/substr)
console.log("2. Array indexOf('l'):", sampleArray.indexOf("l"));   // 2
console.log("   String indexOf('l'):", sampleString.indexOf("l")); // 2

// 3. lastIndexOf(item/substr)
console.log("3. Array lastIndexOf('l'):", sampleArray.lastIndexOf("l"));   // 3
console.log("   String lastIndexOf('l'):", sampleString.lastIndexOf("l")); // 3

// 4. includes(item/substr)
console.log("4. Array includes('e'):", sampleArray.includes("e"));   // true
console.log("   String includes('e'):", sampleString.includes("e")); // true

// 5. slice(start, end)
console.log("5. Array slice(1, 4):", sampleArray.slice(1, 4));   // ['e', 'l', 'l']
console.log("   String slice(1, 4):", sampleString.slice(1, 4)); // "ell"

// 6. concat(...items/strings)
console.log("6. Array concat():", sampleArray.concat(["!"]));   // ['H', 'e', 'l', 'l', 'o', '!']
console.log("   String concat():", sampleString.concat("!"));   // "Hello!"

// 7. at(index) - ES2022 Relative Indexing
console.log("7. Array at(-1):", sampleArray.at(-1));   // "o"
console.log("   String at(-1):", sampleString.at(-1)); // "o"
