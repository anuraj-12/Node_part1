
const path  =  require('path')

//return all folder name not including file name like app.js server.js etc
console.log(__dirname)

// return all folder name with including file name like app.js server.js etc 
console.log(__filename)


// it join all file and folder inside of join syntax 
const filePath =  path.join("fullstack","node","app.js")

console.log(filePath)


//  return all information of root dir base and name extension 
const pathParse =  path.parse(filePath)
console.log(pathParse)

// return file name only like app.js 
const pathBasename  =  path.basename(filePath)
console.log(pathBasename)

// return only folder name like fullstack\node . it not return file name like app.js
const pathDir  =  path.dirname(filePath)
console.log(pathDir)

// return extension name like .js .txt 
const pathExtension =  path.extname(filePath)
console.log(pathExtension)

// return all file and folder name with system folder like C:\local etc
const resolve  =  path.resolve(filePath)

console.log(resolve)




