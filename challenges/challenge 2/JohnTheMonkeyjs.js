var http= require("http");
var fs= require("fs");
// noinspection JSAnnotator
http.createServer(function(req,res){
    fs.readFile("JohnTheMonkey.html",function(err,data){
         res.writeHead(200, {"Content-Type":"text/html"});
         res.write(data);
         res.end();
                        }) 

}).listen(8081);