/**
 * Conceptual Q15: Event Loop & Execution Context
 * Folder: 22-event-loop
 * Related: 14-call-stack-vs-heap (stack diagram pehle padho)
 *
 * Tasks:
 * 1. Pieces: Call Stack | Web APIs | Microtask queue | Macrotask queue
 * 2. Order yaad karo: sync code → microtasks (Promises) → macrotasks (setTimeout)
 * 3. Predict output order (paper pe):
 *      console.log("A");
 *      setTimeout(() => console.log("B"), 0);
 *      Promise.resolve().then(() => console.log("C"));
 *      console.log("D");
 * 4. Why UI freeze nahi hota long async pe?
 * 5. Tie to stack: har sync call stack pe; async callbacks baad mein queue se
 *
 * Write your notes / tiny demo below when ready...
 */
