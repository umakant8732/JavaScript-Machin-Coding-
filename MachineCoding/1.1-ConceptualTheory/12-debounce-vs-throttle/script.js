/**
 * Problem 12: Debounce vs Throttle
 * 
 * Implement custom debounce and throttle helper utilities.
 */

// 1. TODO: Implement a Debounce function
function debounce(func, delay) {
    // Return a debounced function wrapper
}

// 2. TODO: Implement a Throttle function
function throttle(func, limit) {
    // Return a throttled function wrapper
}

// Visual Playground binding
const debounceInput = document.getElementById('debounce-input');
const debounceCount = document.getElementById('debounce-count');
const debounceLogs = document.getElementById('debounce-logs');

const throttleBtn = document.getElementById('throttle-btn');
const throttleCount = document.getElementById('throttle-count');
const throttleLogs = document.getElementById('throttle-logs');

let dTriggerCount = 0;
let tTriggerCount = 0;

function logMessage(container, text) {
    const div = document.createElement('div');
    div.className = 'timeline-log';
    div.textContent = `[${new Date().toLocaleTimeString()}] ${text}`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

// Hook up your implementations here...
