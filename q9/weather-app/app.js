const express = require("express");
const axios = require("axios");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Home page
app.get("/", (req, res) => {
  res.render("home");
});

// Handle form submission
app.post("/weather", async (req, res) => {
  const city = req.body.city;

  try {
    const apiKey = "87efaed1a43cd10885fd8714f69abf1c"; // replace this
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);
    const data = response.data;

    const weatherData = {
      city: data.name,
      temp: data.main.temp,
      humidity: data.main.humidity,
      condition: data.weather[0].description,
    };

    res.render("weather", { weather: weatherData });
  } catch (error) {
    res.send("Error fetching weather data");
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
