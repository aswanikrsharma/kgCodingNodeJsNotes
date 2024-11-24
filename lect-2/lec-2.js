console.log('Hello world');

const fs = require('fs');
fs.writeFile('fileCreated.txt', 'writing file',(err)=>{
    if(err) console.log("error caught");
    else{console.log('file writing succesfull')};
});