
import { v4 as uuidv4 } from 'uuid';
//https://www.npmjs.com/package/uuid
export const createUser = (req,res) => {
    const user = req.body;

    const userWithId = { ...user, id: uuidv4()};

    users.push(userWithId);
    res.send(`User with the name ${user.firstName} added to the database!`);
}

//can do for others also