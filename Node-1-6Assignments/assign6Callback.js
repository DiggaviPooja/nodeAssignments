//	Understand the difference between callbacks and promises by creating a script that uses both to perform asynchronous operations.
//https://www.youtube.com/watch?v=c-0P67cxTbI

//call back

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

function register(callbacks) {
   // waitForThreeSeconds()
   setTimeout(() => {
    console.log("Register End")
    callbacks()

   },3000)
  
}

function sendEmail(callbacks) {
    setTimeout(() => {
        console.log("Email End")
        callbacks()
    
       },1000)
      
   
}

function login(callbacks) {
    setTimeout(() => {
        console.log("Login End")
        callbacks()
    
       },5000)
}

function getUserData(callbacks) {
    setTimeout(() => {
        console.log("Got user data")
        callbacks()
    
       },1000)
}

function displayUserData() {
    setTimeout(() => {
        console.log("User data displayed")
    
       },1000)
}

// call back hell
register(function(){
    sendEmail(function() {
        login(function() {
            getUserData(function() {
                displayUserData()
            })
            
        })
        
    })
    
})


console.log("Other application work")