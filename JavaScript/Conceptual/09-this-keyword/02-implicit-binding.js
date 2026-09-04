/**
 * Step 2: Implicit Binding & Method Reference Loss
 * 
 * Task:
 * 1. Create a 'user' object with a name and a greet method logging 'this.name'.
 * 2. Invoke 'user.greet()' (Implicit binding check).
 * 3. Assign the greet method reference to a new variable: 'const copyGreet = user.greet;'
 * 4. Invoke 'copyGreet()' and explain why the output is undefined (Reference Loss).
 */


// Write your code here

const user = {
    name : "umakant",
    greet () {
        console.log(this.name);
    }
}

// Scenario 1: Basic Implicit Binding & Reference Loss
user.greet() // Outputs "umakant" (Implicit Binding)

const copyGreet = user.greet // Method reference copied (Connection lost)
copyGreet() // Outputs undefined (Method Reference Loss - standalone call)

// Scenario 2: Nested Object Chain (Left of the Dot Rule)
// 1. In obj.innerObject.greet(), the element directly to the left of the dot is 'innerObject'.
// 2. Therefore, 'this' binds to 'innerObject' rather than the outer object.
const obj = {
    name : 'Outer Object',
    innerObject : {
        name : "Inner Object",
        greet() {
            console.log(this.name);
        }
    }
}

obj.innerObject.greet() // Outputs "Inner Object"