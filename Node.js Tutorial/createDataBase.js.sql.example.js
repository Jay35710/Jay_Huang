var mysql = require('mysql');

var con = mysql.createConnection({
    user:study,
    password:study1111%

});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});