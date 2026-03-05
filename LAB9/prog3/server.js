const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

let users = [
    { id: 1, name: "Ram", email: "ram@gmail.com" },
    { id: 2, name: "Sita", email: "sita@gmail.com" }
];

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);
    res.json(newUser);
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (user)
        res.json(user);
    else
        res.status(404).json({ message: "User not found" });
});

app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);

    if (user) {
        user.name = req.body.name;
        user.email = req.body.email;
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.json({ message: "User deleted successfully" });
});

app.get('/view-users', (req, res) => {
    res.render('users', { users });
});

app.get('/', (req, res) => {
    res.json(users);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});