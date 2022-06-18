require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 8000;

app.listen(PORT);
console.log(`Server listening on ${PORT}`)

console.log(process.env.TASTYAPI_KEY);

app.get('/', (req, res) => {
  res.json('Hi');
})
