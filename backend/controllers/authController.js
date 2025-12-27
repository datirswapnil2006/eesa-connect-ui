const User = require("../models/User");
const transporter = require("../config/email");
const crypto = require("crypto");

// =================== SIGNUP ===================
exports.signup = async (req, res) => {
  try {
    const { name, email, role } = req.body;

    // Check fields
    if (!name || !email || !role) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    // Generate random password
    const password = crypto.randomBytes(4).toString("hex");

    // Default values
    let userRole = role;
    let approved = false;

    // ✅ Permanent Admin Logic
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    if (email === ADMIN_EMAIL) {
      userRole = "admin";
      approved = true;
    }

    // Save user
    const user = await User.create({
      name,
      email,
      password,
      role: userRole,
      approved
    });

    console.log("User registered:", email);

    // Send welcome email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to EESA Connect",
      text: `Hello ${name},

Your signup was successful!

Login credentials:
Email: ${email}
Password: ${password}

Please login and change your password.

Regards,
EESA Connect Team`
    });

    res.status(201).json({
      message: "Signup successful. Credentials sent via email."
    });

  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({
      message: "Signup failed"
    });
  }
};

// =================== LOGIN ===================
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // ❌ Block unapproved users (except admin)
    if (!user.approved && user.role !== "admin") {
      return res.status(403).json({
        message: "Your account is pending approval"
      });
    }

    // Send safe user data (NO password)
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      approved: user.approved
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed" });
  }
};
