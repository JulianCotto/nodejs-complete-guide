// the following code could not be executed in the browser because it cannot access the local filesystem
const fs = require('fs');

fs.writeFileSync('hello.txt', 'Hello World');