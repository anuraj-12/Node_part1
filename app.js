// const http  = require("http")

// const server =  http.createServer((req , res) =>{

//     if(req ==="/" ){
//         res.write("Hello world")
//     }
// })

// const port  =  3000
// server.listen(port , ()=>{
//     console.log(`Server running on address http://localhost:${port}`)
// })


const {add , multi , div } =  require("./home")

console.log(add(2 , 2))
console.log(multi(2 , 3))
console.log(div(10 , 2))