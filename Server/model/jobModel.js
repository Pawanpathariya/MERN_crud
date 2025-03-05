const mongoose=require('mongoose');
const jobSchema=new mongoose.Schema({
        jobTitle: String,
        jobDesc: String,
        jobType: String,
        jobLocation: String,
        jobSalary: String,
        jobExp: String,
        jobSkills: String,
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
})

module.exports=mongoose.model('job',jobSchema);