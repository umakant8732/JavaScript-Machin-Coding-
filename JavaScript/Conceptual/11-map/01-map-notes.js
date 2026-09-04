/**
 * JAVASCRIPT MAP THEORY NOTES
 * 
 * 1. What is a Map?
 * - Map is an ES6 built-in data structure used to store key-value pairs.
 * - Designed to solve limitations of plain objects when using complex keys.
 * 
 * 2. Key Characteristics:
 * - Any Data Type as Key: Keys can be Objects, Functions, Numbers, Booleans, or Primitives.
 * - Insertion Order: Guarantees exact insertion order when iterating over entries.
 * - Size Property: Has a direct .size property with O(1) performance lookup.
 * - Iterable: Directly iterable using for...of or .forEach().
 * 
 * 3. Primary Map Methods:
 * - map.set(key, value)   -> Adds/updates entry (supports method chaining).
 * - map.get(key)          -> Returns value associated with key, or undefined.
 * - map.has(key)          -> Returns boolean indicating if key exists.
 * - map.delete(key)       -> Removes key-value pair.
 * - map.clear()           -> Clears all entries from the Map.
 */
