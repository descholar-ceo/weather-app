const path = require('path');
const express = require('express');
require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(PORT);
