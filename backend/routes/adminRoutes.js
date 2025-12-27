const express = require("express");
const router = express.Router();
const {
    getAllUsers,
    approveUser,
    rejectUser,
    changeRole
} = require("../controllers/adminController");

const { protect, isAdmin } = require("../middlewares/auth");

router.get("/users", protect, isAdmin, getAllUsers);
router.patch("/approve/:id", protect, isAdmin, approveUser);
router.delete("/reject/:id", protect, isAdmin, rejectUser);
router.patch("/role/:id", protect, isAdmin, changeRole);

module.exports = router;
