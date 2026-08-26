/**
 * Conceptual Q17: preventDefault vs stopPropagation
 * Folder: 24-preventdefault-vs-stoppropagation
 * Related existing (untouched): 01-event-delegation, 06-07-event-bubble-capture
 *
 * Tasks:
 * 1. preventDefault = browser ka DEFAULT action roko
 *    Scenarios (explain each):
 *      A) form submit → page reload avoid
 *      B) <a href> click → navigate avoid
 *      C) koi aur default jo tum nahi chahte
 * 2. stopPropagation = event parent handlers tak na jaye
 *    Scenarios (explain each):
 *      A) button inside clickable card
 *      B) dropdown item vs document outside-click
 *      C) nested menus
 * 3. event.target vs event.currentTarget — farq
 * 4. Rule fill karo:
 *      Default browser behavior rokna → _______________
 *      Parent listener block karna     → _______________
 * 5. Dono ek saath kab? (rare — example socho)
 *
 * Write your notes below when ready...
 */
