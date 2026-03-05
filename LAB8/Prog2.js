const os = require('os');
const path = require('path');
const util = require('util');
const EventEmitter = require('events');


console.log(" OS MODULE :");
console.log("Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Home Directory:", os.homedir());


console.log("\n PATH MODULE :");
const filePath = path.join(__dirname, 'files', 'test.txt');
console.log("Joined Path:", filePath);
console.log("File Extension:", path.extname(filePath));
console.log("Directory Name:", path.dirname(filePath));
console.log("Base Name:", path.basename(filePath));


console.log("\n UTIL MODULE :");
const obj = { name: "NodeJS", type: "Runtime Environment" };
console.log(util.inspect(obj));


console.log("\n EVENTS MODULE :");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('greet', (name) => {
    console.log(`Hello ${name}, Event Triggered!`);
});
myEmitter.emit('greet', 'Surya');