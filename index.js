import express from "express";

const app = express();
const PORT = 7000;

// API 1
app.get("/api1", (req, res) => {
  res.json({
    success: true,
    message: "this is api 1",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
