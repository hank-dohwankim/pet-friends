import express from 'express';
import dotenv from 'dotenv';
import pets from './data/pets.js';

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/pets', (req, res) => {
  res.json(pets);
});

app.get('/api/pets/:id', (req, res) => {
  const pet = pets.find((p) => p._id === req.params.id);
  res.json(pet);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
