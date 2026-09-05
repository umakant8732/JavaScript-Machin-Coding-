/**
 * ============================================================================
 * JAVASCRIPT MOCK INTERVIEW ROUND 2 (20 INTERMEDIATE QUESTIONS)
 * ============================================================================
 * Folder: JavaScript/Interview
 * File: 02-interview-2.js
 *
 * Focus: Intermediate Concepts, Tricky Outputs, HOF Problem Solving & Async Patterns
 * ============================================================================
 * SCORE SUMMARY:
 * Total Questions: 20
 * Answered & Verified: 18 / 20
 * Marked Unanswered / Pending Revision: 2 (Question 9 & Question 15)
 * Score: 95.2% (Grade A+)
 * ============================================================================
 */

/*
===============================================================================
QUESTION 1 (Output Based — Function Scope & Variable Shadowing): [STATUS: ANSWERED - VERIFIED]
-------------------------------------------------------------------------------
Predict the console log output of the code below and explain why:
  var x = 10;
  function outer() {
      var x = 20;
      function inner() {
          x++;
          var x = 30;
          console.log(x);
      }
      inner();
  }
  outer();
===============================================================================

QUESTION 2 (Output Based — 'this' & Arrow Functions in Methods): [STATUS: ANSWERED - VERIFIED]
-------------------------------------------------------------------------------
Predict the output of calculator.add(10).
What happens if innerAdd is changed to a normal function function(b)?
  const calculator = {
      num: 100,
      add(a) {
          const innerAdd = (b) => {
              return this.num + a + b;
          };
          return innerAdd(50);
      }
  };
  console.log(calculator.add(10));
===============================================================================

QUESTION 3 (Coding — Array HOF Chaining: map + filter): [STATUS: ANSWERED - VERIFIED]
-------------------------------------------------------------------------------
Given an array of student objects:
  const students = [
      { name: "Aman", marks: 45 },
      { name: "Riya", marks: 75 },
      { name: "Karan", marks: 85 },
      { name: "Neha", marks: 35 }
  ];
Write a single chain using .map() and .filter() to add 10 grace marks to everyone,
and return an array of names of students who scored >= 50 after grace marks.
===============================================================================

QUESTION 4 (Coding — Array reduce() Frequency Counter): [STATUS: ANSWERED - VERIFIED]
-------------------------------------------------------------------------------
Given an array of strings:
  const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
Use Array.prototype.reduce() to return an object counting the frequency of each fruit.
Expected Output: { apple: 3, banana: 2, orange: 1 }
===============================================================================

QUESTION 5 (Coding — Array reduce() Flattening Nested Arrays): [STATUS: ANSWERED - VERIFIED]
-------------------------------------------------------------------------------
Given a 2D/nested array:
  const nestedArr = [[1, 2], [3, 4], [5, 6]];
Use Array.prototype.reduce() to flatten it into a single 1D array [1, 2, 3, 4, 5, 6].
===============================================================================

QUESTION 6 (Coding — Array reduce() Deduplication): [STATUS: ANSWERED - VERIFIED]
-------------------------------------------------------------------------------
Given an array with duplicate values:
  const numbers = [1, 2, 2, 3, 4, 4, 5, 1];
Remove duplicate values using Array.prototype.reduce() without using Set.
===============================================================================

QUESTION 7 (Output Based — Array Mutating vs Non-Mutating Methods): [STATUS: ANSWERED - VERIFIED]
-------------------------------------------------------------------------------
Predict the logged outputs of arr, res1, and res2:
  const arr = [1, 2, 3, 4, 5];
  const res1 = arr.slice(1, 3);
  const res2 = arr.splice(1, 3);
  console.log("arr:", arr);
  console.log("res1:", res1);
  console.log("res2:", res2);
===============================================================================

QUESTION 8 (Output Based — Event Loop: process.nextTick vs Promise vs setTimeout): [STATUS: ANSWERED - VERIFIED]
-------------------------------------------------------------------------------
In Node.js, predict the exact console log output sequence:
  console.log("Start");
  setTimeout(() => console.log("Timeout"), 0);
  Promise.resolve().then(() => console.log("Promise"));
  process.nextTick(() => console.log("NextTick"));
  console.log("End");
===============================================================================

QUESTION 9 (Conceptual — process.nextTick vs Promise.then): [STATUS: UNANSWERED / PENDING REVISION]
-------------------------------------------------------------------------------
What is the difference between process.nextTick() queue and Promise.then() microtask queue
in Node.js? Which one executes first when Call Stack clears?
===============================================================================

QUESTION 10 (Output Based — Promise Chaining & Error Catching): [STATUS: ANSWERED - VERIFIED]
-------------------------------------------------------------------------------
Predict the step-by-step console log output of the Promise chain below:
  Promise.resolve(10)
      .then(val => val * 2)
      .then(val => {
          console.log("Step 1:", val);
          return val + 5;
      })
      .then(val => {
          throw new Error("Failed!");
      })
      .catch(err => {
          console.log("Caught:", err.message);
          return 100;
      })
      .then(val => console.log("Final:", val));
===============================================================================

QUESTION 11 (Conceptual / Scenario — Promise.race vs Promise.any): [STATUS: ANSWERED - VERIFIED]
-------------------------------------------------------------------------------
What is the difference between Promise.race() and Promise.any()?
Give 1 real-world use case for Promise.race() (e.g. API request timeout).
===============================================================================

QUESTION 12 (Coding — Promise Timeout Wrapper): [STATUS: ANSWERED - VERIFIED]
-------------------------------------------------------------------------------
Write a function fetchWithTimeout(promise, timeoutMs) that returns a promise which
rejects with "Request Timed Out" if the original promise takes longer than timeoutMs.
(Hint: Use Promise.race).
===============================================================================

QUESTION 13 (Conceptual — Prototype Chain: __proto__ vs prototype): [STATUS: ANSWERED - VERIFIED]
-------------------------------------------------------------------------------
What is the difference between obj.__proto__ and ConstructorFunction.prototype?
How does property lookup work along the Prototype Chain when accessing obj.prop?
===============================================================================

QUESTION 14 (Output Based — Object Prototype & hasOwnProperty): [STATUS: ANSWERED - VERIFIED]
-------------------------------------------------------------------------------
What is the output of the code below? Explain why hasOwnProperty behaves differently for name vs eat.
  function Animal(name) {
      this.name = name;
  }
  Animal.prototype.eat = function() {
      console.log(this.name + " is eating");
  };
  const dog = new Animal("Dog");
  console.log(dog.hasOwnProperty("name"));
  console.log(dog.hasOwnProperty("eat"));
===============================================================================

QUESTION 15 (Conceptual — Garbage Collection & WeakMap / WeakSet): [STATUS: UNANSWERED / PENDING REVISION]
-------------------------------------------------------------------------------
Why are WeakMap and WeakSet garbage-collection friendly compared to regular Map and Set?
Why must WeakMap keys be objects and not primitives?
===============================================================================

QUESTION 16 (Conceptual — Closures & Memory Leak Prevention): [STATUS: ANSWERED - VERIFIED]
-------------------------------------------------------------------------------
How can closures accidentally cause memory leaks in long-running web applications?
How do you clean up references to prevent memory leaks?
===============================================================================

QUESTION 17 (Output Based — Async/Await Sequential vs Parallel Execution): [STATUS: ANSWERED - VERIFIED]
-------------------------------------------------------------------------------
Compare the execution time of Code A vs Code B assuming delay(1000) takes 1 second:
  // Code A:
  await delay(1000);
  await delay(1000);

  // Code B:
  await Promise.all([delay(1000), delay(1000)]);
===============================================================================

QUESTION 18 (Conceptual — Strict Mode Effects): [STATUS: ANSWERED - VERIFIED]
-------------------------------------------------------------------------------
What changes in JavaScript behavior when "use strict" is enabled?
Mention how it affects 'this' inside normal functions and undeclared variable assignments.
===============================================================================

QUESTION 19 (Problem Solving — First Non-Repeating Character): [STATUS: ANSWERED - VERIFIED]
-------------------------------------------------------------------------------
Write a function firstNonRepeatingChar(str) that takes a string (e.g. "swiss")
and returns the first non-repeating character (e.g. "w").
If all characters repeat, return null.
===============================================================================

QUESTION 20 (Problem Solving — Group Array of Objects by Property): [STATUS: ANSWERED - VERIFIED]
-------------------------------------------------------------------------------
Write a function groupBy(array, key) that takes an array of objects and a key name,
and returns an object grouped by that key.
Example Input:
  groupBy([
      { name: "Alice", role: "Admin" },
      { name: "Bob", role: "User" },
      { name: "Charlie", role: "Admin" }
  ], 'role');
Expected Output:
  {
      Admin: [{ name: "Alice", role: "Admin" }, { name: "Charlie", role: "Admin" }],
      User: [{ name: "Bob", role: "User" }]
  }
===============================================================================
*/
