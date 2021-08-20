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
        var Name = "sampada"
        var userData =userTable.find({Name:Name});
        userData.exec(function(err, data){
            if(err) throw err;
            return callback(data);
        })
        
     }
}