const UserController = require("../controller/UserController");
const express = require("express");

const router = express.Router();

router.post("/user/signup", UserController.signUp);
router.post("/user/signin", UserController.signIn);

module.exports = router