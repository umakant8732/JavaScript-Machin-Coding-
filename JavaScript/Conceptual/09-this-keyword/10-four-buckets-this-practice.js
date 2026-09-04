/**
 * ============================================================================
 * THIS KEYWORD — 4 BUCKETS PRACTICE (Revision Cheat Sheet)
 * ============================================================================
 *
 * Don't memorize 15 cases. Just 2 rules + 4 buckets.
 *
 * RULE 1: Normal fn → this determined at CALL-TIME
 * RULE 2: Arrow fn  → this determined at WRITE-TIME (enclosing scope)
 *
 * DECISION TREE:
 *   1. Is it an Arrow function?
 *      YES → takes enclosing function/scope's this. STOP.
 *      NO → step 2
 *   2. Kaise call hua?
 *      obj.fn() / fn.call(obj) / bound fn → that obj
 *      bare fn() / setTimeout(fn) / forEach(fn) → undefined (Node)
 *
 * Run: node 10-four-buckets-this-practice.js
 * ============================================================================
 */


// ============================================================================
// BUCKET 1: Normal function + object.dot  →  this = that object
// ============================================================================
// Implicit binding / left-of-the-dot rule
// ============================================================================

console.log("\n========== BUCKET 1: Normal + object.dot ==========\n");

const user1 = {
    name: "Umakant",
    greet() {
        // Normal method → call-time this
        console.log("B1 greet:", this.name);
    },
    inner: {
        name: "Inner",
        greet() {
            // Immediately left of the dot = inner (not outer user1)
            console.log("B1 nested:", this.name);
        }
    }
};

user1.greet();           // Expected: "Umakant"
user1.inner.greet();     // Expected: "Inner"

// Explicit binding also belongs to this bucket (call/apply)
function showName() {
    console.log("B1 call:", this.name);
}
showName.call({ name: "Rahul" }); // Expected: "Rahul"


// ============================================================================
// BUCKET 2: Normal function + bare call  →  this LOSE
// ============================================================================
// Method copy, setTimeout(fn), forEach(normalFn) — all share the same issue
// ============================================================================

console.log("\n========== BUCKET 2: Normal + bare call (LOSS) ==========\n");

const user2 = {
    name: "Umakant",
    greet() {
        console.log("B2 greet:", this.name);
    },
    printMembers() {
        this.members = ["A", "B"];
        // forEach runs normal callback standalone (like setTimeout)
        this.members.forEach(function (m) {
            // this here is NOT team/user2 — bare callback
            console.log("B2 forEach normal:", this && this.name, m);
        });
    }
};

user2.greet(); // Expected: "Umakant"

// Case 2a: Method reference copy
const copy = user2.greet;
copy(); // Expected: undefined (Node strict) — reference loss

// Case 2b: setTimeout(obj.method) — delayed bare call
const service2 = {
    id: "DB_1",
    check() {
        console.log("B2 setTimeout bare:", this && this.id);
    }
};
setTimeout(service2.check, 10); // Expected: undefined

// Case 2c: forEach normal callback
user2.printMembers();
// Expected: undefined A / undefined B  (approx — this.name missing)


// ============================================================================
// BUCKET 3: Arrow INSIDE a normal method  →  parent method's this
// ============================================================================
// Best fix for setTimeout / forEach / nested callbacks
// ============================================================================

console.log("\n========== BUCKET 3: Arrow inside normal method ==========\n");

const service3 = {
    id: "DB_1",
    start() {
        // start() call → this = service3
        setTimeout(() => {
            // Arrow: no own this → inherits start's this
            console.log("B3 setTimeout arrow:", this.id);
        }, 20);
    },
    printMembers() {
        this.members = ["A", "B"];
        this.members.forEach((m) => {
            // Arrow → printMembers's this = service3
            console.log("B3 forEach arrow:", this.id, m);
        });
    },
    // Arrow RETURNED from method → creation-time this LOCKED
    getPrinter() {
        return () => {
            console.log("B3 returned arrow:", this.id);
        };
    }
};

service3.start();        // Expected (after delay): "DB_1"
service3.printMembers(); // Expected: DB_1 A / DB_1 B

const printer = service3.getPrinter();
printer(); // Expected: "DB_1"  (runs standalone yet arrow is lexical)
printer.call({ id: "HACK" }); // Expected: still "DB_1" (call does not change arrow's this)


// ============================================================================
// BUCKET 4: Arrow as object method / top-level arrow  →  module/enclosing scope
// ============================================================================
// Object {} does NOT create a scope — therefore arrow does not take object's this
// ============================================================================

console.log("\n========== BUCKET 4: Arrow on object / top-level ==========\n");

const user4 = {
    name: "Umakant",
    // ❌ Arrow as method — object does not get this
    say: () => {
        console.log("B4 object arrow:", this && this.name);
    },
    inner: {
        name: "Inner",
        say: () => {
            // Nested object is also not a scope — still module this
            console.log("B4 nested object arrow:", this && this.name);
        }
    }
};

user4.say();       // Expected: undefined (Node module — no name property)
user4.inner.say(); // Expected: undefined

// Top-level arrow — same story
const topArrow = () => {
    console.log("B4 top arrow this === module.exports?", this === module.exports);
};
topArrow(); // Expected: true (Node file top-level)

// call / bind FAILS on arrow function
const sayArrow = () => {
    console.log("B4 call on arrow:", this && this.name);
};
sayArrow.call({ name: "Umakant" }); // Expected: undefined — call ignore
sayArrow.bind({ name: "Umakant" })(); // Expected: undefined — bind ignore


// ============================================================================
// 3 FIXES — when Bucket 2 (loss) occurs
// ============================================================================

console.log("\n========== 3 FIXES for Bucket 2 loss ==========\n");

const serviceFix = {
    id: "DB_1",
    check() {
        console.log("FIX check:", this.id);
    },
    // Fix 1: Arrow inside method (Bucket 3)
    startWithArrow() {
        setTimeout(() => {
            console.log("FIX1 arrow:", this.id);
        }, 30);
    }
};

// Broken (Bucket 2)
setTimeout(serviceFix.check, 40); // undefined

// Fix 1: Arrow lexical this
serviceFix.startWithArrow(); // "DB_1"

// Fix 2: bind — this lock on normal fn
setTimeout(serviceFix.check.bind(serviceFix), 50); // "DB_1"

// Fix 3: Wrapper — dubara object.dot call (closure + implicit)
setTimeout(() => {
    serviceFix.check(); // this = serviceFix
}, 60); // "DB_1"


// ============================================================================
// QUICK SELF-TEST (predict, then run)
// ============================================================================
// Uncomment and predict BEFORE running:
//
// const quiz = {
//     name: "Quiz",
//     a() { setTimeout(() => console.log("Q.a", this.name), 70); },
//     b() { setTimeout(function () { console.log("Q.b", this.name); }, 80); },
//     c: () => { console.log("Q.c", this.name); },
//     d() {
//         const fn = this.show;
//         // fn missing on purpose — think Bucket 2 vs 3
//     },
//     show() { console.log("Q.show", this.name); }
// };
// quiz.a();              // Bucket? Output?
// quiz.b();              // Bucket? Output?
// quiz.c();              // Bucket? Output?
// setTimeout(quiz.show, 90);                  // Bucket? Output?
// setTimeout(quiz.show.bind(quiz), 100);      // Fix? Output?
// setTimeout(() => quiz.show(), 110);         // Fix? Output?
//
// Answers:
// a → Bucket 3 → "Quiz"
// b → Bucket 2 → undefined
// c → Bucket 4 → undefined
// setTimeout(quiz.show) → Bucket 2 → undefined
// bind → Fix 2 → "Quiz"
// wrapper → Fix 3 → "Quiz"


// ============================================================================
// MEMORY CARD (print once, revise anytime)
// ============================================================================
/*
┌─────────────────────────────────────────────────────────────┐
│  BUCKET 1  Normal + obj.fn()     → this = obj               │
│  BUCKET 2  Normal + bare call    → this LOSE (undefined)    │
│  BUCKET 3  Arrow inside method   → parent method's this    │
│  BUCKET 4  Arrow on object/top   → module / outer scope     │
├─────────────────────────────────────────────────────────────┤
│  FIXES:  1) arrow inside   2) .bind(obj)   3) () => obj.fn()│
├─────────────────────────────────────────────────────────────┤
│  Normal = HOW it was called                                 │
│  Arrow  = WHERE it was written                              │
└─────────────────────────────────────────────────────────────┘
*/
