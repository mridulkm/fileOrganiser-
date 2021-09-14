let fs= require("fs");
fs.readFile("f1.txt",cb);
console.log('before');
// console.log(content);

function cb(err,content){
    if(err){
        console.log("error",err);
    }else {
        console.log(content +"");
    }
}

// function cb(content,err){
//     if(err){
//         console.log(content+"");
//     }else {
//         console.log("error",err);
//     }
// }
console.log('after');