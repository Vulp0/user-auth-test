const express = require("express");
const router = express.Router();
const { Sessions } = require("../models");

router.post("/", async (req, res) => {
    req.session.destroy();
    res.json();
});

module.exports = router;