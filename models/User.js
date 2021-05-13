const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
   age:{
       type:Number
   },
   category:{
       type:String,
       requird:true
   },
   members:{
       type:Number
   }
})
module.exports = mongoose.models.User || mongoose.model("User",UserSchema)  

