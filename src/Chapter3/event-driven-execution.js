// executes first
const http = require('http');
const fs = require('fs');

// executes second
const server = http.createServer((req, res) => {
    // executes third
    const url = req.url;
    const method = req.method;

    // executes fourth (if necessary)
    if (url === '/') {
        res.write('<html lang="en">');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>')
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        // adds an event listener but doesn't execute
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);
        });

        // adds an event listener but doesn't execute
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }

    // executes
    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang="en">');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>')
    res.end();
});

// executes
server.listen(3000);