const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const items = [
  { "id": 1, "text": "MANKIND IS DEAD" },
  { "id": 2, "text": "BLOOD IS FUEL" },
  { "id": 3, "text": "HELL IS FULL" }
];

app.get("/", (req, res) => {
  res.json(items);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});