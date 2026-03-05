
let car = {
    color: "red",
    model: "Toyota Camry",
    year: 2020
};

console.log("Initial car object:", car);

car.price = 25000;
console.log("After adding price:", car);

car.color = "blue";
console.log("After updating color:", car);

delete car.year;
console.log("After deleting year:", car);
