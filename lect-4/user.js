const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers); //to get specific part from request.

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
            <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User input</title>
</head>
<body>
    <h1>Enter your details</h1>
    <form action="/submit-details" method="POST">
        <label for="userName">Username: </label>
        <input type="text" id="userName" placeholder="enter your name" name="username"><br><br>
        <label for="gender">Gender:</label>
        <label for="gender">Male</label>
        <input type="radio" id="gender" value="male" name="gender">
        <label for="gender">Female</label>
        <input type="radio" id="gender" value="female" name="gender"><br><br>
        <button>submit</button>
    </form>
</body>
</html>
            `);

    return res.end();
  }

  //re-direct to input page
  else if (req.url.toLowerCase() === '/submit-details' && req.method === 'POST') {
    fs.writeFileSync('user.txt', 'myFile');
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
  //this is our main page
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Client can see </title></head>");
  res.write("<body>Subscribe/like/share</body>");
  res.write("</html>");
  res.end(); //here we can use return or we don't it will not change.
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server running on address http://localhost:${PORT}/`);
});
