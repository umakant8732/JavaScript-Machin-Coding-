/**
 * Conceptual Q17: preventDefault vs stopPropagation
 * Folder: 24-preventdefault-vs-stoppropagation
 * Related existing (untouched): 01-event-delegation, 06-07-event-bubble-capture
 *
 * Tasks:
 * 1. preventDefault = prevent browser's DEFAULT action
 *    Scenarios (explain each):
 *      A) form submit → page reload avoid
 *      B) <a href> click → navigate avoid
 *      C) any other default browser behavior you want to prevent
 * 2. stopPropagation = prevent event from propagating to parent handlers
 *    Scenarios (explain each):
 *      A) button inside clickable card
 *      B) dropdown item vs document outside-click
 *      C) nested menus
 * 3. event.target vs event.currentTarget — key difference
 * 4. Fill in the rules:
 *      Prevent default browser behavior → _______________
 *      Block parent event listeners     → _______________
 * 5. When to use both together? (rare — think of an example)
 *
 * Write your notes below when ready...
 */
