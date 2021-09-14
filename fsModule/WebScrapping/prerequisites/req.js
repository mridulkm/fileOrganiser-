// const request=require('request');
// const cheerio=require('cheerio');  // used for parsing html file in node.js . 
// //Cheerio parses markup and provides an API for manipulating the resulting data structure but does not interpret the result like a web browser.
// // The major difference between cheerio and a web browser is that cheerio does not produce visual rendering, load CSS, load external resources or execute JavaScript. It simply parses markup and provides an API for manipulating the resulting data structure.
// // request from npm. write "npm i request"
// //now type "request npm" on google

// // request('http://www.google.com', cb)
// //  function cb (error, response, body) {
// //   console.error('error:', error); // Print the error if one occurred
// //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// //   console.log('body:', body); // Print the HTML for the Google homepage.
// // }

// request('https://www.worldometers.info/coronavirus/', cb);
// function cb (error , html) {
//     if(error){
//     console.log('error:', error);
//     } // Print the error if one occurred
//     else {
        
//     extractHTML(html) 
//     }
// };

// //on terminal write the extractor command to extract data from a site. write "npm i cheerio"
// //require cheerio now. write on 2nd line above in code.

// function extractHTML(html){
//     let selectorTool=cheerio.load(html);
//     let statsArr=selectorTool('.maincounter-number');
   
//     for(let i=0;i<statsArr.length;i++){
//         let data=selectorTool(statsArr[i]).text();
//         console.log(data);
//     }
// }




const request=require('request');
const cheerio=require('cheerio');
request('https://www.worldometers.info/coronavirus/', cb); // Print the HTML for the Google homepage.

function cb (error, response, html) {
    if(error){
    console.error('error:', error); // Print the error if one occurred
    }
    else {
        extractHTML(html);
    }
};

function extractHTML(html){
    let selectorTool=cheerio.load(html);
    let statsArr=selectorTool('.maincounter-number');
    // console.log(statsArr);
    // console.log(statsArr.length);
    for(let i=0;i<statsArr.length;i++){
        let data=selectorTool(statsArr[i]).text();
        console.log(data);
    }
}

//h.w. 

// chalk.js

// npm chalk-> 

