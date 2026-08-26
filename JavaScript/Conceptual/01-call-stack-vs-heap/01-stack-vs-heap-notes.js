// ==========================================
// CALL STACK VS MEMORY HEAP IN JAVASCRIPT
// ==========================================

/*
  The JavaScript Engine (like Google Chrome's V8) manages memory in two main areas:
  1. The Call Stack (Fast, Organized, LIFO)
  2. The Memory Heap (Large, Unstructured pool)
*/

// ----------------------------------------------------
// 1. THE CALL STACK (Last In, First Out)
// ----------------------------------------------------
/*
  - The Call Stack is a fast, organized, and limited memory structure.
  - It stores two main things:
    a) Function Execution Context (Tracks which function is currently running).
    b) Primitive Values (String, Number, Boolean, Undefined, Null).
*/

let age = 25;       // Number (Primitive) -> Stored directly in the Stack
let name = "Aman";  // String (Primitive) -> Stored directly in the Stack

// Example of Function Execution in the Stack:
function first() {
  console.log("First function started");
  second(); // Code stops here temporarily and pushes second() to the top of the stack
  console.log("First function ended");
}

function second() {
  console.log("Second is running");
}
// first(); 
// Execution order: first() in -> second() in -> second() out -> first() out.


// ----------------------------------------------------
// 2. THE MEMORY HEAP (Complex Data)
// ----------------------------------------------------
/*
  - The Memory Heap is a large, unstructured region of memory.
  - It stores Complex Data Types (Objects, Arrays, Functions) 
    because their size is not fixed and can grow dynamically.
*/

let user = {          
  name: "Umakant",
  role: "Developer"
}; // The actual object data is stored here in the HEAP.

// ==========================================
//  (Stack 🔗 Heap Connection)
// ==========================================
/*
  When we create the 'user' object, the actual data goes into the HEAP.
  However, the 'user' variable itself sits in the STACK. 
  Instead of holding the data, it holds a "Pointer" or "Memory Address" pointing to the HEAP.
  
  This is why in the previous "Shallow/Deep Copy" chapter, when we did 'let copyUser = user', 
  we were NOT copying the actual data; we were only copying the STACK Reference (Address)!
*/