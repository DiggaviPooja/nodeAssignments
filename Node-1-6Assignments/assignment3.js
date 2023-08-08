///https://www.scaler.com/topics/nodejs/node-js-request/

//request library is depricated , instead we can use the below any method
//https://www.geeksforgeeks.org/how-to-make-http-requests-in-node-js/

//using axios here
//axios
const axios = require("axios");

//make erequest

axios.get("https://jsonplaceholder.typicode.com/posts/1")

//show response data
.then(res => console.log(res.data))
.catch(err => console.log(err))

