/**
 * Conceptual Q13: JavaScript Promises — Basics & Syntax
 * Folder: 21-promises
 *
 * Tasks:
 * 1. States: pending → fulfilled / rejected
 * 2. .then / .catch / .finally — role of each
 * 3. Promise constructor (executor function, resolve, reject)
 */

/*
1. Promises are built-in objects in JavaScript.
2. They are used to perform asynchronous operations (like calling APIs).
3. A Promise has 3 states:
    1. Pending    -> Initial state (when operation is ongoing)
    2. Fulfilled  -> Success state (when a promise succeeds, its state becomes fulfilled)
    3. Rejected   -> Failure state (when a promise fails, its state becomes rejected)
*/

// Promise Producer Example
const myPromise = new Promise((resolve, reject) => {
    async function getData() {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            const data = await res.json()
            resolve(data)
        } catch (error) {
            reject(error)
        }
    }

    getData()
})

// Promise Consumer Example
myPromise
    .then((data) => console.log(data))
    .catch((err) => console.log(err.message))
    .finally(() => console.log("operation complete"))
