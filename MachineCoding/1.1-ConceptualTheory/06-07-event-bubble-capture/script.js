/**
 * Problem 6 & 7: Event Bubbling & Event Capturing
 * 
 * 1. Implement Event Listeners for grandparent, parent, and child divs.
 * 2. Toggle dynamically between Bubbling (default) and Capturing based on check-capture element status.
 * 3. Log event sequences directly to the screen console.
 * 4. Toggle event propagation cancellation using 'chk-stop' check.
 */

const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

const chkCapture = document.getElementById('chk-capture');
const chkStop = document.getElementById('chk-stop');
const logsContainer = document.getElementById('logs');
const btnClear = document.getElementById('btn-clear-logs');

function addLog(elementName, phase) {
    if (logsContainer.children.length === 1 && logsContainer.children[0].style.color === 'rgb(107, 114, 128)') {
        logsContainer.innerHTML = '';
    }
    const log = document.createElement('div');
    log.className = `log-entry log-${elementName.toLowerCase()}`;
    log.textContent = `${elementName} clicked during ${phase} phase`;
    logsContainer.appendChild(log);
}

btnClear.addEventListener('click', () => {
    logsContainer.innerHTML = '<div class="log-entry" style="color: #6b7280;">Click inside nested boxes to trigger events...</div>';
});

// TODO: Implement click handlers and bind capturing behavior
// Write event registration code here...
