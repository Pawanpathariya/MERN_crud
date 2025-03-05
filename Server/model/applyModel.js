const mongoose=require('mongoose');
const ApplySchema=new mongoose.Schema({
       name:String,
        email:String,
        phone:String,
        message:String,
        cv:String,
        jobid:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "job"
        },
        userid:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
})

module.exports=mongoose.model('apply',ApplySchema);