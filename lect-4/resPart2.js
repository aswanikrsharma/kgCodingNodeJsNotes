const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers); //to get specific part from request.

    if(req.url=== '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Client can see </title></head>');
        res.write('<body>Welcome home</body>');
        res.write('</html>');
        return res.end(); 
    }
    else if(req.url === '/product'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Client can see </title></head>');
        res.write('<body>Product page</body>');
        res.write('</html>');
        return res.end(); 
    }
    //this is our main page
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Client can see </title></head>');
    res.write('<body>Subscribe/like/share</body>');
    res.write('</html>');
    res.end();//here we can use return or we don't it will not change.
})
const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`server running on address http://localhost:${PORT}/`)
});