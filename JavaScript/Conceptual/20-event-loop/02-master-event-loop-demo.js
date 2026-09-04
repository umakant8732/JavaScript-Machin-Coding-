/**
 * MASTER EVENT LOOP COMPREHENSIVE DEMO
 * File: 02-master-event-loop-demo.js
 * 
 * Contains EVERY SINGLE async & sync mechanism:
 * 1. Synchronous Statements
 * 2. setTimeout (Macrotask Queue)
 * 3. Promise.then (Microtask Queue)
 * 4. queueMicrotask (Microtask Queue)
 * 5. async / await (Microtask Queue)
 * 6. Nested Promise inside setTimeout
 */

console.log("1. [SYNC] Script Start");

// Macrotask 1: Timer Queue (0ms delay)
setTimeout(() => {
    console.log("2. [MACROTASK - setTimeout 0ms]");
    
    // Nested Microtask inside Macrotask!
    Promise.resolve().then(() => {
        console.log("3. [MICROTASK - Nested inside setTimeout]");
    });
}, 0);

// Microtask 1: Promise.then
Promise.resolve().then(() => {
    console.log("4. [MICROTASK - Promise 1]");
});

// Microtask 2: Explicit queueMicrotask
queueMicrotask(() => {
    console.log("5. [MICROTASK - queueMicrotask]");
});

// Microtask 3: Async/Await Function
async function asyncTask() {
    console.log("6. [SYNC inside Async Fn]");
    await Promise.resolve();
    console.log("7. [MICROTASK - Resume after await]");
}
asyncTask();

// Microtask 4: Chained Promise
Promise.resolve().then(() => {
    console.log("8. [MICROTASK - Promise 2]");
});

console.log("9. [SYNC] Script End");
