const mysql = require('mysql2');
const db_info = {
    host: "localhost",
    port: "3306",
    user: "study_user",
    password: "1111",
    database: "study_node"
}

module.exports = {
    init: function () {
        return mysql.createConnection(db.info);
    },
    connect: function (conn) {
        conn.connect(function (err) {
            if (err) console.error("mysql 에러" + err);
            else console.log("mysql connected");
        })
    }
};