/**
 * ES6 ESSENTIAL 4: ARROW VS NORMAL FUNCTIONS (`this` BINDING)
 * 
 * Key Differences:
 * 1. 'this' Binding:
 *    - Normal Functions: Dynamic 'this' (Determined by HOW the function is called).
 *    - Arrow Functions: Lexical 'this' (Inherits 'this' from surrounding parent scope).
 * 2. Constructor:
 *    - Normal Functions can be invoked with 'new' keyword (Constructors).
 *    - Arrow Functions CANNOT be invoked with 'new' (Throws TypeError).
 * 3. 'arguments' Object:
 *    - Normal Functions have their own 'arguments' object.
 *    - Arrow Functions do NOT have 'arguments' (Use rest parameters ...args instead).
 */

// ==========================================
// 1. 'this' BINDING DIFFERENCE
// ==========================================

const obj = {
    name: "JavaScript Object",
    
    // Normal Method: 'this' points to 'obj' when called as obj.normalFn()
    normalFn: function() {
        console.log("1A. Normal Fn this.name:", this.name);
    },
    
    // Arrow Method: Arrow fn does NOT have its own 'this', inherits from outer scope
    arrowFn: () => {
        console.log("1B. Arrow Fn this.name:", typeof this !== "undefined" ? this.name : undefined);
    },

    // Method with callback (The famous bug & fix):
    timerExample: function() {
        // Callback inside setTimeout: Arrow fn retains parent's 'this'!
        setTimeout(() => {
            console.log("1C. Arrow Callback in setTimeout this.name:", this.name);
        }, 100);
    }
};

obj.normalFn(); // Output: "JavaScript Object"
obj.arrowFn();  // Output: undefined (in strict mode / global)
obj.timerExample(); // Output: "JavaScript Object"
