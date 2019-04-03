const mockDB = require('./mockDB')

const express = require('express')
var cors = require('cors');
const app = express();
app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/auth', (req, res) => {
    res.json(mockDB.users)
});

app.post('/auth', (req, res) => {
  const {users, shipmentData} = mockDB
  let shipments = [];
    for (let i = 0; i < mockDB.users.length; i++) {
        // while (mockDB.users[i].email===req.body.email &&
        //     mockDB.users[i].password === req.body.password) {
        //     res.json(mockDB.users[i])
        // }
        if (mockDB.users[i].email===req.body.email &&
          mockDB.users[i].password === req.body.password) {
            for (let j = 0; j < shipmentData.length; j++){
              if (shipmentData[j].bikerid === mockDB.users[i].bikerid){
                shipments.push(shipmentData[j])
              }
            }
            res.json({status:200, shipments, ...mockDB.users[i] })
          }
        else if(i=== mockDB.users.length -1){
          res.json({status: 404, info:"Invalid Username or Password"})
        }
    }
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Example app listeeening on port 5000!')
});