const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
connectDB();

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 8080;
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend connected successfully ✅" });
});



app.listen(PORT, () =>
  console.log(` Server running on port ${PORT}`)
);
