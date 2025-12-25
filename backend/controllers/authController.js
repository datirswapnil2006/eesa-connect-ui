const User = require("../models/User");
const transporter = require("../config/email");


// Signup
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //  Check fields
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    //  Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    //  Save user
    const user = await User.create({ name, email, password });
    console.log(" User registered:", email);

    //  Send welcome email
    console.log("Sending signup email...");

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to EESA Connect",
      text: `Hello ${name}, your signup was successful!`
    });

    console.log("Signup email sent successfully");

    //  Response
    res.status(201).json({
      message: "Signup successful & email sent"
    });

  } catch (error) {
    console.error(" Signup error:", error);
    res.status(500).json({
      message: "Signup failed"
    });
  }
};


// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json(user);
};
