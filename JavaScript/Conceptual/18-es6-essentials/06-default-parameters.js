/**
 * ES6 ESSENTIAL 5: DEFAULT PARAMETERS
 * 
 * Concept:
 * Default function parameters allow formal parameters to be initialized
 * with default values if no value or 'undefined' is passed.
 */

// ==========================================
// 1. BASIC DEFAULT PARAMETERS
// ==========================================

function greet(name = "Guest", role = "User") {
    console.log(`Hello ${name}, your role is ${role}.`);
}

console.log("1. Default Parameters Demo:");
greet("Rahul", "Admin"); // Output: "Hello Rahul, your role is Admin."
greet("Alex");           // Output: "Hello Alex, your role is User." (Fallback applied)
greet();                 // Output: "Hello Guest, your role is User." (Both fallbacks applied)


// ==========================================
// 2. DYNAMIC EXPRESSIONS & EARLIER PARAMETERS AS DEFAULTS
// ==========================================

function createTaxInvoice(price, taxRate = 0.18, discount = price * 0.05) {
    const taxAmount = price * taxRate;
    const finalTotal = price + taxAmount - discount;
    return { price, taxAmount, discount, finalTotal };
}

console.log("\n2. Dynamic Expression Default Parameters:");
console.log(createTaxInvoice(1000)); // Uses 18% tax and 5% price discount ($50)
