function getNumber(num) {
    return new Promise((resolve, reject) => {
        console.log("First Promise: Received number =", num);

        if (typeof num !== "number") {
            reject("Input is not a number");
        } else {
            resolve(num);
        }
    });
}
function checkEvenAndMultiply(num) {
    return new Promise((resolve, reject) => {
        console.log("Second Promise: Checking even/odd");

        if (num % 2 === 0) {
            resolve(num * 2);
        } else {
            reject("Number is odd. Promise rejected.");
        }
    });
}

getNumber(8)
    .then(checkEvenAndMultiply)
    .then(result => {
        console.log("Final Result:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    });
