const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
    const users = await User.find().select("-password");
    res.json(users);
};

exports.approveUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        { approved: true },
        { new: true }
    );
    res.json(user);
};

exports.rejectUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User rejected" });
};

exports.changeRole = async (req, res) => {
    const { role } = req.body;
    const user = await User.findByIdAndUpdate(
        req.params.id,
        { role },
        { new: true }
    );
    res.json(user);
};
