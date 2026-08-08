/**
 * Step 5: bind() Method (Basic to Advanced)
 * 
 * Task:
 * 1. (Basic) Bind a function to a context and store it as a new function reference. Invoke it later.
 * 2. (Timers/Callbacks) Create an object with a method. Pass that method to setTimeout and observe context loss. Fix it using .bind().
 * 3. (Currying/Partial Application) Create a function 'multiply(a, b)'. Use .bind() to create a 'double(x)' function that locks 'a' as 2.
 */

// Task 1: Basic Binding (Deferred Execution)
// 1. In logProfile.bind(user), we create a brand-new function pointer with 'this' bound permanently to the 'user' object.
// 2. Unlike call/apply, bind does not execute the function immediately.
// 3. We call boundProfile() later to trigger the function with the preserved 'user' context.
function logProfile() {
    console.log("User Profile:" + this.name + " | Role: " + this.role);
}

const user = {
    name : "Umakant Bhendarkar",
    role : "Software Architech",
    printName () {
        console.log(this.name);
    }
}

const boundProfile = logProfile.bind(user)
boundProfile()


// Task 2: Callbacks Context Loss Prevention (setTimeout Trap)
// 1. In setTimeout(serviceNode.checkStatus.bind(serviceNode), 2000), we bind checkStatus to serviceNode.
// 2. If we passed serviceNode.checkStatus raw, setTimeout would run it standalone, making 'this' fallback to global (undefined nodeId).
// 3. By passing a bound copy, we ensure 'this' remains locked to serviceNode when the Event Loop pushes the callback onto the stack.
const serviceNode = {
    nodeId: "DB_NODE_1",
    checkStatus() {
        console.log(`[STATUS] Checking node: ${this.nodeId}`);
    }
};

setTimeout(serviceNode.checkStatus.bind(serviceNode), 2000);


// Task 3: Currying / Partial Application (Arguments Locking)
// 1. In multiply.bind(null, 2), the first argument (null) maps to 'this' context as multiply doesn't use it.
// 2. The second argument (2) locks the first parameter 'a' of multiply permanently.
// 3. When double(5) is executed, the parameter 5 maps to the next free argument 'b', running multiply(2, 5).
function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

console.log("Double of 5:", double(5)); // Expected: 10 (2 * 5)
console.log("Triple of 5:", triple(5)); // Expected: 15 (3 * 5)

