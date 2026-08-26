/**
 * Conceptual Q4: null vs undefined
 * Folder: 17-null-vs-undefined
 *
 * Tasks:
 * 1. undefined = ?   |   null = ?
 * 2. When does JS automatically return undefined? When do you explicitly set null?
 * 3. Optional chaining ?. — write a scenario (user?.address?.city)
 * 4. Predict: typeof null, typeof undefined (classic trap)
 * 5. Write an interview one-liner.
 *
 * Write your notes / tiny demo below when ready...
 */

// ==========================================
// 1. Core Definitions
// ==========================================
// undefined: Variable is declared but NOT yet initialized (System-driven default).
// null: Explicitly set by developers to represent "intentional emptiness" (Developer-driven).
let declaredVar;
console.log(declaredVar); // Output: undefined

let emptyVar = null;
console.log(emptyVar); // Output: null

// ==========================================
// 2. Typeof (The Historical Bug)
// ==========================================
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null);      // Output: "object" (Bug in JS binary representation)

// ==========================================
// 3. Mathematical Operations
// ==========================================
console.log(undefined + 10); // Output: NaN (Number(undefined) -> NaN)
console.log(null + 10);      // Output: 10  (Number(null) -> 0)

// ==========================================
// 4. Default Parameters Behavior
// ==========================================
function greet(name = "Guest") {
    console.log(name);
}
greet(undefined); // Output: "Guest" (undefined triggers fallback)
greet(null);      // Output: null (null represents an active choice, no fallback)

// ==========================================
// 5. Checking Existence: "in" vs "=== undefined"
// ==========================================
const obj = {
    a: null,
    b: undefined
};
console.log("b" in obj); // Output: true (key exists physically)
console.log(obj.b !== undefined); // Output: false (evaluates value, misleading result)

// ==========================================
// 6. Optional Chaining ?. & Nullish Coalescing ??
// ==========================================
const user = {
    name: "John",
    address: null // explicitly set to null
};
// Optional chaining prevents throwing TypeError when key is null/undefined
console.log(user.address?.city); // Output: undefined (no crash!)

// Nullish Coalescing (??) only falls back for null/undefined, keeping 0 and "" safe.
let cartCount = 0;
console.log(cartCount ?? "Empty"); // Output: 0 (safe!)
console.log(cartCount || "Empty"); // Output: "Empty" (bug!)
