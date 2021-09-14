const request=require("request");
const cheerio=require ("cheerio");
request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard', cb );
function cb (error ,response, html) {
    if(error){
    console.log('error:', error);
    } // Print the error if one occurred
    else {
    extractHTML(html);
    }
}
function extractHTML(html){
   let selectorTool=cheerio.load(html)
   let motm= selectorTool(".playerofthematch-name")
 //  console.log(motm);
   let motmarr= selectorTool(motm[0]).text();
   console.log(motmarr);
}