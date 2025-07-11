const http = require('http');

// implementation 1
// function rqListener(req, res) {
//
// }
// http.createServer(rqListener);

// implementation 2
// http.createServer(function(req, res){
//
// })

// implementation 3
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang="en">');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>')
    res.end();

})

server.listen(3000);