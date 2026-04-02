// ===============================
// JavaScript Symbols - All in One
// ===============================

// (i) Unique IDs using Symbols
console.log("---- (i) Unique IDs ----");

const id1 = Symbol("id");
const id2 = Symbol("id");

let user = {
  name: "John",
  [id1]: 101,
  [id2]: 202,
};

console.log("User Object:", user);
console.log("ID1:", user[id1]);
console.log("ID2:", user[id2]);

// (ii) Symbols as Object Keys
console.log("\n---- (ii) Symbols as Keys ----");

const key = Symbol("userKey");

let obj = {};

// Add
obj[key] = "Secret Data";

// Retrieve
console.log("Value:", obj[key]);

// Check existence
console.log("Key exists?", key in obj);

// (iii) Symbols for Metadata
console.log("\n---- (iii) Metadata using Symbol ----");

const meta = Symbol("metadata");

let product = {
  name: "Laptop",
  price: 50000,
};

// Add metadata
product[meta] = {
  createdBy: "Admin",
  version: 1.0,
};

console.log("Product:", product);
console.log("Metadata:", product[meta]);

// (iv) Custom Iterable using Symbol.iterator
console.log("\n---- (iv) Custom Iterable ----");

let myCollection = {
  items: ["A", "B", "C"],

  [Symbol.iterator]: function () {
    let index = 0;
    let items = this.items;

    return {
      next: function () {
        if (index < items.length) {
          return { value: items[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// Iterate using for...of
for (let item of myCollection) {
  console.log("Item:", item);
}
