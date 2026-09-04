/**
 * ES6 ESSENTIAL 3: TEMPLATE LITERALS (`...`)
 * 
 * Definition:
 * String literals allowing embedded expressions, multi-line formatting,
 * and string interpolation using backticks (`) instead of single/double quotes.
 * 
 * When to use:
 * 1. String Interpolation (${expression}) - avoiding tedious '+' concatenation.
 * 2. Multi-line Strings - clean HTML template generation without '\n' or '+' operators.
 * 3. Embedding JS expressions & ternary operators (${condition ? A : B}).
 * 4. Tagged Template Literals - custom formatting (e.g. styled-components / XSS escaping).
 */

const product = "MacBook Pro";
const price = 1500;
const inStock = true;

// 1. String Interpolation & Ternary Condition
const productSummary = `Product: ${product} | Final Cost (+18% Tax): $${price * 1.18} | Status: ${inStock ? "IN STOCK" : "OUT OF STOCK"}`;

console.log("1. Template Literal Summary:");
console.log("  ", productSummary);


// 2. Multi-line HTML Template
const componentHTML = `
  <div class="product-card">
    <h3>${product}</h3>
    <span>Price: $${price}</span>
  </div>
`;

console.log("\n2. Multi-line HTML Layout:");
console.log(componentHTML);


// 3. Tagged Template Literal (Advanced Feature)
function highlight(strings, ...values) {
    return strings.reduce((acc, str, i) => `${acc}${str}<b>${values[i] || ""}</b>`, "");
}

const userName = "Rahul";
const userRole = "Admin";
console.log("3. Tagged Template Output:");
console.log("  ", highlight`User ${userName} is assigned role ${userRole}`);
