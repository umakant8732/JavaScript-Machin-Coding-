/*
 * CONCEPT: JSON.parse(JSON.stringify(obj)) vs structuredClone(obj)
 * 
 * 1. JSON.parse(JSON.stringify(obj)) - Legacy Hack
 *    - Converts object to JSON string, then parses it back.
 *    - Flaws:
 *      - Loses undefined, functions, and Symbol keys.
 *      - Converts Date objects to ISO Strings.
 *      - Crashes on Circular References.
 *      - Converts Maps/Sets into empty objects {}.
 * 
 * 2. structuredClone(obj) - Modern Native Web API (Node 17+)
 *    - Natively deep clones objects.
 *    - Strengths:
 *      - Keeps Date objects as Dates.
 *      - Correctly copies Map, Set, RegExp, and ArrayBuffers.
 *      - Handles circular references safely without crashing.
 *    - Limitation:
 *      - Cannot clone functions (throws DataCloneError due to Lexical Scope/Closures).
 */

// ========================
// 1. LEGACY HACK: JSON.stringify
// ========================
const originalObj = {
    num: 1,
    date: new Date(),
    mySet: new Set([10, 20]),
    undef: undefined,
    greet: () => console.log("Hello")
};

// Circular reference simulation (uncommenting this crashes JSON.stringify)
// originalObj.self = originalObj; 

try {
    const jsonClone = JSON.parse(JSON.stringify(originalObj));
    console.log("--- JSON Clone Results ---");
    console.log("date type:", typeof jsonClone.date);      // Output: string (Lost Date class!)
    console.log("mySet:", jsonClone.mySet);                // Output: {} (Lost Set!)
    console.log("undef:", "undef" in jsonClone);           // Output: false (Key deleted!)
    console.log("greet:", jsonClone.greet);                // Output: undefined (Function deleted!)
} catch (e) {
    console.error("JSON Clone crashed:", e.message);
}

// ========================
// 2. MODERN WAY: structuredClone
// ========================
const originalSetDate = {
    num: 1,
    date: new Date(),
    mySet: new Set([10, 20])
};

// Safe circular reference
originalSetDate.self = originalSetDate;

console.log("\n--- structuredClone Results ---");
const nativeClone = structuredClone(originalSetDate);
console.log("date is Date class?:", nativeClone.date instanceof Date); // Output: true (Date preserved!)
console.log("mySet has 10?:", nativeClone.mySet.has(10));             // Output: true (Set preserved!)
console.log("Circular reference safe?:", nativeClone.self === nativeClone); // Output: true (Safe!)

// ========================
// 3. THE LIMITATION: Cloning Functions
// ========================
const funcObj = {
    name: "Umakant",
    sayHello: () => console.log("Hello")
};

try {
    // This will THROW an error because functions cannot be deep cloned natively.
    // Reason: Functions carry closures (lexical environment), which cannot be duplicated in memory.
    structuredClone(funcObj);
} catch (e) {
    console.log("\nFunction Clone Error:", e.message); // Output: DataCloneError: ... could not be cloned.
}
