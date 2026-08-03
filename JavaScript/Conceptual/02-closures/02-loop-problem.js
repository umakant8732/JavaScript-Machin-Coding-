/**
 * Part 2: Loop with Closures (The var vs let issue)
 */

// --- Scenario A: Loop with 'var' (The problem) ---
function runLoopWithVar() {
    for (var i = 1; i <= 3; i++) {
        setTimeout(function() {
            console.log("var loop:", i);
        }, i * 1000);
    }
}
// runLoopWithVar(); // Prints: 4, 4, 4 after delay

// 🙋‍♂️ Cross Question 2:
// Why does it print 4 instead of 3? Where does this 4 come from since the loop condition is i <= 3?


// --- Scenario B: Fixed Loop with 'let' (The fix) ---
function runLoopWithLet() {
    for (let i = 1; i <= 3; i++) {
        setTimeout(function() {
            console.log("let loop:", i);
        }, i * 1000);
    }
}
// runLoopWithLet(); // Prints: 1, 2, 3 after delay

// 🙋‍♂️ Cross Question 3:
// Under the hood, how does 'let' fix this? Does the JS engine create a new variable 'i' for every loop step?
