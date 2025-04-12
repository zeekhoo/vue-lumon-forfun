const express = require('express')
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const port = 3000
app.use(bodyParser.json())

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/cold-harbor', (req, res) => {
  const data = req.body
  console.log(data)
  res.send(`Received data: ${JSON.stringify(data)}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})