const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    const data = req.body;
    const hashedPassword = await bcrypt.hash(data.Password, 10);

    //created should be called: wasUserJustCreated
    const [ user, created ] = await Users.findOrCreate({
        where: { Name: data.Name },
        defaults: {
            Name: data.Name,
            Password: hashedPassword
        }
    });

    res.json(created);
});

module.exports = router;