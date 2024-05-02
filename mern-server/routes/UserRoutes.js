const UserController = require("../controller/UserController");
const express = require("express");

const router = express.Router();

router.post("/api/user/signin",UserController.createUser);

module.exports = router;