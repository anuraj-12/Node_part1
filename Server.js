
const http  =  require("http")

const server  =  http.createServer((req,res)=>{
    if(req === "/"){
     res.write("hello world")   
     res.end()
    }
   else if(req === "/about"){
    res.write("i am about")
    res.end()
   }

   else if(req === "/contact"){
    res.write("i am contact")
    res.end()
   }
})

const port  =  3000
server.listen(port, ()=>{
    console.log(`Server Running on address http://localhost:${port}`)
})