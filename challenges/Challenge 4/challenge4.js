
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

// console.log(con);

// con.connect(function(err) {
//     if (err) throw err;
// });
//1 create table
//2 connect to the table
//3
//



// app.get('/AhMa', function(req, res){
//     const user = req.body.username;
//     const pass = req.body.password;
//     con.query("SELECT UserName FROM Challenge4JH WHERE UserPass=?", pass ,function (err, result,) {
//             if(err){console.log(err)}
//              console.log(result);
//             if(!result){
//                 console.log("1");
//                 res.writeHead(200,{"Content-Type":"text/html"});
//                 res.end(
//                     "<h1>Chang Deng Fu just Gained 200LBs because you failed to login</h1>"
//                 )
//
//             }else {
//                 if (result[0].UserName !== user) {
//                     console.log("2");
//
//                     res.writeHead(200, {"Content-Type": "text/html"});
//                     res.end(
//                         "<h1>Chang Deng Fu just Gained 200LBs because you failed to login</h1>")
//
//                 } else {
//                     if (result.UserName === user) {
//                         console.log("3");
//                         res.writeHead(200, {"Content-Type": "text/html"});
//                         res.end(
//                             "<h1>Chang Deng Fu just lost 100LBs</h1>")
//                     }
//                 }
//                 // }
//
//
//             }}
//     )}
//
// );
// app.listen(1002);

// app.get('/AhMa', function(req, res){
//     var user = req.body.username;
//     var pass = req.body.password;
//     con.query("SELECT UserName FROM Challenge4JH WHERE UserPass=?", pass ,function (err, result) {
//         if(err) throw err;
//         if(!result){
//             console.log("1");
//             res.writeHead(200,{"Content-Type":"text/html"});
//             res.end(
//                 "<h1>Chang Deng Fu just Gained 200LBs because you failed to login</h1>"
//             )
//
//         }else {
//             if (result[0].UserName !== user) {
//                 console.log("2");
//
//                 res.writeHead(200, {"Content-Type": "text/html"});
//                 res.end(
//                     "<h1>Chang Deng Fu just Gained 200LBs because you failed to login</h1>")
//
//             } else {
//                 if (result[0].UserName === user) {
//                     console.log("3");
//                     res.writeHead(200, {"Content-Type": "text/html"});
//                     res.end(
//                         "<h1>Chang Deng Fu just lost 100LBs</h1>")
//                 }
//             }
//             // }
//
//
//         }}
//     )}
//
// );
// app.listen(1002);

const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const con = mysql.createConnection({
    host:"10.11.90.16",
    user: "study",
    password: "Study1111%",
    database: "Study",
    // table: "Challenge4JH",
    // port:"3306"
});



app.get('/AhMa', function (req, res) {
    var user = req.query.username;
    var pass = req.query.password;
    console.log(user, pass);
    //Make query to database for password, then see if the username matches.
    con.query("SELECT User FROM Challenge4JH WHERE Pass = ? ", pass, function (err, result) {



        //If error display error

        if (err) throw err;
        //Display result


        //Checks if information matches information in table.
        if(!result[0]) {
            console.log("Unsuccessful");
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end("<h1>Chang Deng Fu just Gained 200LBs because you failed to login</h1>");
        } else {
            if(result[0].User !== user){
                console.log("Unsuccessful");
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end("<h1>Chang Deng Fu just Gained 200LBs because you failed to login</h1>");
            } else {
                if (result[0].User === user) {
                    // Logs in or doesn't log in
                    console.log("Successful");
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end("<h1>Chang Deng Fu just lost 100LBs</h1>");
                }
            }
        }

    });
});
app.listen(1002);


