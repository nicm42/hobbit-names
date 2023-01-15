// https://github.com/joeynguyen/vite-react-express-boilerplate/blob/main/src/server.js

const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

const link = 'https://the-one-api.dev/v2/character?race=Hobbit';
const key = process.env.API_KEY;
const headers = {
  Accept: 'application/json',
  Authorization: `Bearer ${key}`,
};

// Middleware that parses json and looks at requests where the Content-Type header matches the type option.
app.use(express.json());

// Serve API request
app.get('/api', async (req, res) => {
  console.log('Fetching data');
  const fetchAPI = await fetch(link, {
    method: 'GET',
    headers: headers,
  });
  const response = await fetchAPI.json();
  res.json(response);
});

// Serve app production bundle
app.use(express.static('dist/app'));

// Handle client routing, return all requests to the app
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
