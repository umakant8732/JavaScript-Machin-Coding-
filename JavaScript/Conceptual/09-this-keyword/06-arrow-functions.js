/**
 * Step 6: Arrow Functions vs Normal Functions
 * 
 * Task:
 * 1. Create an object with a normal function 'showNormal' and an arrow function 'showArrow', both logging 'this'.
 * 2. Explain why 'showArrow' logs a different context than 'showNormal'.
 * 3. Create a nested arrow function inside a normal method, log 'this', and explain how it solves context issues.
 */

// Task 1 & 2: Dynamic vs Lexical Context Binding
// 1. In user.showNormal(), the normal function is implicitly bound to 'user', outputting "Umakant".
// 2. In user.showArrow(), the arrow function has no 'this'. It inherits 'this' lexically from its enclosing scope.
// 3. Since normal objects '{}' do not create a scope, the enclosing scope is Global context. Hence, it outputs undefined.
const user = {
    username: "Umakant",
    showNormal() {
        console.log("Welcome,", this.username);
    },
    showArrow: () => {
        console.log("Welcome,", this.username);
    }
}

user.showNormal()
user.showArrow()


// Task 3: Nested Callbacks Context Preservation
// 1. In user2.showDelayed(), the inner arrow function inside setTimeout has no 'this'.
// 2. It inherits 'this' lexically from its parent enclosing function: showDelayed().
// 3. Since showDelayed() is called as user2.showDelayed(), its 'this' context is set to 'user2'.
// 4. Therefore, the arrow function resolves 'this.username' to "Umakant" safely.
const user2 = {
    username: "Umakant",
    showDelayed() {
        setTimeout(() => {
            console.log("Welcome", this.username);
        }, 1000);
    }
}

user2.showDelayed()