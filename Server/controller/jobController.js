const jobModel=require('../model/jobModel');
const applyModel=require('../model/applyModel');

const Jobpost=async(req,res)=>{
const {jobTitle,jobDesc,jobType,jobLocation,jobSalary,jobExp,jobSkills,id}=req.body;
try {
    const job=await jobModel.create({jobTitle,jobDesc,jobType,jobLocation,jobSalary,jobExp,jobSkills,id});
    res.status(200).send("Job Posted");
} catch (error) {
    res.status(500).send("Server Error");
}
}
const yoursjobs=async(req,res)=>{
    const {id}=req.body;
    try {
        const jobs=await jobModel.find({id:id})
        res.status(200).send(jobs);
    } catch (error) {
        res.status(500).send("Server Error");
    }
}


const applyjob=async(req,res)=>{
    try {
        const{ name,email,phone,message,cv,jobid,userid}=req.body;  
        const apply=await applyModel.create({name,email,phone,message,cv,jobid,userid});
    res.status(200).send("Applied Successfully");
    } catch (error) {
        res.status(500).send("Server Error");
    }

}


const applyhistory=async(req,res)=>{
    const {id}=req.body;
    try {
        const jobs=await applyModel.find({userid:id}).populate({path:"jobid",populate:{path:"id"}}).populate("userid");
        res.status(200).send(jobs);
    } catch (error) {
        res.status(500).send("Server Error");
    }
}

const loadjobseekers=async(req,res)=>{
    const {id}=req.body;
    try {
        const jobs = await jobModel.find({ id: id }).populate("id");
        const jobIds = jobs.map(job => job._id);
        const data1 = await applyModel.find({ jobid: { $in: jobIds } }).populate("userid").populate("jobid");
        res.status(200).send(data1);
    } catch (error) {
        res.status(500).send("Server Error");
    }
  

}



const searchjobseekers=async(req,res)=>{
    const { id, name } = req.body;
    try {
        const jobs = await jobModel.find({ id: id }).populate("id");
        const jid = jobs[0]._id;
        const applicants = await applyModel.find({ jobid: jid, 'name': name }).populate("userid").populate("jobid");
  
        if(applicants.length==0){
            return res.status(400).send("No Applicants Found");
        }

        res.status(200).send(applicants);
    } catch (error) {
        res.status(500).send("Server Error");
    }


}

module.exports={
    Jobpost,
    yoursjobs,
    applyjob,
    applyhistory,
    loadjobseekers,
    searchjobseekers

};