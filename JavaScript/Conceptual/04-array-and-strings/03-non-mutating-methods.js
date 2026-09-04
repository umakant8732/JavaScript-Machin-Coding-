/**
 * ARRAY NON-MUTATING METHODS (Returns a new array/value, original array stays untouched)
 * 
 * Methods & Descriptions:
 * - concat(...arrays)     -> Merges arrays into a new array.
 * - slice(start, end)     -> Extracts a section into a new array.
 * - flat(depth)           -> Flattens nested sub-arrays into a new array.
 * - flatMap(callback)     -> Maps each element then flattens result by 1 level.
 * - toSorted()            -> Modern ES2023 non-mutating copy version of sort().
 * - toReversed()          -> Modern ES2023 non-mutating copy version of reverse().
 * - toSpliced()           -> Modern ES2023 non-mutating copy version of splice().
 */

// Write your code and practice questions below:


// --- METHOD 1: concat() ---

const arr1 = [1,2]
const arr2 = [3,4]
const arr3 = [5,6]


//Merging arr1, arr2, arr3 into a new array

const mergedArray = arr1.concat(arr2, arr3)

console.log("1. Merged New Array:", mergedArray);      // Output: [1, 2, 3, 4, 5, 6]
console.log("   Original arr1 (Untouched):", arr1);   // Output: [1, 2]
console.log("   Original arr2 (Untouched):", arr2);   // Output: [3, 4]


// --- METHOD 2: slice(start, end) ---

const numbers = ["A", "B", "C", "D", "E"];

// 1. Basic slice(startIndex, endIndex - Exclusive)
const slicedPart = numbers.slice(1, 4); 
console.log("2. slice(1, 4):", slicedPart);           // Output: ['B', 'C', 'D'] (Index 1, 2, 3 taken, 4 excluded)

// 2. slice(startIndex) - From index to the end
const sliceFromIndex = numbers.slice(2);
console.log("   slice(2):", sliceFromIndex);          // Output: ['C', 'D', 'E']

// 3. Negative Index - Takes last 2 items
const lastTwoItems = numbers.slice(-2);
console.log("   slice(-2):", lastTwoItems);          // Output: ['D', 'E']

// 4. Verification: Original Array is UNTOUCHED
console.log("   Original numbers (Untouched):", numbers); // Output: ['A', 'B', 'C', 'D', 'E']




// --- METHOD 3: flat(depth) & flatMap() ---

const nestedArr = [1, 2, [3, 4, [5, 6]]];

// 1. flat(1) - Flattens 1 level deep (Default)
const flatOneLevel = nestedArr.flat(1);
console.log("3. flat(1):", flatOneLevel);           // Output: [1, 2, 3, 4, [5, 6]]


// 2. flat(Infinity) - Flattens all nesting levels completely!
const flatAllLevels = nestedArr.flat(Infinity)
console.log("   flat(Infinity):", flatAllLevels)   // Output: [1, 2, 3, 4, 5, 6]
 

// 3. flatMap() - Maps each string then flattens 1 level
const words = ["hello world", 'javascript core'];
const splitWords = words.flatMap(str => str.split(" "));
console.log("   flatMap():", splitWords);         // Output: ['hello', 'world', 'javascript', 'core']

// 4. Verification: Original Array is UNTOUCHED
console.log("   Original nestedArr (Untouched):", nestedArr); // Output: [1, 2, [3, 4, [5, 6]]]



// --- METHOD 4: Modern ES2023 Copying Methods (toSorted, toReversed, toSpliced) ---
const originalNums = [3,1,4,2];

//1. toSorted() - Returns a new sorted array (Original untouched)
const sortedNew = originalNums.toSorted()
console.log("4. toSorted():", sortedNew);              // Output: [1, 2, 3, 4]


// 2. toReversed() - Returns a new reversed array (Original untouched)
const reversedNew  = originalNums.toReversed();
console.log("   toReversed():", reversedNew);          // Output: [2, 4, 1, 3]


// 3. toSpliced() - Returns a new spliced array (Original untouched)
const splicedNew = originalNums.toSpliced(1, 2, 99);
console.log("   toSpliced(1, 2, 99):", splicedNew);    // Output: [3, 99, 2]



// 4. Verification: Original Array is UNTOUCHED
console.log("   Original Array (Untouched):", originalNums); // Output: [3, 1, 4, 2]


