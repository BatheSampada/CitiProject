const express = require('express');
const dotenv=require('dotenv');
const path = require('path');
const routerPath = require('./router/auth.js')

//now using app we can access all methods of express.
const app = express();



//environment variable
//process.env.port will run our application on availab
const port= process.env.PORT || 3000 ;



//middleware
//const middleware = (req,res,next) => {
 //console.log("hello  middleware");
 //next();
//}



//mongodb connection
//dotenv.config({path: './config.env'});
require('./db/conn');

//to convert the json data into object 
//app.use(express.json);

//const User = require('./model/userSchema');

//linking our router file to make it easy
//app.use('/',require('./router/auth'));




//public static path
const static_path= path.join(__dirname,"../server/public");
 app.use(express.static(static_path));

 app.get('/',function(req,res){
    res.send("hello Home page")
}) 

app.use('/',routerPath)

app.listen(port, () => {
    console.log(`listening to the port  at ${port} `)
})
