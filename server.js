// server.js

const express = require('express');
const fetch = require('node-fetch');

const app = express();

// Define a route to proxy the request
app.get('/getIframeURL', async (req, res) => {
  try {
    // Make the request to the external API
    const response = await fetch('https://compudime.onrender.com/GetURL');
    const data = await response.text();
    
    // Forward the response data
    res.send(data);
  } catch (error) {
    console.error('Error fetching URL:', error);
    res.status(500).send('Error fetching URL');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
