const { readFile } = require("fs");
console.log("Starting the firts task")
readFile('./first.txt','utf8',(err,result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result);
    console.log("end of the first task")
})
console.log("staring of next task")