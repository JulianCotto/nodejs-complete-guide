const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html lang="en">');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body>');
        res.write('</html>')
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY MESSAGE');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang="en">');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>')
    res.end();


});

server.listen(3000);