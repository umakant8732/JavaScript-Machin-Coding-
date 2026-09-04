/**
 * JAVASCRIPT OBJECTS THEORY NOTES
 * 
 * 1. What is an Object?
 * - An Object is a non-primitive data structure used to store collections of key-value pairs.
 * - Stored in Heap Memory as a reference type.
 * 
 * 2. Key Characteristics:
 * - Keys: Object keys MUST be Strings or Symbols (non-string keys are automatically coerced to strings).
 * - Values: Can be any type (Primitives, Arrays, Functions, Objects).
 * - Methods: Functions attached to an object property are called methods.
 * - Prototype Link: Every plain object inherits from Object.prototype.
 * 
 * 3. Core Properties & Accessors:
 * - Dot Notation: obj.key
 * - Bracket Notation: obj["key"] (supports dynamic variable keys)
 * - Object.keys(obj): Returns array of own enumerable string keys.
 * - Object.values(obj): Returns array of own enumerable property values.
 * - Object.entries(obj): Returns array of [key, value] pairs.
 * 
 * 4. Object Immutability & Protection:
 * - Object.seal(obj): Prevents adding or deleting properties, but ALLOWS modifying existing property values.
 * - Object.freeze(obj): Prevents adding, deleting, OR modifying existing property values (Complete Immutability).
 */


//key coercion to string

const user = {}

//1. adding number as key
user[100] = "Numeric Key Value"

//2. adding boolean as key

user[true] = "Boolean Key Value"

// 3. Accessing via Strings
console.log("Accessing 100 via string '100':", user["100"]); // "Numeric Key Value"
console.log("Accessing true via string 'true':", user["true"]); // "Boolean Key Value"



// --- STEP 2: Dot Notation vs Bracket Notation ---

const dynamicKey = "role";
const employee = {
  name: "John",
  role: "Software Engineer",
  "user-location": "California"
};


// 1. Static Dot Notation
console.log("1. Dot Notation:", employee.role); // Output: "Software Engineer"
// 2. Dot Notation with Variable (Fails - returns undefined!)
console.log("2. Dot Notation with Variable:", employee.dynamicKey); // undefined
// 3. Bracket Notation with Variable (Works!)
console.log("3. Bracket Notation with Variable:", employee[dynamicKey]); // "Software Engineer"
// 4. Bracket Notation for hyphenated keys
console.log("4. Bracket Notation for hyphenated key:", employee["user-location"]); // "California"


// Step 3: Object Utilities & Object.freeze() vs Object.seal()


const car =  {
    brand : "Tesla",
    model : "Model 3"
}

//1. Static Iteration Utilities


// 1. Static Iteration Utilities
console.log("1. Object.keys():", Object.keys(car));     // ['brand', 'model']
console.log("2. Object.values():", Object.values(car)); // ['Tesla', 'Model 3']
console.log("3. Object.entries():", Object.entries(car)); // [ ['brand', 'Tesla'], ['model', 'Model 3'] ]


// 2. Object.seal() vs Object.freeze()

const sealedItem = {price : 100}

Object.seal(sealedItem)

sealedItem.price = 150; //allowed! we can modify old values
sealedItem.color = "red" //ignored ! we can add new property
console.log("4. Sealed Item:", sealedItem); // { price: 150 }


const frozenItem = {price : 100}

Object.freeze(frozenItem)
frozenItem.price = 200;    // IGNORED! we cant change old values
console.log("5. Frozen Item:", frozenItem); // { price: 100 }



// --- STEP 4: Comprehensive Master Object (All Key & Value Types) ---

const secretSymbolKey = Symbol("userUuid");
const dynamicKeyName = "department";

const masterUserObject = {
  // A. ALL TYPES OF KEYS ALLOWED
  id: 101,                            // Standard String Key
  "full name": "Umakant Bhendarkar",  // String Key with space
  "user-role": "Senior Engineer",     // String Key with hyphen
  100: "Numeric Key (coerced)",       // Number Key (coerced to '100')
  [secretSymbolKey]: "UUID-9821-X",   // Symbol Key
  [dynamicKeyName]: "Engineering",    // Dynamic Computed Key

  // B. ALL TYPES OF VALUES ALLOWED
  age: 26,                            // Number
  isVerified: true,                   // Boolean
  secondaryEmail: null,               // Null
  tempData: undefined,                // Undefined
  netWorth: 9007199254740991n,        // BigInt
  skills: ["JavaScript", "React"],    // Array
  location: { city: "Mumbai" },       // Nested Object
  projects: [{ title: "App 1" }],     // Array of Objects
  greet() { return `Hi, my name is ${this["full name"]}`; } // Method
};

console.log("Master Object ID:", masterUserObject.id);
console.log("Master Object Symbol Key:", masterUserObject[secretSymbolKey]);
console.log("Master Object Greet Method:", masterUserObject.greet());
