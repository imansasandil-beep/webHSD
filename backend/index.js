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
  },
  "HSD987654": {
    status: "Delivered",
    location: "Front Porch",
    estimatedDelivery: "Delivered",
    history: [
      { date: "2026-06-04 10:15", event: "Delivered", location: "Los Angeles, CA" },
      { date: "2026-06-04 07:00", event: "Out for delivery", location: "Los Angeles, CA" }
    ]
  }
};

app.get("/api/track/:id", (req, res) => {
  const { id } = req.params;
  const data = trackingData[id.toUpperCase()];
});

app.listen(port, () => {
  console.log(`HSD Backend listening on port ${port}`);
});
