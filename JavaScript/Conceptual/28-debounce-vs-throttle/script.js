/**
 * Problem 12: Debounce vs Throttle
 * 
 * Tasks:
 * 1. Implement a custom debounce utility function:
 *    - Should delay execution of the callback function until after a specific duration has elapsed since the last call.
 * 
 * 2. Implement a custom throttle utility function:
 *    -Should guarantee that the callback function is executed at most once in every specified time window.
 * 
 * 3. Bind these helpers to DOM events (e.g., input event for debounce, button click event for throttle) 
 *    and log the trigger rates and times to test them.
 */

// Write your debounce, throttle implementations and UI event listeners here...

//debouncing


function debounce(callbackFn, delay) {
    let timerId;

    return function (...args) {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            callbackFn(...args)
        }, delay)
    }
}

const searchInputField = document.getElementById('debounce-input')

const search = debounce(function (value) {
    //api calling logic goes here
    console.log("searching...", value)
}, 2000)

searchInputField.addEventListener('input', (e) => {
    search(e.target.value)
})

//----------------------------------------------------------------------

//throttling


function throttle(callbackFn, delay) {
    let lastRan = 0;


    return function (...args) {
        const now = Date.now()

        if (now - lastRan >= delay) {
            callbackFn(...args)
            lastRan = now
        }
    }
}

const throttleBtn = document.getElementById('throttle-btn')

const handleClick = throttle(function () {
    console.log("throttle clicked")
}, 2000)


throttleBtn.addEventListener('click', () => {
    handleClick()
})
