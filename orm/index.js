const express = require("express");
const app = express();

const db = require("./models");

const { User } = require("./models");

app.get("/insert", (req, res) => {
    User.create({
        firstName: "PARK",
        age: 19
    }).catch(err => {
        if (err) {
            console.log(err);
        }
    })
    res.send("insert");
});

db.sequelize.sync().then((req) => {
    app.listen(3001, () => {
        console.log("3001로 실행함");
    })
});