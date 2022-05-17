const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");

// router.use((req, res, next) => {

// });

router.get("/login", (req, res) => {});

router.post("/signup", userController.createNewUser);

module.exports = router;
