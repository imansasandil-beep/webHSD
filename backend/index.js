const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`HSD Backend listening on port ${port}`);
});
