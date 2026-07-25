/**
 * Problem 4: Explain 'this' keyword
 * 
 * Predict the output of the 'this' context dynamically in different execution environments.
 */

const obj = {
    name: 'Tech Playground',
    
    // Normal function context
    printNormal: function() {
        console.log('Normal:', this.name);
    },

    // Arrow function context
    printArrow: () => {
        console.log('Arrow:', this.name);
    },

    // Nested function binding context
    printDelayed: function() {
        setTimeout(function() {
            console.log('Delayed Normal:', this.name);
        }, 100);

        setTimeout(() => {
            console.log('Delayed Arrow:', this.name);
        }, 100);
    }
};

// Test executions:
obj.printNormal();  // Predict output
obj.printArrow();   // Predict output
obj.printDelayed(); // Predict output
