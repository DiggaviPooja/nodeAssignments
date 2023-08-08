import express from "express";

import { createUser } from "../controllers/users.js";


const router = express.Router();

let users = [

]

//all routes are here starting with /users
router.get('/', (req,res) => {
   // console.log(users);
    //res.send("Hello");
    res.send(users);
});



router.post('/', createUser);

router.get('/:id', (req,res) => {

    const { id } = req.params;
   const foundUser =  users.find((user) => user.id === id);
     res.send(foundUser);
 });

 //delete

 router.delete('/:id', (req,res) => {

    const { id } = req.params;
    // id to delete 123
    //John 123
    //Jane 321

    users = users.filter((user) => user.id !== id);

    res.send(`user with id ${id} is deleted from the database`);
 });

 //patch update
 router.patch('/:id', (req,res) => {
        const { id } = req.params;
        const {firstName, lastName, age} = req.body;
        
        const user = users.find((user) => user.id === id);

        if(firstName)
        {
            user.firstName = firstName;
        }

        if(lastName)
        {
            user.lastName = lastName;
        }

        if(age)
        {
            user.age = age;
        }

       res.send(`user with the id ${id} has been updated`);

        
        

 });


export default router;
