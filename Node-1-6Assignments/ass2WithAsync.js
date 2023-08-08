const fsPromises = require("fs").promises;

const path = require("path");

const fileOps = async () => 
{
    try{
         const data = await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf8');
         console.log("data",data);
         await fsPromises.unlink(path.join(__dirname,'files','starter.txt'));
         await fsPromises.writeFile(path.join(__dirname,'files','promiseWrite.txt'), data);
         await fsPromises.appendFile(path.join(__dirname,'files','promiseWrite.txt'), '\n\nNice to meet you');
         await fsPromises.appendFile(path.join(__dirname,'files','promiseWrite.txt'), path.join(__dirname,'files','promiseComplete.txt'));
         const newdata = await fsPromises.readFile(path.join(__dirname,'files','promiseComplete.txt'),'utf8');
         console.log("data",newdata);

    } catch (err) {
        console.error(err);
    }
}

fileOps();


//https://www.youtube.com/watch?v=yQBw8skBdZU
//node ass2WithAsync.js
//https://stackoverflow.com/questions/31931614/require-is-not-defined-node-js








