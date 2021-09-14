let str="haaleluya";
let a = 10;
function foo(msg){
    return 'hi , i was in owner.js'+msg;
}
console.log("hello there i am in owner.js");
module.exports={
    string : str,
    var:a,
    foofunc:foo
};
//go to client file