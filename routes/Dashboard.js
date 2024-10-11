const express = require("express");
const router = express.Router();
const { Sessions } = require("../models");

router.post("/", async (req, res) => {
    try {
        let usersSessionID = req.signedCookies['connect.sid'];

        if(usersSessionID == null) {
            usersSessionID = "";
        }
    
        const userInDB = await Sessions.findOne({
            where: {
                sid: usersSessionID
            }
        });
        const dataObject = JSON.parse(userInDB.data)
    
        // console.log("data from session: ");
        // console.log(dataObject);
    
        if(usersSessionID) {
            res.json(dataObject);
        } 
    } catch(e) {
        res.json(false)
    }
    // else {
    //     // console.log("cookie not sent, this means your session expired");
    //     res.json(false);
    // }
})

module.exports = router;