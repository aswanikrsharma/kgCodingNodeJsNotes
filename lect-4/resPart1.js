const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers); //to get specific part from request.

    ///what to respond, we write using res keyword.
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Client can see </title></head>');
    res.write('<body>Hello, world</body>');
    res.write('</html>');
    res.end(); //to send response to client.
})
const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`server running on address http://localhost:${PORT}/`)
});