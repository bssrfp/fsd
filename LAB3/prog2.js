console.log("1. Start of program");

function syncFunction(callback) {
    console.log("2. Inside sync function");
    callback();
}

syncFunction(() => {
    console.log("3. Callback executed synchronously");

    setTimeout(() => {
        console.log("5. Async callback from setTimeout");
    }, 1000);
});

console.log("4. End of program");
