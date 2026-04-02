// =====================================
// Express + MongoDB Movie CRUD API
// =====================================

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// ===============================
// Connect to MongoDB
// ===============================
mongoose
  .connect("mongodb://127.0.0.1:27017/moviedb")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// ===============================
// Schema & Model
// ===============================
const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  releaseYear: Number,
  genre: String,
});

const Movie = mongoose.model("Movie", movieSchema);

// ===============================
// POST - Add Movie
// ===============================
app.post("/movies", async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ===============================
// GET - All Movies
// ===============================
app.get("/movies", async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

// ===============================
// GET - Movie by ID
// ===============================
app.get("/movies/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: "Not found" });
    res.json(movie);
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
});

// ===============================
// PUT - Update Movie
// ===============================
app.put("/movies/:id", async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(movie);
  } catch {
    res.status(400).json({ message: "Update failed" });
  }
});

// ===============================
// DELETE - Remove Movie
// ===============================
app.delete("/movies/:id", async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: "Movie deleted" });
  } catch {
    res.status(400).json({ message: "Delete failed" });
  }
});

// ===============================
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
