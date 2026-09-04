/**
 * ARRAY MUTATING METHODS (Modifies the original array in-place)
 * 
 * Methods & Descriptions:
 * - push(...items)        -> Adds items to the end of array. Returns new length.
 * - pop()                 -> Removes last item. Returns removed item.
 * - unshift(...items)     -> Adds items to the beginning. Returns new length.
 * - shift()               -> Removes first item. Returns removed item.
 * - splice(start, count)  -> Adds/removes items at any index position.
 * - reverse()             -> Reverses array elements in-place.
 * - sort(compareFn)       -> Sorts array elements in-place.
 * - fill(val, start, end) -> Fills elements with a static value.
 */

const fruits = ["Apple", "Banana"];

// 1. push() - Adds item(s) to the end (Returns new array length)
const newLengthPush = fruits.push("Cherry", "Date");
console.log("1. push():", fruits);             // ["Apple", "Banana", "Cherry", "Date"]
console.log("   New Length:", newLengthPush); // 4

// 2. pop() - Removes the last item (Returns removed item)
const poppedItem = fruits.pop();
console.log("2. pop():", fruits);               // ["Apple", "Banana", "Cherry"]
console.log("   Popped Item:", poppedItem);     // "Date"

// 3. unshift() - Adds item(s) to the beginning (Returns new array length)
const newLengthUnshift = fruits.unshift("Mango");
console.log("3. unshift():", fruits);           // ["Mango", "Apple", "Banana", "Cherry"]

// 4. shift() - Removes the first item (Returns removed item)
const shiftItem = fruits.shift();
console.log("4. shift():", fruits);             // ["Apple", "Banana", "Cherry"]

// 5. splice(startIndex, deleteCount, ...items) - Multi-purpose Array Modifier
// Case A: INSERT ONLY (deleteCount = 0)
fruits.splice(1, 0, "Kiwi"); // Inserts "Kiwi" at index 1 without deleting items
console.log("5A. splice (Insert):", fruits);     // ["Apple", "Kiwi", "Banana", "Cherry"]

// Case B: DELETE ONLY (No items added)
const deletedItems = fruits.splice(2, 1); // Deletes 1 item starting from index 2 ("Banana")
console.log("5B. splice (Delete):", fruits);     // ["Apple", "Kiwi", "Cherry"]
console.log("    Deleted Array:", deletedItems); // ["Banana"]

// Case C: REPLACE (Delete + Insert together)
fruits.splice(0, 1, "Mango"); // Replaces 1 item at index 0 ("Apple") with "Mango"
console.log("5C. splice (Replace):", fruits);    // ["Mango", "Kiwi", "Cherry"]

// 6. reverse() - Reverses array elements in-place
fruits.reverse();
console.log("6. reverse():", fruits);           // ["Cherry", "Kiwi", "Mango"]

// 7. sort() - Sorts array elements alphabetically in-place
fruits.sort();
console.log("7. sort():", fruits);              // ["Cherry", "Kiwi", "Mango"]

// 8. fill(value, start, end) - Fills elements with a static value
const arr = [1, 2, 3, 4];
arr.fill(0, 1, 3); // Fills 0 from index 1 up to index 3 (exclusive)
console.log("8. fill():", arr);                 // [1, 0, 0, 4]






