const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
name:String,
email:String,
mobile:String,
password:String,
role:String

})

module.exports=mongoose.model('user',userSchema);