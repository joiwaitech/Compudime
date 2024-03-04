const express = require('express');
const https = require('https'); // Use HTTPS for secure communication

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port or default to 3000

// This function simulates fetching a URL from an external API (replace with actual logic)
function getExternalUrl() {
  return new Promise((resolve, reject) => {
    const url = 'https://www.example.com/api/get-url'; // Replace with actual API endpoint

    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          resolve(response.url); // Assuming the API response has a "url" property
        } catch (error) {
          console.error('Error parsing external API response:', error);
          reject(error);
        }
      });
    }).on('error', (error) => {
      console.error('Error fetching URL from external API:', error);
      reject(error);
    });
  });
}

app.get('/GetURL', async (req, res) => {
  try {
    // Replace with actual fetching logic (consider using a real API or secure data source)
    const url = 'www.google.com'; // Placeholder URL, remove for external API call

    res.status(200).json({ url });
  } catch (error) {
    console.error('Error retrieving URL:', error);
    res.status(500).json({ message: 'Internal Server Error' }); // Handle errors gracefully
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
