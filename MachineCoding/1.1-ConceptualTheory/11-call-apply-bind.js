/**
 * Problem 11: Call, Apply, Bind
 * 
 * Explain and implement binding contexts.
 * These methods borrow methods or explicitly set the context of the 'this' keyword.
 */

const user = {
    firstName: "Amit",
    lastName: "Sharma"
};

function printDetails(city, country) {
    console.log(`${this.firstName} ${this.lastName} is from ${city}, ${country}`);
}

// 1. TODO: Invoke printDetails using 'call' (bind 'user' and pass individual arguments)


// 2. TODO: Invoke printDetails using 'apply' (bind 'user' and pass arguments array)


// 3. TODO: Create a bound function using 'bind' and execute it later
