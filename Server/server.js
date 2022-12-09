const express = require("express");

app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("hello fren");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
