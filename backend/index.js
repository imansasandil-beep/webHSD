const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Dummy tracking data
const trackingData = {
  "HSD123456": {
    status: "In Transit",
    location: "Sorting Facility, NY",
    estimatedDelivery: "Tomorrow by 8:00 PM",
    history: []
  }
};

app.listen(port, () => {
  console.log(`HSD Backend listening on port ${port}`);
});
