const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    const data = req.body;
    const hashedPassword = await bcrypt.hash(data.Password, 10);
    
    let doPasswordsMatch = await bcrypt.compare(data.Password, hashedPassword);
    
    try {
        const userInDB = await Users.findOne({
            where: {
                Name: data.Name
            }
        });
    
        if(data.Name == userInDB.Name && doPasswordsMatch) {
            req.session.userID = userInDB.UserID;
            req.session.name = userInDB.Name;
            req.session.isAuth = true;
            res.json(true);
        } else {
            res.json(false);
        }
    } catch(e) {
        res.json(false)
    }
});

module.exports = router;