/**
 * ============================================================================
 * JAVASCRIPT MOCK INTERVIEW ROUND 1 (20 CONCEPT & OUTPUT QUESTIONS)
 * ============================================================================
 * Folder: JavaScript/Interview
 * File: 01-interview-1.js
 *
 * Focus: Core Concepts, Output Prediction & Basic Concept Applications
 * ============================================================================
 */

/*
===============================================================================
QUESTION 1 (Conceptual — Memory & Types):
-------------------------------------------------------------------------------
What is the difference between Call Stack and Heap memory in JavaScript?
Which memory area stores Primitive values vs Reference types?
===============================================================================

QUESTION 2 (Output Based — Equality & Coercion):
-------------------------------------------------------------------------------
What is the output of the following three lines? Explain why.
  console.log(false == '0');
  console.log(false === '0');
  console.log(null == undefined);
===============================================================================

QUESTION 3 (Output Based — Hoisting & TDZ):
-------------------------------------------------------------------------------
What will be the output of the code below? Explain Temporal Dead Zone (TDZ).
  var a = 10;
  function test() {
      console.log(a);
      let a = 20;
  }
  test();
===============================================================================

QUESTION 4 (Output Based / Conceptual — Closures & Loops):
-------------------------------------------------------------------------------
What is the output of the loop below? How do you fix it using 'let' or IIFE?
  for (var i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 100);
  }
===============================================================================

QUESTION 5 (Output Based — 'this' Keyword & Arrow Functions):
-------------------------------------------------------------------------------
Predict the output of user.sayHi() and user.sayArrow() in Node.js vs Browser:
  const user = {
      name: "Umakant",
      sayHi() { console.log(this.name); },
      sayArrow: () => console.log(this.name)
  };
  user.sayHi();
  user.sayArrow();
===============================================================================

QUESTION 6 (Output Based — 'this' Reference Loss):
-------------------------------------------------------------------------------
Predict the output of the code below and explain why 'this' is lost. How do you fix it?
  const obj = {
      count: 10,
      print() { console.log(this.count); }
  };
  setTimeout(obj.print, 100);
===============================================================================

QUESTION 7 (Conceptual — Shallow vs Deep Copy):
-------------------------------------------------------------------------------
Explain the difference between Shallow Copy and Deep Copy.
Why does Object.assign({}, obj) fail to deep copy nested objects?
What is structuredClone()?
===============================================================================

QUESTION 8 (Conceptual / Basic Code — map() vs forEach()):
-------------------------------------------------------------------------------
What is the primary difference between .map() and .forEach()?
When should you use which?
===============================================================================

QUESTION 9 (Conceptual / Basic Code — filter() vs find()):
-------------------------------------------------------------------------------
What is the difference between Array.prototype.filter() and Array.prototype.find()?
What do they return if no element matches the condition?
===============================================================================

QUESTION 10 (Basic Concept Code — Array reduce()):
-------------------------------------------------------------------------------
How does Array.prototype.reduce() work?
Write a simple example to sum all numbers in the array [10, 20, 30, 40] using reduce().
===============================================================================

QUESTION 11 (Output Based — Event Loop Execution Order):
-------------------------------------------------------------------------------
Predict the exact console output sequence for the code below and explain why:
  console.log("1");
  setTimeout(() => console.log("2"), 0);
  Promise.resolve().then(() => console.log("3"));
  queueMicrotask(() => console.log("4"));
  console.log("5");
===============================================================================

QUESTION 12 (Conceptual — Promise States & Executor):
-------------------------------------------------------------------------------
What are the 3 states of a Promise? What arguments does the executor function take?
Why can a settled promise never change state again?
===============================================================================

QUESTION 13 (Conceptual / Scenario — Promise.all vs Promise.allSettled):
-------------------------------------------------------------------------------
Explain the difference between Promise.all and Promise.allSettled.
If 1 out of 3 APIs fail, which one should you use if you still want to render data
for the remaining 2 APIs on the UI?
===============================================================================

QUESTION 14 (Output Based — Promise.all Fail-Fast):
-------------------------------------------------------------------------------
What will be logged to the console in the code below?
  const p1 = Promise.resolve("A");
  const p2 = Promise.reject("B");
  const p3 = Promise.resolve("C");
  Promise.all([p1, p2, p3])
      .then(res => console.log("Success:", res))
      .catch(err => console.log("Caught Error:", err));
===============================================================================

QUESTION 15 (Conceptual / Basic Code — Async/Await & Try...Catch):
-------------------------------------------------------------------------------
How does error handling differ between .then()/.catch() chaining and async/await?
Write a simple async function using try...catch that calls fetch() and handles errors.
===============================================================================

QUESTION 16 (Conceptual — DOM Bubbling vs Capturing):
-------------------------------------------------------------------------------
Explain Event Bubbling vs Event Capturing.
What is the difference between event.preventDefault() and event.stopPropagation()?
===============================================================================

QUESTION 17 (Conceptual — Event Delegation):
-------------------------------------------------------------------------------
What is Event Delegation?
Why is attaching 1 event listener to a parent <ul> better than attaching 100 listeners to 100 <li> items?
===============================================================================

QUESTION 18 (Conceptual — Debounce Concept):
-------------------------------------------------------------------------------
What is Debouncing?
How does debouncing optimize search input / API rate performance in web apps?
===============================================================================

QUESTION 19 (Conceptual — Throttle vs Debounce):
-------------------------------------------------------------------------------
What is Throttling? How is Throttling different from Debouncing?
Give 2 real-world use cases for each.
===============================================================================

QUESTION 20 (Conceptual — Browser Storage Comparison):
-------------------------------------------------------------------------------
Compare localStorage, sessionStorage, and cookies in terms of storage size,
expiration mechanism, and tab scope.
===============================================================================
*/
