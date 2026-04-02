const key = Symbol("userKey");

let obj = {};

// Add
obj[key] = "Secret Data";

// Retrieve
console.log(obj[key]);

// Check existence
console.log(key in obj); // true
