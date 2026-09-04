/**
 * Conceptual Q15: Event Loop & Execution Context
 * Folder: 20-event-loop
 *
 * ==========================================
 * 🎯 SHORT INTERVIEW DEFINITION (ONE-LINER)
 * ==========================================
 * "The Event Loop is a continuous monitoring mechanism in JavaScript that constantly
 * checks if the Call Stack is empty. Whenever the stack is clear, it pushes pending
 * callbacks from the Microtask Queue (Promises) first, and then the Macrotask Queue (setTimeout)
 * onto the Call Stack for execution."
 *
 * ==========================================
 * 🏛️ ARCHITECTURAL COMPONENTS
 * ==========================================
 * 1. Call Stack: Executes synchronous JavaScript code (LIFO).
 * 2. Web APIs: Handles timers (setTimeout), network requests (fetch), and DOM events.
 * 3. Microtask Queue (VIP): Promises, async/await, queueMicrotask, MutationObserver.
 * 4. Macrotask Queue (Callback Queue): setTimeout, setInterval, setImmediate, DOM events.
 *
 * ==========================================
 * 🥇 EXECUTION PRIORITY ORDER
 * ==========================================
 * Synchronous Code ---> Microtask Queue (Drain ALL) ---> Render (if needed) ---> Macrotask Queue (1 item)
 */

console.log("1. [SYNC] Script Start");

// 1. Macrotask (Timer Queue)
setTimeout(() => {
    console.log("2. [MACROTASK - setTimeout 0ms]");
    
    // Nested Microtask inside Macrotask!
    Promise.resolve().then(() => {
        console.log("3. [MICROTASK - Nested inside setTimeout]");
    });
}, 0);

// 2. Microtask 1 (Promise)
Promise.resolve().then(() => {
    console.log("4. [MICROTASK - Promise 1]");
});

// 3. Microtask 2 (queueMicrotask)
queueMicrotask(() => {
    console.log("5. [MICROTASK - queueMicrotask]");
});

// 4. Async/Await Function
async function asyncTask() {
    console.log("6. [SYNC inside Async Fn]");
    await Promise.resolve();
    console.log("7. [MICROTASK - Resume after await]");
}
asyncTask();

// 5. Microtask 3 (Promise 2)
Promise.resolve().then(() => {
    console.log("8. [MICROTASK - Promise 2]");
});

console.log("9. [SYNC] Script End");
