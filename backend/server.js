import express from "express";
import dotenv from "dotenv";
import pets from "./data/pets.js";
import users from "./data/users.js";
import profiles from "./data/profiles.js";
import bodyParser from "body-parser";

const app = express();
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/pets", (req, res) => {
  res.json(pets);
});

app.get("/api/pets/:id", (req, res) => {
  const pet = pets.find((p) => p._id === req.params.id);
  res.json(pet);
});

app.get("/api/profiles/:id", (req, res) => {
  const profile = profiles.find((p) => p._id === req.params.id);
  res.json(profile);
});

app.post("/api/users/login", jsonParser, (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);
  if (user && user.password == password) {
    res.json({
      _id: user.id,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
