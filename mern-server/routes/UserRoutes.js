const UserController = require("../controller/UserController");
const express = require("express");
const authMiddleware = require("../middleware/AuthMiddleware");

const router = express.Router();

router.post("/user/signup", UserController.signUp);
router.post("/user/signin", UserController.signIn);
router.get("/user/allusers",authMiddleware, UserController.getAllUsers);
router.put("/user/updateUser/:id",authMiddleware, UserController.updateUser);

module.exports = router