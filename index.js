const express = require("express");
const app = express();

// Root Route
app.get("/", (req, res) => {
  res.json({ message: "Lollz Crypto Backend is running!" });
});

// Example API Route
app.get("/api/status", (req, res) => {
  res.json({ status: "OK", service: "Lollz Backend" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
