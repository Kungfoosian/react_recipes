require('dotenv').config();

const axios = require('axios');
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 8000;

app.use(cors());

app.listen(PORT);
console.log(`Server listening on ${PORT}`)

app.get('/recipes-by-name', (req, res) => {
  let recipe = req.query.q;

  if(!validateInput(recipe)) {
    res.status(500).send({
      message: 'Server error'
    })
  }

  console.log(`Server: looking for ${recipe}`);

  const options = {
    method: 'GET',
    url: 'https://themealdb.p.rapidapi.com/search.php',
    params: { s: recipe },
    headers: {
      'X-RapidAPI-Key': process.env.MEALDB_KEY,
      'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
    }
  };
  
  axios.request(options)
  .then(response => {
    res.json(response.data.meals);
  }).catch(function (error) {
    console.error(error);
  });
})


app.get('/multi-ingredient-recipes', (req, res) => {
  let input = req.query.i;
  
  if(!validateInput(input)) {
    res.status(500).send({
    message: 'Server error'
  })
  }

  const options = {
    method: 'GET',
    url: 'https://themealdb.p.rapidapi.com/filter.php',
    params: { i: req.query.i },
    headers: {
      'X-RapidAPI-Key': process.env.MEALDB_KEY,
      'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
    }
  };

  axios.request(options)
  .then(response => res.json(response.data))
  .catch(err => {
    console.error(err);

    res.status(500).send({
      message: 'Server error'
    })
  });
})

app.get('/random-recipes', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://themealdb.p.rapidapi.com/randomselection.php',
    headers: {
      'X-RapidAPI-Key': process.env.MEALDB_KEY,
      'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
    }
  };
  
  axios.request(options)
  .then(response => res.json(response.data.meals))
  .catch(error => console.error(error));
})

function validateInput(input) {
  let filteredInput = input.trim().replace(/[^a-zA-Z0-9\s]/g, '');

  if(filteredInput.length) return filteredInput;

  return false;
}