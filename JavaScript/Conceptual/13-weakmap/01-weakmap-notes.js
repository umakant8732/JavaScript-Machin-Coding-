/**
 * JAVASCRIPT WEAKMAP THEORY NOTES
 * 
 * 1. What is a WeakMap?
 * - WeakMap is an ES6 data structure designed for Garbage Collection-friendly key-value storage.
 * 
 * 2. Key Characteristics:
 * - Object-Only Keys: Keys MUST be Objects (Primitives throw TypeError).
 * - Weak References: Keys are held weakly. If an object key has no other references, 
 *   it is automatically Garbage Collected from RAM.
 * - Zero Memory Leaks: Ideal for attaching metadata to objects without preventing GC.
 * 
 * 3. Limitations (Due to GC):
 * - NOT Iterable: No for...of or forEach loop allowed.
 * - NO .size property (returns undefined).
 * - NO .keys(), .values(), .entries(), or .clear() methods.
 * - ONLY 4 Methods: .set(), .get(), .has(), .delete()
 */
