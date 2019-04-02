const mockDB = require('./mockDB')

const express = require('express')
const app = express();
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/auth', (req, res) => {
    res.json(mockDB.users)
});

app.post('/auth', (req, res) => {
    for (let i = 0; i < mockDB.users.length; i++) {
        while (mockDB.users[i].email===req.body.email &&
            mockDB.users[i].password === req.body.password) {
            res.json(mockDB.users[i])
        }
    }
});

app.listen(8000, () => {
  console.log('Example app listeeening on port 8000!')
});