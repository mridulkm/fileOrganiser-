let fs=require("fs")      
let path=require("path");
let inputArr=process.argv.slice(2);
let inputDir=inputArr[0];
//console.log(inputDir)

let allEntities=fs.readdirSync(inputDir);
console.log(allEntities);

// come to fsModule on terminal and copy path of dir . 
// write "node act1.js C:\Users\Mridul\Desktop\Java\fileOrganiser\fsModule\dir"
// at output see "[ 'a.txt', 'b.txt', 'f1.txt', 'folder', 'hello.js' ]"
                                                                                                 
let content="";
for (let i=0;i<allEntities.length;i++){
     let entityName =allEntities[i];
     console.log(entityName);
     let eName=path.join(inputDir,entityName);
     let stats=fs.lstatSync(eName);   // lstatsync to check if the file is txt or js or folder
     console.log(stats); 
 // }     
     
    let isFile=stats.isFile();
     if (isFile){
         let extName=path.extname(eName);
         if (extName==".txt"){
             content+= fs.readFileSync(eName);
         }
     }
}
console.log(content);
// let summaryFile=path.join.(process.cwd,'summary.txt')

let summaryFile="C:/Users/Mridul/Desktop/JavaTheory/fileOrganiser/fsModule/summary.txt"
fs.writeFileSync(summaryFile,content);
