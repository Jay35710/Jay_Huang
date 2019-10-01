const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const con = mysql.createConnection({
    host: "10.11.90.16",
    user: "study",
    password: "Study1111%",
    database: "Study"
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//SQL Part
app.post('/ahMa', function (req, res) {
    var user = req.body.username;
    var pass = req.body.password;

    //Make query to database for password, then see if the username matches.
    con.query("SELECT User FROM Challenge4JH WHERE Pass = ?", pass, function (err, result) {

        //If password doesn't match says there is no result in the database.
        console.log(!result[0]);

        //If error display error

        if (err) throw err;
        //Display result
        console.log(result);

        //Checks if information matches information in table.
        if(!result[0]) {
            console.log("Unsuccessful");
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end("<!DOCTYPE html>\n" +
                "<html>\n" +
                "<head>\n" +
                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
                "    <<style>body {font-family: Arial, Helvetica, sans-serif;}\n" +
                "form {border: 3px solid #f1f1f1;}\n" +
                "\n" +
                "input[type=text], input[type=password] {\n" +
                "    width: 100%;\n" +
                "    padding: 12px 20px;\n" +
                "    margin: 8px 0;\n" +
                "    display: inline-block;\n" +
                "    border: 1px solid rgba(0, 0, 0, 0.98);\n" +
                "    box-sizing: border-box;\n" +
                "}\n" +
                "\n" +
                "button {\n" +
                "    background-color: #78af2c;\n" +
                "    color: rgba(161, 3, 255, 0.35);\n" +
                "    padding: 14px 20px;\n" +
                "    margin: 8px 0;\n" +
                "    border: none;\n" +
                "    cursor: pointer;\n" +
                "    width: 100%;\n" +
                "}\n" +
                "\n" +
                "button:hover {\n" +
                "    opacity: 0.8;\n" +
                "}\n" +
                "\n" +
                ".cancelbtn {\n" +
                "    width: auto;\n" +
                "    padding: 10px 18px;\n" +
                "    background-color: #04f442;\n" +
                "}\n" +
                "\n" +
                ".imgcontainer {\n" +
                "    text-align: center;\n" +
                "    margin: 24px 0 12px 0;\n" +
                "}\n" +
                "\n" +
                "img.avatar {\n" +
                "    width: 40%;\n" +
                "    border-radius: 50%;\n" +
                "}\n" +
                "\n" +
                ".container {\n" +
                "    padding: 16px;\n" +
                "}\n" +
                "\n" +
                "span.psw {\n" +
                "    float: right;\n" +
                "    padding-top: 16px;\n" +
                "}\n" +
                "\n" +
                "/* Change styles for span and cancel button on extra small screens */\n" +
                "@media screen and (max-width: 300px) {\n" +
                "    span.psw {\n" +
                "        display: block;\n" +
                "        float: none;\n" +
                "    }\n" +
                "    .cancelbtn {\n" +
                "        width: 100%;\n" +
                "    }\n" +
                "}\n" +
                "#button{\n" +
                "    width: 10%;\n" +
                "    position: absolute;\n" +
                "    left: 45%;\n" +
                "}\n" +
                "img{\n" +
                "    width:40px;\n" +
                "}</style>" +
                "</head>\n" +
                "<body>\n" +
                "\n" +
                "<h2> Chang Deng Fu just Gained 200LBs because you failed to login, try again</h2>\n" +
                "\n" +
                "<form action=\"http://localhost:1004/ahMa\" method=\"post\">\n" +
                "    <div class=\"imgcontainer\">\n" +
                "        <img src=\"../../challenge5/ChangDengFu2.png\" alt=\"Avatar\" class=\"avatar\">\n" +
                "    </div>\n" +
                "\n" +
                "    <div class=\"container\">\n" +
                "        <!--Username box-->\n" +
                "        <label><b>Username</b></label>\n" +
                "        <input type=\"text\" placeholder=\"Enter Username\" name=\"username\" required>\n" +
                "        <!--Password box-->\n" +
                "        <label><b>Password</b></label>\n" +
                "        <input type=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\n" +
                "        <!--Login button-->\n" +
                "        <button id=\"button\" type=\"submit\">Login</button>\n" +
                "\n" +
                "    </div>\n" +
                "</form>\n" +
                "</body>\n" +
                "</html>");
        } else {
            if(result[0].User !== user){
                console.log("Unsuccessful");
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end("<!DOCTYPE html>\n" +
                    "<html>\n" +
                    "<head>\n" +
                    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
                    "    <style>body {font-family: Arial, Helvetica, sans-serif;}\n" +
                    "form {border: 3px solid #f1f1f1;}\n" +
                    "\n" +
                    "input[type=text], input[type=password] {\n" +
                    "    width: 100%;\n" +
                    "    padding: 12px 20px;\n" +
                    "    margin: 8px 0;\n" +
                    "    display: inline-block;\n" +
                    "    border: 1px solid rgba(0, 0, 0, 0.98);\n" +
                    "    box-sizing: border-box;\n" +
                    "}\n" +
                    "\n" +
                    "button {\n" +
                    "    background-color: #78af2c;\n" +
                    "    color: rgba(161, 3, 255, 0.35);\n" +
                    "    padding: 14px 20px;\n" +
                    "    margin: 8px 0;\n" +
                    "    border: none;\n" +
                    "    cursor: pointer;\n" +
                    "    width: 100%;\n" +
                    "}\n" +
                    "\n" +
                    "button:hover {\n" +
                    "    opacity: 0.8;\n" +
                    "}\n" +
                    "\n" +
                    ".cancelbtn {\n" +
                    "    width: auto;\n" +
                    "    padding: 10px 18px;\n" +
                    "    background-color: #04f442;\n" +
                    "}\n" +
                    "\n" +
                    ".imgcontainer {\n" +
                    "    text-align: center;\n" +
                    "    margin: 24px 0 12px 0;\n" +
                    "}\n" +
                    "\n" +
                    "img.avatar {\n" +
                    "    width: 40%;\n" +
                    "    border-radius: 50%;\n" +
                    "}\n" +
                    "\n" +
                    ".container {\n" +
                    "    padding: 16px;\n" +
                    "}\n" +
                    "\n" +
                    "span.psw {\n" +
                    "    float: right;\n" +
                    "    padding-top: 16px;\n" +
                    "}\n" +
                    "\n" +
                    "/* Change styles for span and cancel button on extra small screens */\n" +
                    "@media screen and (max-width: 300px) {\n" +
                    "    span.psw {\n" +
                    "        display: block;\n" +
                    "        float: none;\n" +
                    "    }\n" +
                    "    .cancelbtn {\n" +
                    "        width: 100%;\n" +
                    "    }\n" +
                    "}\n" +
                    "#button{\n" +
                    "    width: 10%;\n" +
                    "    position: absolute;\n" +
                    "    left: 45%;\n" +
                    "}\n" +
                    "img{\n" +
                    "    width:40px;\n" +
                    "}</style>" +
                    "</head>\n" +
                    "<body>\n" +
                    "\n" +
                    "<h2> Chang Deng Fu just Gained 200LBs because you failed to login, try again</h2>\n" +
                    "\n" +
                    "<form action=\"http://localhost:1004/ahMa\" method=\"post\">\n" +
                    "    <div class=\"imgcontainer\">\n" +
                    "        <img src=\"../../challenge5/ChangDengFu2.png\" alt=\"Avatar\" class=\"avatar\">\n" +
                    "    </div>\n" +
                    "\n" +
                    "    <div class=\"container\">\n" +
                    "        <!--Username box-->\n" +
                    "        <label><b>Username</b></label>\n" +
                    "        <input type=\"text\" placeholder=\"Enter Username\" name=\"username\" required>\n" +
                    "        <!--Password box-->\n" +
                    "        <label><b>Password</b></label>\n" +
                    "        <input type=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\n" +
                    "        <!--Login button-->\n" +
                    "        <button id=\"button\" type=\"submit\">Login</button>\n" +
                    "\n" +
                    "    </div>\n" +
                    "</form>\n" +
                    "</body>\n" +
                    "</html>");
            } else {
                if (result[0].User === user) {
                    // Logs in or doesn't log in
                    console.log("Successful");
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end( "<!DOCTYPE html>\n" +
                        "<html>\n" +
                        "<head>\n" +
                        "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
                        "   <style>body {font-family: Arial, Helvetica, sans-serif;}\n" +
                        "form {border: 3px solid #f1f1f1;}\n" +
                        "\n" +
                        "input[type=text], input[type=password] {\n" +
                        "    width: 100%;\n" +
                        "    padding: 12px 20px;\n" +
                        "    margin: 8px 0;\n" +
                        "    display: inline-block;\n" +
                        "    border: 1px solid rgba(0, 0, 0, 0.98);\n" +
                        "    box-sizing: border-box;\n" +
                        "}\n" +
                        "\n" +
                        "button {\n" +
                        "    background-color: #78af2c;\n" +
                        "    color: rgba(161, 3, 255, 0.35);\n" +
                        "    padding: 14px 20px;\n" +
                        "    margin: 8px 0;\n" +
                        "    border: none;\n" +
                        "    cursor: pointer;\n" +
                        "    width: 100%;\n" +
                        "}\n" +
                        "\n" +
                        "button:hover {\n" +
                        "    opacity: 0.8;\n" +
                        "}\n" +
                        "\n" +
                        ".cancelbtn {\n" +
                        "    width: auto;\n" +
                        "    padding: 10px 18px;\n" +
                        "    background-color: #04f442;\n" +
                        "}\n" +
                        "\n" +
                        ".imgcontainer {\n" +
                        "    text-align: center;\n" +
                        "    margin: 24px 0 12px 0;\n" +
                        "}\n" +
                        "\n" +
                        "img.avatar {\n" +
                        "    width: 40%;\n" +
                        "    border-radius: 50%;\n" +
                        "}\n" +
                        "\n" +
                        ".container {\n" +
                        "    padding: 16px;\n" +
                        "}\n" +
                        "\n" +
                        "span.psw {\n" +
                        "    float: right;\n" +
                        "    padding-top: 16px;\n" +
                        "}\n" +
                        "\n" +
                        "/* Change styles for span and cancel button on extra small screens */\n" +
                        "@media screen and (max-width: 300px) {\n" +
                        "    span.psw {\n" +
                        "        display: block;\n" +
                        "        float: none;\n" +
                        "    }\n" +
                        "    .cancelbtn {\n" +
                        "        width: 100%;\n" +
                        "    }\n" +
                        "}\n" +
                        "#button{\n" +
                        "    width: 10%;\n" +
                        "    position: absolute;\n" +
                        "    left: 45%;\n" +
                        "}\n" +
                        "img{\n" +
                        "    width:40px;\n" +
                        "}</style>" +
                        "</head>\n" +
                        "<body>\n" +
                        "\n" +
                        "<h2>Chang Deng Fu just lost 100LBs because you successfully logged in , help him lose more weight by login another time</h2>\n" +
                        "\n" +
                        "<form action=\"http://localhost:1004/ahMa\" method=\"post\">\n" +
                        "    <div class=\"imgcontainer\">\n" +
                        "        <img src=\"../../challenge5/ChangDengFu2.png\" alt=\"Avatar\" class=\"avatar\">\n" +
                        "    </div>\n" +
                        "\n" +
                        "    <div class=\"container\">\n" +
                        "        <!--Username box-->\n" +
                        "        <label><b>Username</b></label>\n" +
                        "        <input type=\"text\" placeholder=\"Enter Username\" name=\"username\" required>\n" +
                        "        <!--Password box-->\n" +
                        "        <label><b>Password</b></label>\n" +
                        "        <input type=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\n" +
                        "        <!--Login button-->\n" +
                        "        <button id=\"button\" type=\"submit\">Login</button>\n" +
                        "\n" +
                        "    </div>\n" +
                        "</form>\n" +
                        "</body>\n" +
                        "</html>");
                }
            }
        }

    });
});
app.listen(1004);