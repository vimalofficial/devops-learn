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

app.get("/api2", (req, res) => {
  res.json({
    success: true,
    message: "this is api 2 v1",
  });
});


app.get("/api3", (req, res) => {
  res.json({
    success: true,
    message: "this is api 3 v1",
  });
});


app.get("/vimal", (req, res) => {
  res.json({
    success: true,
    message: "hello world the devops trigger successfully worked",
  });
});





// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
