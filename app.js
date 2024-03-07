// Import required modules
const express = require('express');
const cors = require('cors');

// Create an instance of Express
const app = express();
app.use(cors());

// Define the endpoint handler for GET /GetURL
app.get('/GetURL', (req, res) => {
  // Respond with the URL
  res.send('https://e6ab1fec2ddf461d86e7bb3f2b92d65a.us-central1.gcp.cloud.es.io:9243/app/dashboards?auth_provider_hint=anonymous1#/view/72f756c9-b0c3-4ad1-8445-e385c95135f8?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A60000)%2Ctime%3A(from%3Anow-1y%2Fd%2Cto%3Anow))&hide-filter-bar=true');
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
