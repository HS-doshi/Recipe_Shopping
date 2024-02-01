const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Move the cors middleware below the creation of app
app.use(cors());

// Proxy endpoint
app.post('/signup', async (req, res) => {
  try {
    // Forward request to Google Identity Toolkit API
    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp', req.body, {
      params: {
        key: 'AIzaSyCow8sqjaMLI8Ily-086eE0iewlG2BkLf0'
      }
    });

    // Pass response back to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    // Handle errors
    res.status(error.response.status).json(error.response.data);
  }
});
// Start the server
app.listen(5000, () => {
  console.log(`Server is running on port ${5000}`);
});
