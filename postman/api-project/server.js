const express = require("express");
const app = express();

app.use(express.json());

let tasks = [];
let id = 1;

// CREATE
app.post("/tasks", (req, res) => {
  const task = { id: id++, ...req.body };
  tasks.push(task);
  res.json(task);
});

// READ ALL
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// READ ONE
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id == req.params.id);
  res.json(task);
});

// UPDATE
app.put("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id == req.params.id);
  Object.assign(task, req.body);
  res.json(task);
});

// DELETE
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter((t) => t.id != req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
