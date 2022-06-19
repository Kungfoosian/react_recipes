require('dotenv').config();

const axios = require('axios');
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 8000;

app.use(cors());

app.listen(PORT);
console.log(`Server listening on ${PORT}`)

app.get('/', (req, res) => {
  res.json('Hi');
})

app.get('/recipes-by-name', (req, res) => {
  let recipe = req.query.q;
  console.log(`Server: looking for ${recipe}`);
  const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {from: '0', size: '10', q:recipe},
    headers: {
      'X-RapidAPI-Key': process.env.TASTYAPI_KEY,
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };
  
  axios.request(options)
  .then(response => {
    let filteredResults = filterMultiRecipeResults(response.data.results);

    let topResults = getTopResults(filteredResults, 6);

    res.json(topResults);
  }).catch(function (error) {
    console.error(error);
  });
})


function filterMultiRecipeResults(array) {
  return array.filter(element => !Object.hasOwn(element, 'recipes'))
}

function getTopResults(array, amountToReturn) {
  if(array.length <= amountToReturn) return array;

  return array.slice(0, amountToReturn);
}