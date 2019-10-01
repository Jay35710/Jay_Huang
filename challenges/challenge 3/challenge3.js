var mysql = require('mysql');

/*var con = mysql.createConnection({
    user:"study",
    pass:"Study1111%",
    port:3306,


});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});*/
const express = require('express');
const app = express();

var con = mysql.createConnection({
    host:"10.11.90.16",
    user: "study",
    password: "Study1111%",
    database: "Study",
    table: "Country",
    port:"3306"


});
console.log(con);

con.connect(function(err) {
    if (err) throw err;
});

app.get('/count', function(req, res){
    con.query("SELECT COUNT(*) AS number FROM Country WHERE Continent = 'AS'", function (err, result,) {
        res.send("The total country in Asia is " + result[0].number);
        res.end()
    }
    )}

);
app.listen(1000);