const express = require("express");
const router = express.Router();
const { Users } = require("../models");

router.get("/", async (req, res) => {
    const usersList = await Users.findAll();
    res.json(usersList);
    // res.send(usersList);
    // res.json(req.session);
});

module.exports = router;