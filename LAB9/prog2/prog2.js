const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Express Server</h1>');
});

app.get('/text', (req, res) => {
    res.send('This is TEXT response from Express');
});

app.get('/json', (req, res) => {
    res.json({
        name: "Siddarth",
        subject: "Working with Express",
        status: "Success"
    });
});

app.listen(3000, () => {
    console.log("Express server running at http://localhost:3000");
});