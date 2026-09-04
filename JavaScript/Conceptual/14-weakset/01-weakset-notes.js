/**
 * JAVASCRIPT WEAKSET THEORY NOTES
 * 
 * 1. What is a WeakSet?
 * - WeakSet is an ES6 collection of UNIQUE Objects held as weak references.
 * 
 * 2. Key Characteristics:
 * - Object-Only Elements: Items MUST be Objects (Primitives throw TypeError).
 * - Weak References: Objects in WeakSet are held weakly and can be Garbage Collected.
 * 
 * 3. Limitations (Due to GC):
 * - NOT Iterable: Cannot iterate over WeakSet items.
 * - NO .size property.
 * - ONLY 3 Methods: .add(), .has(), .delete()
 */
