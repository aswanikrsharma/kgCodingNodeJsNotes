//creating new server

const http = require('http');

// older way and require function name. 
// function requestListener(req, res){
//     console.log(req);
// }

// http.createServer(requestListener);

// we can do this way also and here no function name required.
const server = http.createServer(function (req, res){
    console.log(req);
});

//port
const PORT = 3000;
server.listen(PORT, function () {
console.log(`server running on address http://localhost:${PORT}/`);
});