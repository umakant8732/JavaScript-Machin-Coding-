/**
 * Step 9: Tricky Output Questions on 'this' Keyword
 * 
 * This file is for practicing output-based interview questions on 'this' context.
 */

// ============================================================================
// QUESTION 1: Default Binding (Global Scope: var vs let)
// ============================================================================

// Case A: Using 'var'
var globalVarName = "Global Umakant (var)";

const userVar = {
    globalVarName: "Local User (var)",
    greet: function() {
        console.log("Case A (var) ->", this.globalVarName);
    }
};

const showVar = userVar.greet;
showVar(); 
// Predicted Output:
// - Browser: "Global Umakant (var)" (because 'var' attaches to 'window')
// - Node.js: undefined (because 'var' is local to wrapper scope, not 'global')


// Case B: Using 'let'
let globalLetName = "Global Umakant (let)";

const userLet = {
    globalLetName: "Local User (let)",
    greet: function() {
        console.log("Case B (let) ->", this.globalLetName);
    }
};

const showLet = userLet.greet;
showLet();
// Predicted Output:
// - Browser: undefined (because 'let' does NOT attach to 'window' object)
// - Node.js: undefined (because 'let' is local to wrapper scope, not 'global')


// ============================================================================
// QUESTION 2: Implicit Binding & Nested Objects Reference Loss
// ============================================================================
const user = {
    username: "Umakant",
    greet() {
        console.log("Greet:", this.username);
    },
    motherObj: {
        username: "Mother",
        greet() {
            console.log("Mother Greet:", this.username);
        }
    }
};

const userGreet = user.greet;
const motherGreet = user.motherObj.greet;

userGreet(); // Outputs: undefined (Default Binding due to reference loss)
motherGreet(); // Outputs: undefined (Default Binding - nested level context is also lost)


// ============================================================================
// QUESTION 3: Explicit Binding & Math Coercion Rules
// ============================================================================
const member = {
    name: "Rahul",
    showIncome(salary, bonus) {
        console.log(`${this.name}'s Total: ${salary + bonus}`);
    }
};

const user2 = { name: "Umakant" };

member.showIncome.call(user2, 50000); 
// Outputs: "Umakant's Total: NaN" (bonus is undefined; number + undefined = NaN)

member.showIncome.apply(user2, [60000]); 
// Outputs: "Umakant's Total: NaN" (bonus is undefined; number + undefined = NaN)


// ============================================================================
// QUESTION 4: Permanency of bind() Method
// ============================================================================
const user3 = {
    username: "Umakant",
    greet() {
        console.log("Name:", this.username);
    }
};

const otherUser = { username: "Rahul" };

const boundGreet = user3.greet.bind(otherUser);

boundGreet.call(user3); 
// Outputs: "Name: Rahul" 
// Explanation:
// 1. Once a function is bound via .bind(), its 'this' context is permanently locked.
// 2. Any subsequent attempts to override 'this' using .call(), .apply(), or .bind() again are ignored.


// ============================================================================
// QUESTION 5: Arrow Functions, Lexical Scopes & Call Overrides
// ============================================================================
const user4 = {
    username: "Umakant",
    greetNormal() {
        console.log("Normal:", this.username);
    },
    greetArrow: () => {
        console.log("Arrow:", this.username);
    },
    greetCombined() {
        const nestedArrow = () => console.log("Combined:", this.username);
        nestedArrow();
    }
};

const obj2 = { username: "Rahul" };

user4.greetNormal.call(obj2); 
// Outputs: "Normal: Rahul" (Normal function binds to 'obj2' context explicitly)

user4.greetArrow.call(obj2); 
// Outputs: "Arrow: undefined" (Arrow function ignores call override and inherits global scope lexically)

user4.greetCombined.call(obj2); 
// Outputs: "Combined: Rahul" (nestedArrow inherits 'this' from greetCombined, which is explicitly bound to 'obj2')



