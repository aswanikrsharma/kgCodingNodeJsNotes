const requestHandler = require('./moduleExport');

const http = require('http');
const server = http.createServer(requestHandler);

server.listen(3000, ()=>{
    console.log('Server running on http://localhost:3000');
});