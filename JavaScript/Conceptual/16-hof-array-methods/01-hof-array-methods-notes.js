/**
 * Conceptual Q12: Higher-Order Functions & Array Methods
 * Folder: 16-hof-array-methods
 *
 * Summary of Core Concepts:
 * 1. HOF Definition: A function that accepts callback functions or returns a new function.
 * 2. When to use:
 *    - map: Transform every element (Input length === Output length).
 *    - filter: Select elements matching a condition (Output length <= Input length).
 *    - reduce: Combine elements into a single value, object, or array.
 *    - forEach: Perform side-effects for each element (Returns undefined).
 * 3. map vs reduce:
 *    - map is strictly 1-to-1 transformation returning an array of identical size.
 *    - reduce is a flexible accumulator that can return numbers, objects, or arrays.
 *    - reduce is a superset of map and filter (can replicate map/filter behavior).
 */

// ==========================================
// 1. HIGHER-ORDER FUNCTION (HOF) DEFINITION
// ==========================================
// Definition: A function that accepts a function as argument OR returns a function.

function createMultiplier(factor) {
    return function(num) {
        return num * factor;
    };
}

const double = createMultiplier(2);
console.log("1. HOF Output (createMultiplier):", double(5)); // Output: 10


// ==========================================
// 2. ARRAY METHOD: .map()
// ==========================================
// Purpose: Transform EVERY element into a new form (Input length === Output length).

const mapUsersArray = [
    { id: 1, firstName: "John", lastName: "Doe", role: "Admin" },
    { id: 2, firstName: "Jane", lastName: "Smith", role: "user" },
    { id: 3, firstName: "Rahul", lastName: "Sharma", role: "user" }
];

const formattedUserNames = mapUsersArray.map((user) => {
    return `${user.firstName} ${user.lastName} (${user.role.toUpperCase()})`;
});

console.log("2. Transformed Map Array:", formattedUserNames);


// ==========================================
// 3. ARRAY METHOD: .filter()
// ==========================================
// Purpose: Select elements based on a boolean condition (Output length <= Input length).

const filterProductsArray = [
    { id: 101, name: "Laptop", price: 1200, category: "electronics" },
    { id: 102, name: "Mouse", price: 25, category: "electronics" },
    { id: 103, name: "Shirt", price: 45, category: "clothing" },
    { id: 104, name: "Headphones", price: 150, category: "electronics" }
];

const affordableElectronics = filterProductsArray.filter((product) => {
    return product.category === "electronics" && product.price < 500;
});

console.log("3. Filtered Affordable Electronics:", affordableElectronics);


// ==========================================
// 4. ARRAY METHOD: .reduce()
// ==========================================
// Purpose: Combine/Accumulate elements into a single result (number, object, array).

// Example 4A: Sum of numbers/prices (Single Number Result)
const reduceCartItemsArray = [
    { item: "Laptop", price: 1000 },
    { item: "Mouse", price: 50 },
    { item: "Keyboard", price: 80 }
];

const totalCartPrice = reduceCartItemsArray.reduce((acc, currentItem) => {
    return acc + currentItem.price;
}, 0);

console.log("4A. Total Cart Price ($):", totalCartPrice);

// Example 4B: Grouping Array into an Object (Single Object Result)
const reduceCategoryProductsArray = [
    { name: "Laptop", category: "electronics" },
    { name: "Shirt", category: "clothing" },
    { name: "Mouse", category: "electronics" },
    { name: "Jeans", category: "clothing" }
];

const groupedProducts = reduceCategoryProductsArray.reduce((acc, product) => {
    const key = product.category;
    if (!acc[key]) {
        acc[key] = [];
    }
    acc[key].push(product.name);
    return acc;
}, {});

console.log("4B. Grouped Products by Category:", groupedProducts);


// ==========================================
// 5. KEY DIFFERENCE: .map() VS .reduce()
// ==========================================
// Note: .reduce() is a superset of .map(). You can replicate .map() using .reduce()!

const numbersForComparison = [1, 2, 3];

// Approach A: Using .map() to double numbers
const doubledWithMap = numbersForComparison.map((num) => num * 2);

// Approach B: Replicating .map() using .reduce()
const doubledWithReduce = numbersForComparison.reduce((acc, num) => {
    acc.push(num * 2);
    return acc;
}, []);

console.log("5A. Doubled using .map():", doubledWithMap);       // [2, 4, 6]
console.log("5B. Doubled using .reduce():", doubledWithReduce); // [2, 4, 6]


// ==========================================
// 6. ARRAY METHOD: .forEach()
// ==========================================
// Purpose: Perform side-effects for each element (Returns undefined).

const forEachItemsArray = ["Apple", "Banana", "Cherry"];

console.log("6. forEach Side-Effects Logging:");
forEachItemsArray.forEach((item, index) => {
    console.log(`   [${index}]: ${item}`);
});
