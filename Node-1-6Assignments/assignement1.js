const express = require("express");

const app = express();

app.get("/",(req,res) => {
    res.end("Hi there, server is working");

});

app.listen(9000, "127.0.0.1", () =>
{
    console.log("server is running on port 9000")
});

//app.[http_method]([path_of_the_incoming_request], (req,res) => {
/*This is the function which get's executed when there's a incoming request from the specified path*/
//})

//https://faun.pub/creating-a-simple-node-js-server-using-express-handling-incoming-requests-sending-responses-ba870ca68a0e
//to run the script npm start
// "scripts": {
//     "start": "nodemon assignment1.js"
//   },