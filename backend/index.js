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
    history: [
      { date: "2026-06-03 14:00", event: "Package departed facility", location: "Chicago, IL" },
      { date: "2026-06-02 09:30", event: "Package received by carrier", location: "Chicago, IL" }
    ]
  }
};

app.listen(port, () => {
  console.log(`HSD Backend listening on port ${port}`);
});
