const meta = Symbol("metadata");

let product = {
  name: "Laptop",
  price: 50000,
};

// Adding metadata
product[meta] = {
  createdBy: "Admin",
  version: 1.0,
};

console.log(product);
console.log(product[meta]);
