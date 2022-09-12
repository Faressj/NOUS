const express = require('express');
const app = express();
const mysql = require('mysql');
let cors = require("cors");
app.use(cors());

var db = mysql.createConnection( {
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "marvel"
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get("/heroes", (req, res) =>{
    db.query("SELECT * FROM hero", (err, result) =>{
        if(err){
            console.log(err);
        } else{
            res.send(result)
        }
    });
});
app.get("/hero_power_id", (req, res) =>{
    db.query("SELECT * FROM hero_power", (err, result) =>{
        if(err){
            console.log(err);
        } else{
            res.send(result)
        }
    });
});
app.get("/power", (req, res) =>{
    db.query("SELECT * FROM power", (err, result) =>{
        if(err){
            console.log(err);
        } else{
            res.send(result)
        }
    });
});
app.get("/team", (req, res) =>{
    db.query("SELECT * FROM team", (err, result) =>{
        if(err){
            console.log(err);
        } else{
            res.send(result)
        }
    });
});

app.listen(3001, () =>{
    console.log("server running on 3001");
})