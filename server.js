var http = require('http');
var fs = require('fs');

var port = 3000;

http.createServer(function(request, response) {
    //simple route controller

    var route = request.url;
    console.log(route);

    if ('/home' == route) {
        response.writeHead(200);
        response.write('<h1>Welcome to MyApp Page!</h1>');
        response.end();
        return;
    } else if ('/about' == route) {
        response.writeHead(200);
        fs.readFile(__dirname + '/views/about.html', function(error, data) {
            response.write(data);
            response.end();
        });
    } else {
        response.writeHead(404);
        response.end();
        return;
    }
}).listen(port);

console.log('Server running at port ' + port);
