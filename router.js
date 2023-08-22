const express = require("express");

const router = express.Router();

const { sendData } = require("./controller");

router.get("/", sendData);

module.exports = router;
