const mysql = require('mysql');
const express = require('express');
const app = express();
const con = mysql.createConnection({
    host:"10.11.90.16",
    user: "study",
    password: "Study1111%",
    database: "Study",
});
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post("/ahMa", function (req, res) {

    const options = req.body.options;
    // const options = req.query.options;
    console.log(options);
    con.query("SELECT dropdown2 FROM Study.challenge5J WHERE dropdown1 = ?",options ,function(err, result){
        if (err)throw err;
        res.send(result)
    })

});

app.listen(1005);
