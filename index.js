const mockDB = require('./mockDB')

const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/auth', (req, res) => {
    res.json(mockDB.users)
});

app.listen(8000, () => {
  console.log('Example app listeeening on port 8000!')
});