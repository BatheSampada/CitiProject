var mongoose=require('mongoose');
var db = require('../conn');
// create an schema
var userSchema = new mongoose.Schema({
            Name: String,
            Pass :String
        });

userTable=mongoose.model('RegisteredUser',userSchema);
        
module.exports={
     
     fetchData:function(callback){
        //var Name = "sampada"
        var userData =userTable.findOne({'Name': 'sampada'});
        //console.log(userData)
        
        userData.exec(function(err, data){
            if(err) throw err;
           // console.log(data)
           
            return callback(data);
        })
        
     }
}