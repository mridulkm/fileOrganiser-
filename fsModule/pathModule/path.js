let path=require("path")
let fs=require("fs")

// come to pathModule in terminal
let inputArr=process.argv.slice(2)
console.log(inputArr);

let fileName= inputArr[0];
let content= inputArr[1];
// console.log('filename',fileName)
// console.log('content',content)
// on terminal write node path.js a.txt "any text"
// we see at output-
// filename a.txt
//content any text

//tells current working directory 
let currentPath=process.cwd() 
// console.log(currentPath);

let joinedPath=path.join(currentPath,'abc','b.txt')
//console.log(joinedPath)



let file=path.basename("C:/Users/Mridul/Desktop/Java Theory/fileOrganiser/fsModule/pathModule/path.js")
console.log(file)

// to know extension of a file
let extName=path.extname("C:/Users/Mridul/Desktop/Java Theory/fileOrganiser/fsModule/pathModule/path.js")
//console.log(extName)

// come back to fs.js