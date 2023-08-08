//when you want to run command is just nodemon and in package.json change respective package name
const dbConnect = require('./mongodb');

const insertData=async ()=>{
   let data = await dbConnect();
  let result = await data.insertOne (
    //for single update insertOne otherwise insert
    //multiple insert is not happening with data.insert()
      //[ // remove array for single update
          {name:'max 8',brand:'micromax',price:420}
        //   {name:'max 6',brand:'micromax',price:520},
        //   {name:'max 7',brand:'micromax',price:620},

     // ]
  )
  if(result.acknowledged)
  {
      console.warn("data is inserted")
  }
}

insertData();