//Learn how to use the popular web framework Express.js to build a more complex server with routing, middleware, and error handling.
//https://www.youtube.com/watch?v=bRqUaDRm8Po
//Application level Middleware
//ThirdPaty Middleware
//Router-Level Middleware
//Built-In Middleware
//Error handling middleware

import express, { Router } from "express"
const router = Router()
const app = express()

const port = 5001

//Built-In Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Application level Middleware
const loggerMiddleware = (req,res,next) => {
    console.log(`${new Date()} ---- Request [${req.method}] [${req.url}]`)
    next()
}

app.use(loggerMiddleware)

//Router-Level Middleware
app.use("/api/users", router)
const fakeAuth = (req,res, next) => {
    const authStatus = true;
    if(authStatus){
        console.log("user authStatus : ", authStatus)
    }else
    {
        res.status(401)
        throw new Error("User is not authorised")

    }
}
const getUsers = (req,res) => {
    res.json({message: "get all users"})
}

const createUser = (req, res) => {
    console.log("This is the rquest body from the client", req.body)
    res.json({message: "create new user"})
}

router.use(fakeAuth)
router.route("/").get(getUsers).post(createUser)

//Error handling middleware
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode: 500 ;
    res.status(statusCode)
    switch(statusCode){
        case 401:
            res.json({
                title: "unauthorized",
                message: err.message
            })
            break
        case 404:
            res.json({
                title: "Not found",
                message: err.message
                })
            break
        case 500:
            res.json({
                title: "Server error",
                message: err.message
                })
            break
            
            default:
            break
    }
}
app.all("*", (req, res) => {
    res.status(404)
    throw new Error("Route not found ")
})
app.use(errorHandler)
app.listen(port, () => {
    console.log(`server started on port ${port}`)
})


