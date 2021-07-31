const express = require("express");

const app = express();

app.get("/" , function(req , res) {
    res.send("hello friend");
});

app.listen(3000 , function(req , res) {
    console.log("hello world");
});