

 // Now how to use html files .LET'S SEE

const express = require("express");

const path = require("path");
const { title } = require("process");
//const { fstat } = require("fs");
const  fs = require("fs");
const app = express();
const port= 80;

//  EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'));

app.use(express.urlencoded());

//   PUG SPECIFIC STUFF
app.set('view engine','pug'); //  Set the template engine as pug
app.set('views',path.join(__dirname,'views'));// Set the views ditrectory 

//END POINTS 
app.get('/',(req,res)=>{
   
    const con ="This is the best content on the internet so far so use it wisely";
    const params ={'title':'GYM by PUG' , 'content' : con };
    // send use nhi krenge infact render use krenge kuki hm render kr rhe h 
res.status(200).render('index.pug', params );
});

app.post('/' , (req,res)=>{

name=req.body.name;
email=req.body.email;
age=req.body.age;
gender=req.body.gender;
address=req.body.address;
more=req.body.more;

let outputtowrite=`The name is ${name} , age is ${age} , Email is ${email} , gender is ${gender} ,address is ${address} and more about ${name} is -- ${more} `;
fs.writeFileSync('output.txt',outputtowrite);

const params={'message':'Your Form has submitted suceesfully '};
res.status(200).render('index.pug',params);
});


// START THE SERVER
app.listen(port,()=>{
console.log(`The application started sucessfully on port ${port}`);
});
