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
  // console.log(req.query.q);
  const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {from: '0', size: '5', q:recipe},
    headers: {
      'X-RapidAPI-Key': process.env.TASTYAPI_KEY,
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };
  
  axios.request(options)
  .then(response => {
    res.json(response.data);
  }).catch(function (error) {
    console.error(error);
  });
})
