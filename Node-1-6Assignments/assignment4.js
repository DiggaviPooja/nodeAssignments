import express from "express";
import bodyParser from "body-parser";

import userRoutes from './routes/users.js';

const app = express();
const PORT = 5001;

app.use(bodyParser.json());

app.use('/users',userRoutes);

app.get('/',(req,res) => {

   //console.log("[TEST]!");
    res.send("Hello From HomePage");

});

app.listen(PORT, () => console.log(`Server is Running on : http://localhost:${PORT}`));

//https://www.youtube.com/watch?v=l8WPWK9mS5M&t=2644s
//to run the script npm start
// "scripts": {
//     "start": "nodemon assignment4.js"
//   },

//for assignment 4 : type:module is required
//Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.