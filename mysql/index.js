const express = require('express');
const db = require("./mysql");

const app = express();
const conn = db.init();

app.get("/view", function (req, res) {
    const sql = "select * from HUMAN";
    conn.query(sql, function (err, result) {
        if (err) console.log("query error", err);
        else res.send(result);
    });
});

app.listen(3001, () => {
    console.log("server runnning");
})