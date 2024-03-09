const express = require('express');
const app = express();
const { activeSites, agreementsIds, cities } = require("./data")

/**
 * List Active Sites
 */
app.get('/active-sites', (req, res) => {
    res.send(activeSites);
});

/**
 * Get agreements for a site id
 */
app.get('/agreements/:id', (req, res) => {
    // no
    if(req.params.id === "NS001") {
        res.send([]);
        return
    }

    res.send({data: agreementsIds})
});

// List cities
app.get('/cities', (req, res) => {
    res.send({data: cities});
});

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
