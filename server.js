const http = require('http');

const server = http.createServer(() => {
    console.log("I am here");
})

server.listen(3000);