const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'ejs');

const API_URL = "https://jsonplaceholder.typicode.com/users";

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        res.render('users', { users: response.data });
    } catch (error) {
        res.send("Error fetching data");
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});