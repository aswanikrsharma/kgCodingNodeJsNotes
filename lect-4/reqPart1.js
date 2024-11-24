const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req);
    process.exit();//to exit out of the event loop.
})
const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`server running on address http://localhost:${PORT}/`)
});