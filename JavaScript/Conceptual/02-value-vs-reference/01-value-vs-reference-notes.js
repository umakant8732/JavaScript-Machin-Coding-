// ==========================================
// VALUE VS REFERENCE TYPES IN JAVASCRIPT
// ==========================================

// 1. Primitive Types (Passed/Copied by Value)
// Primitives: Number, String, Boolean, null, undefined, Symbol, BigInt.
// Stored directly in the Call Stack. Copying creates a new independent value.

let a = 10;
let b = a; // Value 10 is copied to a new memory slot for b
b = 20;

console.log("a:", a); // 10 (remains unaffected)
console.log("b:", b); // 20


// 2. Reference Types (Passed/Copied by Reference)
// Non-primitives: Objects, Arrays, Functions.
// Stored in the Memory Heap. Stack only holds a pointer (address) to the heap memory.
// Copying copies the address, so both variables point to the same object.

let x = { value: 1 };
let y = x; // Address is copied. Both x and y point to the same heap object.
y.value = 2; // Mutating the object via y

console.log("x.value:", x.value); // 2 (changed!)
console.log("y.value:", y.value); // 2


// 3. Mutation vs Reassignment
// Mutation changes the data inside the existing object.
// Reassignment assigns a completely new object, breaking the reference link.

let obj1 = { name: "Aman" };
let obj2 = obj1; // Both point to the same object in Heap

obj2.name = "Rahul"; // Mutation: changes the object. Both obj1 and obj2 are now "Rahul".
obj2 = { name: "Suresh" }; // Reassignment: obj2 points to a new memory block. obj1 remains "Rahul".

console.log("obj1.name:", obj1.name); // "Rahul"
console.log("obj2.name:", obj2.name); // "Suresh"


// 4. Function Arguments (Pass by Value vs Pass by Reference)
// JavaScript is always Pass by Value. But for objects, the "value" passed is the memory pointer.

// Example A: Passing Primitive (No outer change)
function updatePrimitive(val) {
  val = 99;
}
let num = 50;
updatePrimitive(num);
console.log("num:", num); // 50 (Unchanged)

// Example B: Mutating Object (Changes the outer object)
function mutateObject(obj) {
  obj.score = 100;
}
let player = { score: 50 };
mutateObject(player);
console.log("player.score:", player.score); // 100 (Changed)

// Example C: Reassigning Object Parameter (No outer change)
function reassignObject(obj) {
  obj = { score: 999 }; // Local obj points to a new address. Outer reference is broken.
}
let user = { score: 50 };
reassignObject(user);
console.log("user.score:", user.score); // 50 (Unchanged)


// 5. Engine Secret (Stack vs Heap Optimization in V8)
// Under the hood, V8 optimizes primitive storage:
// - Small Integers (Smi): Stored directly in the Stack.
// - Decimals & Large Numbers: Stored in the Heap (as HeapNumber). Stack holds a pointer.
// - Strings: Stored in the Heap (String Pool). Stack holds a pointer.
// - Why they behave as By Value: Primitives are Immutable (cannot be changed in-place).
//   Any change forces the engine to assign a new address, making it behave like a copy by value.
