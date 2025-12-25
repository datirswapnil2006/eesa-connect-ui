const Contact = require("../models/Contact");
const transporter = require("../config/email");

exports.sendContactMessage = async (req, res) => {
  try {
    const { name, email, message, role } = req.body;

    // Save message in MongoDB
    await Contact.create({ name, email, message, role });

    // Decide receiver email
    let receiverEmail;
    if (role === "faculty") receiverEmail = "faculty@gmail.com";
    else if (role === "alumni") receiverEmail = "alumni@gmail.com";
    else if (role === "admin") receiverEmail = "admin@gmail.com";
    else receiverEmail = "member@gmail.com";

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: receiverEmail,
      subject: "New Contact Message",
      text: `
Name: ${name}
Email: ${email}
Role: ${role}

Message:
${message}
`
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error sending message" });
  }
};
