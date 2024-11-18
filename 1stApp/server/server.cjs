const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());

// Endpoint to fetch list of restaurants
app.get('/api/restaurants', async (req, res) => {
  try {
    const response = await axios.get(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9152651&lng=75.7174364&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',
      {
        headers: {
          'User-Agent': 'Mozilla/5.0',
          'Accept': 'application/json',
        }
      }
    );
    res.json(response.data); // Send back the data from the external API
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Endpoint to fetch menu for a specific restaurant by ID
app.get('/api/restaurantsMenu/:resId', async (req, res) => {  // Changed restaurantId to resId
  const { resId } = req.params; // Use resId instead of restaurantId
  try {
    const response = await axios.get(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.95250&lng=75.71050&restaurantId=`+ resId +`&catalog_qa=undefined&submitAction=ENTER`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0',
          'Accept': 'application/json',
        }
      }
    );
    res.json(response.data); // Send back the menu data
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch menu' });
  }
});

const PORT = process.env.PORT || 3001; // Port for the Express server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
