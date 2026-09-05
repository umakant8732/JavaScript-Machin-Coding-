/**
 * Conceptual Q13-C: Promise.allSettled
 * Folder: 21-promises
 *
 * ============================================================================
 * 📌 WHAT IS Promise.allSettled?
 * ============================================================================
 * 1. Definition:
 *    `Promise.allSettled` takes an array of Promises and waits until ALL promises
 *    have settled (either fulfilled or rejected).
 *
 * 2. Strategy: Wait For Everyone (No Fail-Fast)
 *    - Unlike `Promise.all`, it NEVER rejects (unless an internal wrapper error occurs).
 *    - It guarantees that you get the outcome of EVERY single promise.
 *
 * 3. Output Format:
 *    - Returns an Array of objects describing the outcome of each promise:
 *      - For fulfilled: { status: "fulfilled", value: ... }
 *      - For rejected:  { status: "rejected", reason: ... }
 *
 * 4. Real-World Use Case:
 *    - Dashboard / Feed Loading: Loading User Profile, Notifications, and Weather Widget.
 *      Even if Weather Widget API fails, the User Profile & Notifications should still display!
 *
 * ============================================================================
 * ✍️ YOUR TASK: Write your code/demo below when ready!
 * ============================================================================
 * Practice Requirements:
 * 1. Create 3 promises (2 resolving successfully, 1 rejecting).
 * 2. Pass them to `Promise.allSettled([...])`.
 * 3. Consume with `.then(results => ...)` and iterate over the results to inspect each status and value/reason.
 */

// Write your Promise.allSettled code below...


// 1. Teeno Promises banao (2 success, 1 failure)
const promise1 = new Promise((resolve) => setTimeout(() => resolve({ user: "Umakant" }), 500));
const promise2 = new Promise((_, reject) => setTimeout(() => reject("Notification API Failed!"), 1000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve({ theme: "Dark" }), 700));

// 2. Promise.allSettled Call Karo
Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
        console.log("✅ Promise.allSettled Results:");
        console.log(results);
    });
