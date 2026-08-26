/**
 * Problem 6 & 7: Event Bubbling & Event Capturing
 * 
 * Tasks:
 * 1. Get references to the DOM elements: grandparent, parent, child, chk-capture (checkbox), chk-stop (checkbox), and logs.
 * 2. Implement click event listeners for grandparent, parent, and child divs.
 * 3. Toggle dynamically between Bubbling (default) and Capturing based on the 'chk-capture' checkbox state.
 * 4. Log the click sequence to the screen (or console) to visualize propagation.
 * 5. Optionally, stop event propagation using event.stopPropagation() if the 'chk-stop' checkbox is checked.
 */

// Write your event handlers and DOM binding logic here...

const bubbleGranparent = document.getElementById('gp-bubble')
const bubbleParent = document.getElementById('p-bubble')
const bubbleChild = document.getElementById('c-bubble')


bubbleGranparent.addEventListener("click", e => {
    e.stopPropagation() 
    console.log("Bubble : Granparent Clicked");
})

bubbleParent.addEventListener("click", e => {
    e.stopPropagation()
    console.log("Bubble: Parent Clicked");
})

bubbleChild.addEventListener("click", e => {
    e.stopPropagation()
    console.log("Bubble: Child Click");
})


// ---------------------------------------------------------------------


const captureGrandparent = document.getElementById('gp-capture')
const captureParent = document.getElementById('p-capture')
const captureChild = document.getElementById('c-capture')

captureGrandparent.addEventListener("click", e => {
    e.stopPropagation()
    console.log("Capture : Grandparent Clicked");
},true)

captureParent.addEventListener("click" , e => {
    e.stopPropagation()
    console.log("Capture : Parent Clicked");
}, true)


captureChild.addEventListener("click", e => {
    e.stopPropagation()
    console.log("Capture : Child Clicked");
}, true)