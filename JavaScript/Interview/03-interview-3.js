/**
 * ============================================================================
 * JAVASCRIPT MOCK INTERVIEW ROUND 3 (20 POLYFILL, ASYNC & DSA QUESTIONS)
 * ============================================================================
 * Folder: JavaScript/Interview
 * File: 03-interview-3.js
 *
 * Focus: Array Polyfills, Promise Polyfill, JS DSA, Utility Functions & Mini Machine Coding
 * ============================================================================
 */

/*
===============================================================================
QUESTION 1 (Output Based — Event Loop & Microtasks with Async/Await):
-------------------------------------------------------------------------------
Predict the exact console log output sequence:
  async function async1() {
      console.log("Async 1 Start");
      await async2();
      console.log("Async 1 End");
  }
  async function async2() {
      console.log("Async 2");
  }
  console.log("Script Start");
  setTimeout(() => console.log("SetTimeout"), 0);
  async1();
  new Promise((resolve) => {
      console.log("Promise 1");
      resolve();
  }).then(() => console.log("Promise 2"));
  console.log("Script End");
===============================================================================

QUESTION 2 (Coding — Polyfill for Array.prototype.map):
-------------------------------------------------------------------------------
Write a custom polyfill function `myMap` attached to `Array.prototype`.
It should accept a callback `(element, index, array)` and return a new transformed array.
Example: [1, 2, 3].myMap(x => x * 2) => [2, 4, 6]
===============================================================================

QUESTION 3 (Coding — Polyfill for Array.prototype.filter):
-------------------------------------------------------------------------------
Write a custom polyfill function `myFilter` attached to `Array.prototype`.
It should accept a callback `(element, index, array)` and return a new array with elements that pass the condition.
Example: [1, 2, 3, 4].myFilter(x => x % 2 === 0) => [2, 4]
===============================================================================

QUESTION 4 (Coding — Polyfill for Array.prototype.reduce):
-------------------------------------------------------------------------------
Write a custom polyfill function `myReduce` attached to `Array.prototype`.
It should accept a callback `(accumulator, currentValue, index, array)` and an optional `initialValue`.
Example: [1, 2, 3, 4].myReduce((acc, curr) => acc + curr, 0) => 10
===============================================================================

QUESTION 5 (Coding — Polyfill for Function.prototype.bind):
-------------------------------------------------------------------------------
Write a custom polyfill function `myBind` attached to `Function.prototype`.
It should allow binding a context object and initial arguments, returning a new function.
Example:
  function greet(greeting, punctuation) {
      return greeting + " " + this.name + punctuation;
  }
  const boundGreet = greet.myBind({ name: "Umakant" }, "Hello");
  boundGreet("!"); // => "Hello Umakant!"
===============================================================================

QUESTION 6 (Coding — Polyfill for Promise.all):
-------------------------------------------------------------------------------
Write a custom function `myPromiseAll(promisesArray)` that mimics `Promise.all()`.
It should return a Promise that resolves with an array of results when all promises resolve,
or rejects immediately if any single promise rejects.
===============================================================================

QUESTION 7 (JS DSA — Flatten Deeply Nested Array):
-------------------------------------------------------------------------------
Write a recursive function `flatten(arr)` that flattens a deeply nested array of any depth.
Do NOT use built-in `Array.prototype.flat()`.
Example: flatten([1, [2, [3, [4]], 5]]) => [1, 2, 3, 4, 5]
===============================================================================

QUESTION 8 (JS DSA — Deep Clone Object):
-------------------------------------------------------------------------------
Write a function `deepClone(obj)` that creates a deep copy of an object/array.
It should handle nested objects, arrays, and primitive values without modifying the original object.
Do NOT use `JSON.parse(JSON.stringify(obj))`.
===============================================================================

QUESTION 9 (JS DSA — Two Sum Problem):
-------------------------------------------------------------------------------
Given an array of numbers `nums` and a target number `target`,
write a function `twoSum(nums, target)` that returns the indices of the two numbers that add up to `target`.
Target time complexity: O(N) using a Map or Object.
Example: twoSum([2, 7, 11, 15], 9) => [0, 1]
===============================================================================

QUESTION 10 (JS DSA — Valid Anagram Checker):
-------------------------------------------------------------------------------
Write a function `isAnagram(str1, str2)` that returns `true` if two strings are anagrams of each other, and `false` otherwise.
Example: isAnagram("listen", "silent") => true, isAnagram("hello", "world") => false
===============================================================================

QUESTION 11 (Async Flow — Sequential Async Task Execution):
-------------------------------------------------------------------------------
Given an array of async functions that return promises:
  const tasks = [
      () => new Promise(res => setTimeout(() => res("Task 1 Done"), 1000)),
      () => new Promise(res => setTimeout(() => res("Task 2 Done"), 500)),
      () => new Promise(res => setTimeout(() => res("Task 3 Done"), 800))
  ];
Write a function `executeSequentially(tasks)` that executes each task ONE AFTER THE OTHER sequentially.
===============================================================================

QUESTION 12 (Async Flow — Retry Promise N Times):
-------------------------------------------------------------------------------
Write an async function `retryPromise(fn, retries, delayMs)` that executes an async function `fn`.
If `fn` rejects/fails, it waits for `delayMs` and retries up to `retries` times before finally throwing an error.
===============================================================================

QUESTION 13 (Conceptual — WeakMap Practical Use Case):
-------------------------------------------------------------------------------
Explain why `WeakMap` is used for DOM element metadata caching or private properties in JavaScript libraries.
Why does `WeakMap` prevent memory leaks compared to regular `Map`?
===============================================================================

QUESTION 14 (Output Based — Object.freeze vs Object.seal):
-------------------------------------------------------------------------------
Predict the output of the code below and explain the difference between Object.freeze and Object.seal:
  const obj1 = { name: "Alice", age: 25 };
  const obj2 = { name: "Bob", age: 30 };

  Object.freeze(obj1);
  Object.seal(obj2);

  obj1.age = 26;
  obj1.city = "Delhi";
  delete obj1.name;

  obj2.age = 31;
  obj2.city = "Mumbai";
  delete obj2.name;

  console.log("obj1:", obj1);
  console.log("obj2:", obj2);
===============================================================================

QUESTION 15 (Output Based — Closure Private Counter):
-------------------------------------------------------------------------------
Predict the output of the code below:
  function createCounter() {
      let count = 0;
      return {
          increment() { count++; return count; },
          decrement() { count--; return count; },
          getCount() { return count; }
      };
  }
  const c1 = createCounter();
  const c2 = createCounter();
  console.log(c1.increment());
  console.log(c1.increment());
  console.log(c2.decrement());
  console.log(c1.getCount());
  console.log(c2.getCount());
===============================================================================

QUESTION 16 (Output Based — Prototype Inheritance & Method Overriding):
-------------------------------------------------------------------------------
Predict the console log output:
  class Parent {
      constructor(name) { this.name = name; }
      greet() { return "Hello from " + this.name; }
  }
  class Child extends Parent {
      greet() { return super.greet() + " (Child)"; }
  }
  const child = new Child("Umakant");
  console.log(child.greet());
  console.log(child instanceof Parent);
  console.log(child instanceof Child);
===============================================================================

QUESTION 17 (Problem Solving — Debounce Utility Function):
-------------------------------------------------------------------------------
Write a utility function `debounce(fn, delay)` that delays invoking `fn` until after `delay` milliseconds have elapsed since the last time it was invoked.
Include an example testing it with `setTimeout`.
===============================================================================

QUESTION 18 (Problem Solving — Throttle Utility Function):
-------------------------------------------------------------------------------
Write a utility function `throttle(fn, limit)` that ensures `fn` is called at most once every `limit` milliseconds.
===============================================================================

QUESTION 19 (Conceptual — Event Loop: Microtasks vs Macrotasks Order):
-------------------------------------------------------------------------------
Explain the difference between Macrotask Queue (setTimeout, setInterval, setImmediate) and Microtask Queue (Promise.then, process.nextTick, queueMicrotask).
Which queue has higher priority when Call Stack clears?
===============================================================================

QUESTION 20 (Mini Machine Coding — Custom Event Emitter Class):
-------------------------------------------------------------------------------
Build a custom `EventEmitter` class in JavaScript with the following methods:
1. `on(eventName, listener)`: Registers a listener callback for the event.
2. `emit(eventName, ...args)`: Triggers all registered listeners for the event with arguments.
3. `off(eventName, listener)`: Removes a specific listener callback from the event.
4. `once(eventName, listener)`: Registers a listener that executes only ONCE and then auto-removes itself.

Example Usage:
  const emitter = new EventEmitter();
  const logData = (data) => console.log("Received:", data);
  emitter.on("userLogin", logData);
  emitter.emit("userLogin", { id: 1, name: "Umakant" }); // Logs: Received: { id: 1, name: 'Umakant' }
  emitter.off("userLogin", logData);
  emitter.emit("userLogin", { id: 1 }); // Does not log anything
===============================================================================
*/
