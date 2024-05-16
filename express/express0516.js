const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret : "AnimalBananaCandy"
}));

app.get("/setUser", (req, res) => {
    req.session.user = {name: "kim", age: 20}
    res.redirect("/getUser");
});

app.get("/getUser", (req, res) => {
    res.send(req.session.user);
})

app.get("deleteSession", (req, res) => {
    if(req.session) {
        req.session.destroy(() => {
            res.redirect("/getUser");
        });
    } else {
        res.send("제거할 세션이 없습니다.");
    }
});

app.listen(8889, () => {
    console.log("8889 포트입니다.");
});