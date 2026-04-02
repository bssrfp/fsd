// Creating Symbols
const id1 = Symbol("id");
const id2 = Symbol("id");

let user = {
  name: "John",
  [id1]: 101,
  [id2]: 202,
};

console.log(user);
console.log(user[id1]); // 101
console.log(user[id2]); // 202
