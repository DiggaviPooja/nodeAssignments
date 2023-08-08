const { MongoClient}  = require('mongodb')
const url = 'mongodb://localhost:27017'
const databaseName='TestDatabase'
const client = new MongoClient(url)


async function dbConnect()
{
    let result = await client.connect()
     db = result.db(databaseName)
    return db.collection('products')
    // let data = await collection.find().toArray()
    // console.log(data)


}



module.exports = dbConnect



// ref
// https://www.youtube.com/watch?v=aypuKm_1kng
// https://www.youtube.com/watch?v=I93L6yeJhtw
// https://www.youtube.com/watch?v=TjZiwSLrS5U
// https://www.youtube.com/watch?v=_5kf2l5vVvM&t=45s
// https://www.youtube.com/watch?v=L-Ugvseg24o
// https://www.youtube.com/watch?v=79Ze6Pe6lKg 
// https://www.youtube.com/watch?v=QDgb9oA28Zk 
// https://www.youtube.com/watch?v=VMoFn7-iZfE 