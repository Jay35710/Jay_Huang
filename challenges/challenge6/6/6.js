const mysql = require('mysql');
const express = require('express');
const app = express();
const fat = mysql.createConnection({
    host: "10.11.90.16",
    user: "study",
    password: "Study1111%",
    database: "Study",
});
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/ahMa", function (req, res) {
    fat.query("SELECT * FROM Challenge6J", null, function (err, result) {
        if (err) throw err;
        console.log("1: ");
        console.log(result);

        res.send(result)
    })
});

app.get("/AhMa2", function (req, res) {
    console.log("2");
    const min = req.query.min;
    console.log("min: " + min);
    const max = req.query.max;
    console.log("max: " + max);
    const min2 = req.query.min2;
    console.log("min2: " + min2);
    const max2 = req.query.max2;
    console.log("max2: " + max2);
    const ii = req.query.m;
    console.log(ii);


    if (ii === "") {
        console.log("ii null");
        fat.query("SELECT * FROM Study.Challenge6J WHERE  Challenge6J.Range  >? AND Challenge6J.Range <? AND Challenge6J.Seats >? AND Challenge6J.Seats <? ", [min, max, min2, max2], function (err, result) {
            console.log("result2: ");
            console.log(result);
            if (err) throw err;
            res.send(result);
        })
    } else {
        fat.query("SELECT * FROM Study.Challenge6J WHERE  Challenge6J.Range  >? AND Challenge6J.Range <? AND Challenge6J.Seats >? AND Challenge6J.Seats <?  AND  Challenge6J.Model = ?", [min, max, min2, max2, ii], function (err, result) {
            console.log("result2: ");
            console.log(result);
            if (err) throw err;
            res.send(result);
        })
    }
    // fat.query("SELECT * FROM Challenge6J WHERE Model =? AND `Range (nm)`>? AND `Range (nm)`<? AND Seats >? AND Seats<?", [ii, min, max, min2, max2], function (err, result) {

});

app.listen(1008);
