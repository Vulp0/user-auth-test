require("dotenv").config();
const express = require("express");
const session = require("express-session");
const app = express();
const cors = require("cors");
const db = require("./models");
const bcrypt = require("bcrypt");
const Sequelize = require("sequelize");
const cookieParser = require("cookie-parser");


app.use(express.json());
app.use(cors({
    credentials: true
}));


var SequelizeStore = require("connect-session-sequelize")(session.Store);

var sequelize = new Sequelize("database", "username", "password", {
    dialect: "sqlite",
    storage: "./Database.db"
});

let myStore = new SequelizeStore({db: sequelize});

//this cookie is for debugging purposes, this is 5 minutes
//remove cookie property later (it will default to a day)
const lifeTime = 300_000;
app.use(session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: false,
    store: myStore,
    cookie: {
        maxAge: lifeTime
    }
}));
app.use(cookieParser(process.env.secret));

myStore.sync();

const allUsersRouter = require("./routes/GetAll");
app.use("/allusers", allUsersRouter);

const registerRouter = require("./routes/Register");
app.use("/registeruser", registerRouter);

const loginRouter = require("./routes/Login");
app.use("/loginuser", loginRouter);

const dashRouter = require("./routes/Dashboard");
app.use("/dashboard", dashRouter);

const logoutRouter = require("./routes/Logout");
app.use("/logoutuser", logoutRouter);


db.sequelize.sync().then(() => {
    app.listen(process.env.port, () => {
        console.log("Server started on port " + process.env.port);
    });
});
