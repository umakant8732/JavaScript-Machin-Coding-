/**
 * Step 3: call() Method (Basic to Advanced)
 * 
 * Task:
 * 1. (Basic) Create a function 'generateInvoice' logging product title and price. Call it explicitly using .call(context).
 * 2. (Arguments) Modify 'generateInvoice' to accept 'taxPercent' and 'discountAmount' to calculate final price. Pass parameters comma-separated via .call().
 * 3. (Method Borrowing) Create an 'adminValidator' object with validateAccess method. Let 'guestUser' borrow this method using .call().
 * 4. (Prototype Check) Create a prototype-less object using Object.create(null). Borrow Object.prototype.hasOwnProperty using .call() to check keys safely.
 */

// Task 1 & 2: Explicit Context Binding with Arguments
// 1. In generateInvoice.call(laptop, 10, 1000), 'laptop' is passed as the first argument to bind 'this' explicitly.
// 2. Therefore, 'this.title' resolves to 'Macbook Pro m3' and 'this.price' resolves to 2000.
// 3. The subsequent arguments (10, 1000) are mapped as parameters (taxPercent, discountAmount) respectively.
function generateInvoice(taxPercent, discountAmount) {
    const tax = (this.price * taxPercent) / 100
    const finalPrice = this.price + tax - discountAmount
    console.log("Product: " + this.title + " | Tax: $" + tax + " | Final Price: $" + finalPrice);
}

const laptop = {
    title: "Macbook Pro m3",
    price: 2000
}

generateInvoice.call(laptop, 10, 1000)


// Task 3: Method Borrowing (Context Sharing)
// 1. In adminValidator.validateAccess.call(guestUser, 'write'), 'guestUser' is passed as context to bind 'this' explicitly.
// 2. Therefore, 'this.username' resolves to 'umakant' and 'this.role' resolves to 'GUEST' inside the validator method.
// 3. The string 'write' is mapped to the 'action' parameter.
const adminValidator = {
    role: 'ADMIN',
    validateAccess(action) {
        const isAllowed = this.role === 'ADMIN' || action === 'read'
        console.log(`[AUTH] User: ${this.username} | Role: ${this.role} | Action: ${action} | Access: ${isAllowed ? "GRANTED" : "DENIED"}`);
        return isAllowed;
    }
}

const guestUser = {
    username : 'umakant',
    role : "GUEST"
}


adminValidator.validateAccess.call(guestUser, 'write')


// Task 4: Prototype Safe Borrowing (Vulnerability / Crash Prevention)
// 1. In Object.prototype.hasOwnProperty.call(secureConfig, 'port'), 'secureConfig' has no prototype link, so it cannot call hasOwnProperty directly.
// 2. Therefore, we borrow the original hasOwnProperty method and explicitly bind 'this' to 'secureConfig'.
// 3. The string 'port' is mapped as the property key parameter.
const secureConfig = Object.create(null)
secureConfig.port = 8000

const hasPort = Object.prototype.hasOwnProperty.call(secureConfig, 'port')
console.log("Does port exist safely?", hasPort);