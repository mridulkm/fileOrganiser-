let fs=require("fs");
let path = require("path");
// let content=fs.readFileSync('f1.txt')
// console.log(content + "");  // content + " " written to convert data in f1 file from hexa to readable string

// fs.writeFileSync("new.txt", "this is vs code")  // new file named new.txt will be created automatically 
// fs.appendFileSync("new.txt"," this is a line") // append "this is a line" in new.txt file

// fs.unlinkSync("new.txt");  // to delete a file


// directories / to make a folder
// fs.mkdirSync("pathModule")

// to delete a folder 
// fs.rmdirSync("pathModule")

//to check if a file exist or not
//  let fileExist=fs.existsSync("fs.js")
//  console.log("fs.js file exist or not?",fileExist)

// statusObj of file/folder
//  let statusObj=fs.lstatSync("f1.txt")
//  console.log(statusObj)

 // if its file 
//  let isfile=statusObj.isFile()
//  console.log(isfile)

 // if its directory/folder
//  let isfile2=statusObj.isDirectory()
//  console.log(isfile2)

 // to tell all files present in a folder
 // comment above code except 1st line before writing this
 // C:/Users/Mridul/Desktop/Java Theory/fileOrganiser/fsModule> use / rather than \. And be at fsModule to execute this
// at o/p we see an array with a.txt and b.txt file
 let fileArr=fs.readdirSync('C:/Users/Mridul/Desktop/Java Theory/fileOrganiser/fsModule/dir')
//  console.log(fileArr);
 
 
 // now make pathModule folder 
 //then make a file path.js in it
 //go there 
 
 let srcPath="C:/Users/Mridul/Desktop/Java Theory/fileOrganiser/fsModule/dir/a.txt"
 let destPath="/Users/Mridul/Desktop/Java Theory/fileOrganiser/fsModule/dir/b.txt"
 //fs.copyFileSync(srcPath,destPath)
 
 
 let toBeCopiedFileName=path.basename(srcPath) //basename is a.txt file
 let dest=path.join("C:/Users/Mridul/Desktop/Java Theory/fileOrganiser/fsModule/dir", toBeCopiedFileName);  // a.txt will be in dir folder 
 console.log(dest)
 fs.copyFileSync(srcPath,dest)
 fs.copyFileSync(srcPath,destPath)
 
 
//create a file at C:\Users\Mridul\Desktop\Java Theory\fileOrganiser\fsModule\act-1.js 
  