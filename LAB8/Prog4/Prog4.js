
const fs = require('fs');
const path = require('path');
const samplePath = path.join(__dirname, 'sample.txt');
const copiedPath = path.join(__dirname, 'copied.txt');
const readStream = fs.createReadStream(samplePath, 'utf8');
const writeStream = fs.createWriteStream(copiedPath);
readStream.on('data', (chunk) => {
    console.log("Reading chunk...");
    writeStream.write(chunk);
});
readStream.on('end', () => {
    console.log("File copied successfully!");
});
readStream.on('error', (err) => {
    console.log("Error:", err.message);
});
