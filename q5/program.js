// =====================================
// Async/Await with Promises Example
// =====================================

const fs = require("fs");

// 1. Function to check absolute value
function findAbsolute(n) {
  return new Promise((resolve, reject) => {
    if (n >= 0) {
      resolve("Absolute value!!");
    } else {
      reject("Invalid");
    }
  });
}

// 2. Async function
async function findResult() {
  try {
    // Read value from file
    const data = fs.readFileSync("input.txt", "utf-8");
    const n = parseInt(data);

    // 3. Await promise
    const result = await findAbsolute(n);

    // 4. Display result
    console.log("Result:", result);
  } catch (error) {
    console.log("Error:", error);
  }
}

// Call function
findResult();
