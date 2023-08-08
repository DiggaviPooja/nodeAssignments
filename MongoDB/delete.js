const dbConnect = require('./mongodb')

const deleteData=async ()=>{
let data = await dbConnect()
//let result = await data.deleteOne({name:'max 8 updated'}) // for single
//deleteMany and deleteOne both are working
let result = await data.deleteMany({name:'max 5 updated'})
console.log(result)

}
 
deleteData()