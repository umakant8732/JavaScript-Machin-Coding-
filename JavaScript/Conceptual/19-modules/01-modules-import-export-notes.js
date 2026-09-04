/**
 * Conceptual Q22: JavaScript Modules (import / export)
 * Folder: 19-modules
 *
 * SECTION 1: WHAT IS A MODULE?
 * - A JavaScript module is a standalone file with its own scope.
 * - Variables, functions, and classes defined inside a module are PRIVATE to that file
 *   unless explicitly exported using 'export'.
 *
 * SECTION 2: WHY USE MODULES?
 * 1. Scope Protection: Prevents global namespace pollution and variable name collisions.
 * 2. Reusability & Maintainability: Enables modular code architecture (Single Responsibility).
 * 3. Tree Shaking: Static ES Module imports allow bundlers (Vite/Webpack) to eliminate dead code.
 *
 * SECTION 3: NAMED EXPORT VS DEFAULT EXPORT
 * ------------------------------------------------------------------------------------------------
 * Feature             | Named Export (`export const foo`)    | Default Export (`export default foo`)
 * ------------------------------------------------------------------------------------------------
 * Quantity Per File   | MULTIPLE per file                    | ONLY ONE per file
 * Import Syntax       | MUST use curly braces `{ foo }`      | NO curly braces `foo`
 * Import Naming       | Name MUST match (or use `as` alias)  | Can be imported with ANY custom name
 * Primary Use Case    | Utility helper functions / constants | Main Component / Main Service Class
 * ------------------------------------------------------------------------------------------------
 *
 * SECTION 4: FILE STRUCTURE IN THIS MODULE:
 * - 01-modules-import-export-notes.js  -> Comprehensive Master Notes (this file)
 * - 02-math-utils.js                   -> Demonstrates Named Exports (add, subtract, PI)
 * - 03-user-service.js                 -> Demonstrates Default Export (UserService class)
 * - 04-main-demo.js                    -> Demonstrates Importing (Named, Default, Aliased, Wildcard)
 */

console.log("==========================================");
console.log("   JAVASCRIPT MODULES MASTER NOTES");
console.log("==========================================");
console.log("1. Modules provide file-level scope isolation.");
console.log("2. Use Named Exports (export const) for utility functions.");
console.log("3. Use Default Export (export default) for main component/service.");
console.log("4. Run 04-main-demo.js to see live import/export interactions!");
