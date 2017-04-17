// var express = require('express');
// var app = express();
// var fs = require("fs");

// app.get('/listUsers', (req, res) => {
//     fs.readFile(__dirname + "/" + "users.json", 'utf8', (err, data) => {
//         console.log(data);
//         res.end(data);
//     });
// })

// var server = app.listen(8081, () => {

//     var host = server.address().address
//     var port = server.address().port

//     console.log("Example app listening at http://%s:%s", host, port)

// })


const fs = require('fs');
const child_process = require('child_process');

for(var i=0; i<3; i++) {
   var workerProcess = child_process.exec('node support.js '+i,function 
      (error, stdout, stderr) {
      
      if (error) {
         console.log(error.stack);
         console.log('Error code: '+error.code);
         console.log('Signal received: '+error.signal);
      }
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
   });

   workerProcess.on('exit', function (code) {
      console.log('Child process exited with exit code '+code);
   });
}