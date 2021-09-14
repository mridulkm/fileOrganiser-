let fs= require("fs");
let path=require('path');

let inputArr=process.argv.slice(2);
let mainDir=inputArr[0];  //WebD
let subDirec= inputArr.slice(1);  // Javascript MongoDB React

// console.log(mainDir);
// console.log(subDirec);
// PS C:\Users\Mridul\Desktop\JavaTheory\fileOrganiser\fsModule> node act2.js  WebD Javascript MongoDB React                                    
// WebD Javascript MongoDB React
// [ 'Javascript', 'MongoDB', 'React' ]


let mainDirPath=path.join(process.cwd(),mainDir);
if (!fs.existsSync(mainDirPath)){
    fs.mkdirSync(mainDirPath);   //will make a webd folder
}

for (let i=0;i<subDirec.length;i++){
   // console.log(subDirec[i]);
    let folder=path.join(mainDirPath,subDirec[i]);
  console.log("folder name", folder)
    if(!fs.existsSync(folder)){
    fs.mkdirSync(folder);
    }
    for(let j=1;j<=3;j++){
        let module=path.join(folder,`Module${j}`);
        console.log(module);
         fs.mkdirSync(module);
         let filename= path.join(module,'content.md');
         fs.writeFileSync(filename,"hello everyone")
    }
}
