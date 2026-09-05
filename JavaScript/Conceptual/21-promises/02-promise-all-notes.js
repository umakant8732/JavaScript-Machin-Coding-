/**
 * Conceptual Q13-B: Promise.all
 * Folder: 21-promises
 *
 * ============================================================================
 * 📌 WHAT IS Promise.all?
 * ============================================================================
 * 1. Definition:
 *    `Promise.all` takes an array of Promises and returns a single Promise.
 *
 * 2. Strategy: Fail-Fast Mechanism
 *    - All promises MUST succeed for Promise.all to succeed.
 *    - If EVEN ONE promise rejects, Promise.all IMMEDIATELY rejects with that error,
 *      ignoring all other pending or successful promises.
 *
 * 3. Output Format:
 *    - Success: Returns an Array of resolved values in the SAME ORDER as input promises.
 *    - Failure: Returns the error/reason of the FIRST rejected promise.
 *
 * 4. Real-World Use Case:
 *    - E-Commerce Checkout: Loading User Profile, Cart Items, and Payment Gateways.
 *      If any one fails, the checkout cannot proceed.
 *
 * ============================================================================
 * ✍️ YOUR TASK: Write your code/demo below when ready!
 * ============================================================================
 * Practice Requirements:
 * 1. Create 3 dummy promises (e.g., using setTimeout or Promise.resolve/reject).
 * 2. Case A: Make all 3 promises resolve successfully -> Observe array output in .then()
 * 3. Case B: Make 1 promise reject -> Observe how .catch() handles the single error immediately.
 */

// Write your Promise.all code below...

const promise1 = new Promise((resolve, reject) => {
    const userData = { id: 101, name: 'Umakant', role: 'Admin' }
    setTimeout(() => {
        resolve(userData)
    }, 500);
})

const promise2 = new Promise((resolve, reject) => {
    const userOrderedItems = { id: 10001, name: 'Lenovo Legion', price: 90000 }
    setTimeout(() => {
        resolve(userOrderedItems)
    }, 1000);

})


const promise3 = new Promise((resolve, reject) => {
    const userCartItems = { id: 101120, name: 'Keyboard', price: 3500 }
    setTimeout(() => {
        resolve(userCartItems)
    }, 1000);

    // setTimeout(() => {
    //     reject("something went wrong")
    // }, 1000);

})

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("✅ Promise.all Resolved (All Promises Succeeded):");
        console.log(results);
    })
    .catch((error) => {
        console.log("❌ Promise.all Rejected (Fail-Fast Triggered):");
        console.log("Reason:", error);
    });


//by using async await

async function handleAllPromises() {

    try {

        const results = await Promise.all([promise1, promise2, promise3])
        console.log("✅ Promise.all Resolved with async/await:");
        console.log(results);

    } catch (error) {

        console.log("❌ Promise.all Rejected with async/await:");
        console.log("Reason:", error);

    }

}

handleAllPromises()
