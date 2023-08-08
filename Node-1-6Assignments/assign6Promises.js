//	Understand the difference between callbacks and promises by creating a script that uses both to perform asynchronous operations.
//https://www.youtube.com/watch?v=c-0P67cxTbI

//promises

//scenario

// 1. Register
// 2. Send welcome email 
// 3. Login 
// 4. Get user Data 
// 5. Display User Data

// function waitForThreeSeconds() {
//     let ms = 3000 + new Date().getTime()
//     while(new Date() < ms) {}
// }

function register() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

           // return reject('Error while registering')
           console.log("Register End")
           return resolve('registered')

          
           // resolve()
        
           },1000)

    })
    
   
 }
 
 function sendEmail() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Email End")
            resolve()
        
           },1000)
    })
     
       
    
 }
 
 function login() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Login End")
            resolve()
        
           },1000)
    }) 
     
 }
 
 function getUserData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Got user data")
            resolve()
        
           },1000)
    })
   
 }
 
 function displayUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User data displayed")
            resolve()
           },1000)
    })
     
 }
 
 //method chaining
 //then can be used when function returns promise
// register()
//     .then(sendEmail)
//     .then(login)
//     .then(getUserData)
//     .then(displayUserData)
//     .catch((err) => {
//         console.log('Error:' , err)

//     })

//better solution to handle promisses - asynch wait

async function authenticate () {
    try{
        const message = await register()
                        await sendEmail()
                        await login()
                        await getUserData()
                        await displayUserData()
                        console.log('Message:', message)
    }
    catch(err){
        throw new Error()
    }
    
}
 
authenticate().then(()=>{
    console.log("all set")
}
)
// .catch((err) => {
//   console.log('Error:' ,err)
// })
 
 console.log("Other application work")