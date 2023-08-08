const dbConnect= require('./mongodb')

const updateData=async ()=>{
    let data = await dbConnect()
    let result = await data.updateOne(
        //same here multiple update is not happening with data.update()
        { name:'max 5'},
        {
            $set:{name:'max 5 updated', price:1000}
        }
        )
    console.log(result)

}

updateData()