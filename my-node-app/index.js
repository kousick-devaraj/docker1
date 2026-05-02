const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello from Node + npm! - Updated today 2nd May'2026");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});