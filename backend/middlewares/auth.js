const jwt = require("jsonwebtoken");

exports.protect = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: "No token" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
};

exports.isAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Admin only" });
    }
    next();
};

exports.isApproved = (req, res, next) => {
    if (!req.user.approved) {
        return res.status(403).json({ message: "Not approved" });
    }
    next();
};
