const express = require("express");
const app = express();

app.use(express.json());

// In-memory database
let students = [];
let idCounter = 1;

// ===============================
// POST - Add Student
// ===============================
app.post("/students", (req, res) => {
  const { name, age, className, grade } = req.body;

  const student = {
    id: idCounter++,
    name,
    age,
    className,
    grade,
  };

  students.push(student);
  res.status(201).json(student);
});

// ===============================
// GET - All Students
// ===============================
app.get("/students", (req, res) => {
  res.json(students);
});

// ===============================
// GET - Student by ID
// ===============================
app.get("/students/:id", (req, res) => {
  const student = students.find((s) => s.id == req.params.id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});

// ===============================
// PUT - Update Student
// ===============================
app.put("/students/:id", (req, res) => {
  const student = students.find((s) => s.id == req.params.id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  const { name, age, className, grade } = req.body;

  if (name) student.name = name;
  if (age) student.age = age;
  if (className) student.className = className;
  if (grade) student.grade = grade;

  res.json(student);
});

// ===============================
// DELETE - Remove Student
// ===============================
app.delete("/students/:id", (req, res) => {
  students = students.filter((s) => s.id != req.params.id);
  res.json({ message: "Student deleted successfully" });
});

// ===============================
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
