var http= require("http");
var fs= require("fs");
var url = require('url');
http.createServer(function(req,res){
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err,data){res.writeHead(200,{"Content-type":"text/html"});
        res.write(data);
        res.end;});
    console.log("fat");

}).listen(3009);