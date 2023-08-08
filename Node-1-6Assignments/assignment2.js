const fs = require("fs");

const path = require("path");

//read file

fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8',(err,data) =>{
    if(err) throw err;
    console.log("data:",data.toString());
});

console.log("Hello....."); //it will run first then data

//writefile

fs.writeFile(path.join(__dirname,'files','reply.txt'),'Hi Nice to meet you',(err) =>{
    if(err) throw err;
    console.log("Write complete");

    fs.appendFile(path.join(__dirname,'files','reply.txt'),'\n\nTesting text',(err) =>{
        if(err) throw err;
        console.log("Append complete");
    });

    fs.rename(path.join(__dirname,'files','reply.txt'),path.join(__dirname,'files','newReply.txt'),(err) =>{
        if(err) throw err;
        console.log("Rename complete");
    });
});

// //updateFile

// fs.appendFile(path.join(__dirname,'files','test.txt'),'Testing text',(err) =>{
//     if(err) throw err;
//     console.log("Append complete");
// });

//exit on uncaught erros

process.on("uncaughtException",err =>{
   console.error(`There was an uncaught error: ${err}`);
});

//https://www.youtube.com/watch?v=yQBw8skBdZU
//node assignment2.js - to run






