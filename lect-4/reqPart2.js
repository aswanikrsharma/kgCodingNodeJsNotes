const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers); //to get specific part from request.
    
})
const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`server running on address http://localhost:${PORT}/`)
});