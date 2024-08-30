const { error } = require("console");
const fs=require("fs");

// fs.writeFile("message.txt","i am",(error)=>{
//     if(error){
//         console.log("unable to write data");
        
//     }const fs=require("fs");

// });


// fs.appendFile("message.txt","Optimus Prime",(error)=>{
//     if(error){
//         console.log("unable to write data");
        
//     }

// });


// fs.readFile("message.txt","utf-8",(error,data)=>{
//     if(error){
//         console.log("unable to read data");
        
//     }
//     else{fs.unlink("message.txt",(error)=>{
//     if(error){
//         console.log("unable to delete message");
        
//     }
// })

//         console.log(data);
        
//     }
// });

//unlinking

// fs.unlink("message.txt",(error)=>{
//     if(error){
//         console.log("unable to delete message");
        
//     }
// })
    


//crate folder

// fs.mkdir("pages",(error)=>{
//     if(error){
//     console.log("unable to create folder");
   
// }
// });

//get all files from folder

fs.readdir("pages",(error, data)=>{
    if(error){
        console.log("unable to get data");
        
    }
    else{
        console.log(data);
        
    }

});

