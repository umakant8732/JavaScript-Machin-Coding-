/**
 * JAVASCRIPT ARRAYS THEORY NOTES
 * 
 * 1. What is an Array?
 * - An Array is an ordered collection of values indexed numerically starting at 0.
 * - Stored in Heap Memory as an object subclass inheriting from Array.prototype.
 * 
 * 2. Key Characteristics:
 * - Dynamic Sizing: Expands or shrinks automatically.
 * - Heterogeneous: Can hold elements of different data types (Numbers, Strings, Objects, Functions).
 * - Length Property: .length returns total count of elements.
 * 
 * 3. Categorization of All Important Array Methods:
 * 
 * A. MUTATING METHODS (Modifies original array in-place):
 * - push(...items)        -> Adds items to the end.
 * - pop()                 -> Removes last item.
 * - unshift(...items)     -> Adds items to the beginning.
 * - shift()               -> Removes first item.
 * - splice(start, count)  -> Adds/removes items at any index position.
 * - reverse()             -> Reverses array elements in-place.
 * - sort(compareFn)       -> Sorts array elements in-place.
 * - fill(val, start, end) -> Fills elements with a static value.
 * 
 * B. NON-MUTATING METHODS (Returns a new array/value, original array stays untouched):
 * - concat(...arrays)     -> Merges arrays into a new array.
 * - slice(start, end)     -> Extracts a section into a new array.
 * - flat(depth)           -> Flattens nested sub-arrays.
 * - flatMap(callback)     -> Maps each element then flattens 1 level.
 * - toSorted(), toReversed(), toSpliced() -> Modern ES2023 non-mutating copy versions.
 * 
 * C. SEARCHING & TESTING METHODS:
 * - indexOf(item)         -> Returns first index of item, or -1.
 * - lastIndexOf(item)     -> Returns last index of item, or -1.
 * - includes(item)        -> Returns true if item exists, else false.
 * - find(callback)        -> Returns value of first matching element.
 * - findIndex(callback)   -> Returns index of first matching element.
 * - some(callback)        -> Returns true if AT LEAST ONE element matches.
 * - every(callback)       -> Returns true if ALL elements match.
 * 
 * D. ITERATION & TRANSFORMATION METHODS:
 * - forEach(callback)     -> Runs callback for each element (returns undefined).
 * - map(callback)         -> Transforms elements and returns a NEW array.
 * - filter(callback)      -> Filters matching elements into a NEW array.
 * - reduce(cb, initial)   -> Accumulates array elements into a single value.
 * - join(separator)       -> Converts array elements into a separated string.
 * - Array.isArray(val)    -> Static method checking if value is an Array.
 * - Array.from(iterable)  -> Static method creating array from array-like/iterables.
 */

// We will test each category practically step-by-step below!
