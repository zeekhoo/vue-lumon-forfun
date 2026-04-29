const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const port = 3000
app.use(bodyParser.json())

// Enable CORS for all routes
app.use(cors());

require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/cold-harbor', async (req, res) => {  
  const data = req.body
  // console.log('Request body:', data)
  const token = data.turnstileToken;
  const key = process.env.TURNSTILE_KEY;
  console.log('Received token:', token);
  console.log('Expected key:', key);
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: key,
        response: token,
      }),
    });
    const verificationResult = await res.json();
    console.log('Verification result:', verificationResult);
  } catch (error) {
    console.error('Error during verification:', error);
  }

  res.send(`Received data: ${data.data}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})