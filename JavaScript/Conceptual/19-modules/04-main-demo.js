/**
 * MODULE SCENARIO 3: IMPORTING MODULES (ALL SYNTAX PATTERNS)
 * File: 04-main-demo.js
 * 
 * Demonstrates:
 * 1. Importing Named Exports using Destructuring: { add, subtract }
 * 2. Importing Named Exports with Aliasing: { multiply as mul }
 * 3. Importing Wildcard / Namespace: * as MathUtils
 * 4. Importing Default Export: UserService (NO curly braces)
 */

// CommonJS equivalent of ES6 imports for Node runtime execution:
const mathUtils = require('./02-math-utils');
const { add, subtract, multiply: mul, PI } = mathUtils;

const UserService = require('./03-user-service');

console.log("==========================================");
console.log("   LIVE MODULE DEMO EXECUTION");
console.log("==========================================");

// 1. Using Named Exports
console.log("\n1. Named Exports Execution:");
console.log("   add(10, 5):", add(10, 5));           // Output: 15
console.log("   subtract(10, 5):", subtract(10, 5)); // Output: 5
console.log("   Aliased multiply (mul):", mul(4, 5)); // Output: 20
console.log("   Constant PI:", PI);                  // Output: 3.14159

// 2. Using Wildcard / Namespace Import (mathUtils.add)
console.log("\n2. Wildcard Namespace Import Execution:");
console.log("   mathUtils.add(100, 50):", mathUtils.add(100, 50)); // Output: 150

// 3. Using Default Export (UserService)
console.log("\n3. Default Export Execution:");
const userService = new UserService();
console.log("   All Users:", userService.getAllUsers());
console.log("   User ID 1:", userService.getUserById(1));

console.log("\n==========================================");
console.log("   SUMMARY OF ES6 SYNTAX PATTERNS:");
console.log("   - Named Import:   import { add } from './02-math-utils'");
console.log("   - Alias Import:   import { multiply as mul } from './02-math-utils'");
console.log("   - Wildcard Import:import * as MathUtils from './02-math-utils'");
console.log("   - Default Import: import UserService from './03-user-service'");
console.log("==========================================");
