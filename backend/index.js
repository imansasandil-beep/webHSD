const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Dummy tracking data
const trackingData = {};

app.listen(port, () => {
  console.log(`HSD Backend listening on port ${port}`);
});
