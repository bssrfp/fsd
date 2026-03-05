const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'tempFiles');
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log("Directory created successfully!");
}
fs.writeFileSync(path.join(dirPath, 'sample.txt'), "This is a text file.");
console.log("Text file created!");
const jsonData = {
    name: "Surya",
    course: "FSD Lab"
};
fs.writeFileSync(
    path.join(dirPath, 'data.json'),
    JSON.stringify(jsonData, null, 2)
);
console.log("JSON file created!");
const htmlContent = `
<html>
<head><title>Node JS</title></head>
<body><h1>Node JS File Created</h1></body>
</html>
`;
fs.writeFileSync(path.join(dirPath, 'index.html'), htmlContent);
console.log("HTML file created!");