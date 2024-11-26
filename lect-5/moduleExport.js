const fs = require("fs");
const  requestHandler= (req, res) => {


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

    //about chunks and buffer
    const body = [];//how to collect chunks
    req.on('data', chunk => {
        console.log(chunk);//how to read chunks
      body.push(chunk);
    });
    req.on('end', () =>{
    const fullBody = Buffer.concat(body).toString(); //collected chunks and put into buffer to get full body.
    console.log(fullBody);
    const params = new URLSearchParams(fullBody); //how to parse full body and created object
    const bodyObject = Object.fromEntries(params);
    console.log(bodyObject);
    fs.writeFileSync("user.txt", JSON.stringify(bodyObject));//how to write file.
})

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
};

module.exports = requestHandler;