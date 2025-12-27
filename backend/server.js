const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const transporter = require("./config/email");

const app = express();


// Middleware

app.use(cors());
app.use(express.json());


// DB Connection

connectDB();


// Nodemailer Check

transporter.verify((error, success) => {
  if (error) {
    console.log("Nodemailer NOT connected");
    console.log(error);
  } else {
    console.log("Nodemailer connected successfully");
  }
});


// Routes

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

/*  AI ROUTES */
app.use("/api/ai", require("./routes/aiRoutes"));


// Health Check

app.get("/api/health", (req, res) => {
  res.json({ status: "Backend connected successfully" });
});


// Start Server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
