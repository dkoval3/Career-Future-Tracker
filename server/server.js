const path = require("path");
const express = require("express");

const app = express();
const client = __dirname + '/../client/';

app.use('/assets', express.static(client + 'assets'));

app.get("/", function(req, res) {
    res.sendFile(path.join(client, "index.html"));
});

app.get("/about", function(req, res) {
    res.send("thanks for learning more about us");
});

app.listen(3030);


// Original Server code below: done prior to using express.js

// http.createServer(function(req, res) {
//     res.writeHead(200, {"Content-Type": "text-html"});
//     fs.readFile("../client/index.html", function(err, data) {
//         if (err) {
//             res.writeHead(404);
//             res.write("Error: Page not found");
//         } else {
//             res.write(data);
//         }
//         res.end();
//     });

// }).listen(port, function(err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(`Server is listening on port ${port}`)
//     }
// })