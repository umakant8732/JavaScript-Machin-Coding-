// ==========================================
// 3. WEAKSET
// ==========================================
// - Stores only UNIQUE values, but ONLY OBJECTS (no primitive strings/numbers allowed).
// - Values are weakly referenced.
// - Allows Garbage Collection (Prevents memory leaks).
// - Cannot be looped over (No forEach, no .size property).

const myWeakSet = new WeakSet();

let user1 = { name: "Aman" };
let user2 = { name: "Rahul" };

myWeakSet.add(user1);
myWeakSet.add(user2);

// Fast searching
console.log("Has user1?", myWeakSet.has(user1)); // true

// This will throw an Error:
// myWeakSet.add("String"); // TypeError: Invalid value used in weak set

// Memory Behavior (The real magic)
user1 = null; // We deleted user1 from our app

// Now, the Garbage Collector will see that `user1` is not used anywhere else except WeakSet.
// It will automatically DELETE `user1` from `myWeakSet` to free up memory!
// Because we don't know exactly WHEN the garbage collector runs, 
// JavaScript does not allow us to check the `.size` or loop through a WeakSet.

// Real-world Use Case:
// Keeping track of which DOM elements have been clicked/visited without causing memory leaks 
// when those DOM elements are removed from the screen.
