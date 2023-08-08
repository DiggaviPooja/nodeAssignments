//https://jestjs.io/docs/getting-started
//https://www.youtube.com/watch?v=KQjeU0mBQU8

const add = (a,b) =>
{
    return a+b   
}

const err = () => {
    throw new Error('I am new Error')
}

const arr = () => {
    return ['Bat']
}

const promiseTest = () => {
    return new Promise((resolve,reject) => {
        if(a-b>0)
        {
            resolve('+ve')
        }
        else{
            reject('-ve')
        }
    })
}

const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/users',(req,res)=>{
    res.status(200).json({
        users:[
            {
                "name":"Gadot",
                "email":"Gadot@gmail.com",
                "password":"Gadot@123"
            }
            
        ]
    })
})

app.listen(4000)
module.exports ={
    add,
    err,
    promiseTest,
    arr,
    app
}