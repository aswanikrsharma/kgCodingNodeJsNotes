const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if(req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User input</title>
</head>
<body>
    <h1>Enter your details</h1>
    <form action="/submit-details">
        <label for="userName">Username: </label>
        <input type="text" id="userName" placeholder="enter your name" name="username"><br><br>
        <label for="gender">Gender:</label>
        <label for="gender">Male</label>
        <input type="radio" id="gender" value="male" name="gender">
        <label for="gender">Female</label>
        <input type="radio" id="gender" value="female" name="gender">
        <input type="button" value="submit">
    </form>
</body>
</html>
            `)
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('This is main page');
    res.end();
})

server.listen(3000, () => console.log(`Server running on address http://localhost:3000`));