const express = require("express");
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.json({ message: "Lollz Crypto Backend is running!" });
});

// Test API Route
app.get("/api/status", (req, res) => {
  res.json({ status: "OK", service: "Lollz Backend" });
});

// Set Port (Render provides a PORT variable)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
