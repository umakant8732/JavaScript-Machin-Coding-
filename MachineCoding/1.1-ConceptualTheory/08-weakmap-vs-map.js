/**
 * Problem 8: WeakMap vs Map
 * 
 * Explain using code the key differences between Map and WeakMap.
 * 
 * Map:
 * - Can store any data type as key.
 * - Holds a strong reference to keys (prevents garbage collection).
 * - Iterable (keys/values can be iterated).
 * 
 * WeakMap:
 * - Keys MUST be objects.
 * - Holds a weak reference to keys (objects can be garbage collected if not referenced elsewhere).
 * - Non-iterable.
 */

// 1. Map Demonstration
const regularMap = new Map();
let user1 = { name: "John" };
regularMap.set(user1, "metadata_map");

// 2. WeakMap Demonstration
const weakMap = new WeakMap();
let user2 = { name: "Alice" };
weakMap.set(user2, "metadata_weakmap");

// Remove direct references
user1 = null;
user2 = null;

// Explain what happens in garbage collection memory now...
