const express = require("express");
const admin = require("firebase-admin");

const app = express();
app.use(express.json());

// Firebase config
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// ===============================
// CREATE
// ===============================
app.post("/tasks", async (req, res) => {
  const data = req.body;
  const docRef = await db.collection("tasks").add(data);
  res.json({ id: docRef.id, ...data });
});

// ===============================
// READ ALL
// ===============================
app.get("/tasks", async (req, res) => {
  const snapshot = await db.collection("tasks").get();
  let tasks = [];
  snapshot.forEach((doc) => {
    tasks.push({ id: doc.id, ...doc.data() });
  });
  res.json(tasks);
});

// ===============================
// READ ONE
// ===============================
app.get("/tasks/:id", async (req, res) => {
  const doc = await db.collection("tasks").doc(req.params.id).get();
  res.json({ id: doc.id, ...doc.data() });
});

// ===============================
// UPDATE
// ===============================
app.put("/tasks/:id", async (req, res) => {
  await db.collection("tasks").doc(req.params.id).update(req.body);
  res.json({ message: "Updated successfully" });
});

// ===============================
// DELETE
// ===============================
app.delete("/tasks/:id", async (req, res) => {
  await db.collection("tasks").doc(req.params.id).delete();
  res.json({ message: "Deleted successfully" });
});

// ===============================
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
