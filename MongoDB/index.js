const dbConnect = require ('./mongodb')
//console.log.console.warn(dbConnect);
//promise
// dbConnect().then((resp) => {
// resp.find().toArray().then((data)=>{
//     console.warn(data)
// })
// })

//asynch wait

const main = async () => {
    let data = await dbConnect()
    data = await data.find().toArray()
    console.log(data)
}

main()

