// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();

// Define the endpoint handler for GET /GetURL
app.get('/GetURL', (req, res) => {
  // Respond with the URL
  res.send('https://e6ab1fec2ddf461d86e7bb3f2b92d65a.us-central1.gcp.cloud.es.io:9243/app/dashboards#/view/3903cc73-e10b-4660-942e-77c08c2f7d6e');
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
