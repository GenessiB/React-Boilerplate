// server.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// TODO app.use the json and cors middleware and also add support for dotenv

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
