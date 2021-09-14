const request=require("request");
const cheerio=require ("cheerio");
request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary', cb );
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
   let motm=selectorTool(".match-comment-wrapper .match-comment-long-text")
 //  console.log(motm);
   let motmarr= selectorTool(motm[0]).text();
   console.log(motmarr);
}