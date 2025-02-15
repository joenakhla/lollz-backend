const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Lollz Crypto Backend is running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
