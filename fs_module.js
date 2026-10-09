
const fs =  require("fs")
const promises  =  require("fs/promises")


async
const writeFiles =  fs.writeFile("gautam.txt", "hey gautam,  are you going to be a node js develeper." , "utf-8" , (err)=>{

    if(err){
        console.log("Error occur: " , err )
    }
    else {
        console.log("The file saved.")
    }
} )


const viewFile  =  fs.readFile("gautam.txt" , "utf-8" , (err, data)=>{
    if(err){
        console.log("Error occur: " , err )
    }
    else {
        console.log(data)
    }
})


const updates  =  fs.appendFile("gautam.txt" , "gautam are you ready \n" , "utf-8", (err)=>{
  if(err){
    console.log(err)
  }
  else{
    console.log("file updated")
  }
})



const deletefile = fs.unlink ("gautam.txt", (error)=>{
    if(error){
        console.log(error)
    }
    else {
        console.log("Deleted Successfully")
    }
})


const create   =  fs.writeFile("gautam.js" , "hey gautam , are you delete the previous file?" , "utf-8",(err)=>{
    if(err){
        console.log( err)
    }
    else{
        console.log("file saved")
    }
})

const view  =  fs.readFile("gautam.txt" , "utf-8" , (err , data)=>{

    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})


const updatefile  =  fs.appendFile("gautam.txt" , "\ngautam are you sure to unlink file." , "utf-8" ,(err) =>{
   if(err){
    console.log(err)
   }
   else{
    console.log("successfully add")
   }
})


const deleteFile   = fs.unlink("gautam.js" , (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("deleted")
    }
})


sync
const createfile  =  fs.writeFileSync("text.txt" , "gautam are you going...." , "utf-8" , (err) =>{
    if(err){
        console.log(err)
    }
    else{

        console.log("write file sync method")
    }
})


const readFiles  =  fs.readFileSync("text.txt", "utf-8" , (err, data) =>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})


const updated  =  fs.appendFileSync("text.txt", "\ngautam what about you man?" , "utf-8" , (err)=>{
    if(err){
    console.log(err)
    }
    else{

        console.log("data added")
    }
})


const deletes =  fs.unlinkSync("text.txt",(err)=>{
    if(err){
        console.log(err)
    }

    else{

        console.log("deleted")
}
})


const renames = fs.renameSync("text.txt" , "hello.txt") 


const writeFile  =  fs.promises.writeFile("text.txt" , "king is here?" , "utf-8").then().catch((err)=>{
    console.log(err)
})


const  readFile =  fs.promises.readFile("text.txt", "utf-8").then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

const update  =  fs.promises.appendFile("text.txt", "\ngautam is the king.", "utf-8").then().catch((err)=>{
        console.log(err)
})


const deletefiles =  fs.promises.unlink("text.txt").then().catch((err)=>{
            console.log(err)
}).finally(()=>{
    console.log("deleted")
})