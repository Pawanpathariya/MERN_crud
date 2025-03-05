const bcrypt=require("bcryptjs")
const userModel=require("../model/userModel")
const jobModel=require("../model/jobModel")
const jwt=require("jsonwebtoken")
require("dotenv").config();
const register=async(req,res)=>{
    try {
        const{name,email,mobile,password,role}=req.body;
        const salt=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(password,salt);
        const user=userModel.create({name,email,mobile,password:hashPassword,role});
          res.status(200).send("user register");
    } catch (error) {
        res.status(500).send("Server Error");
    }

}
const login=async(req,res)=>{
    const{email,password,role}=req.body;
    try {
        const user=await userModel.findOne({email:email});
        if(!user){
            return res.status(400).send("Invalid Email");
        }
        if(user.role!=role){
           return res.status(400).send("Invalid Role");
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).send("Invalid Password");
        }
  
     const token=await jwt.sign({id:user._id},process.env.SECRETE_KEY,{expiresIn:"7 days"});
        res.status(200).send({name:user.name,email:user.email,mobile:user.mobile,role:user.role,token:token,id:user._id});

    } catch (error) {
        res.status(500).send("Server Error");
    }
}

const UserAuthenticate=async(req, res)=>{
    const token = req.header("x-auth-token");
try {
    const verify= await jwt.verify(token, process.env.SECRETE_KEY);
    if(!verify){
        return res.status(400).send("Invalid Token");
    }
    const User= await userModel.findById(verify.id).select("-password");
    res.send(User);
} catch (error) {
    res.status(500).send("Server error");
}

}

const jobs=async(req,res)=>{
try {
    const jobs=await jobModel.find().populate("id");
    res.status(200).send(jobs);
} catch (error) {
    res.status(500).send("Server Error");
}
}
const searchjob=async(req,res)=>{
    const {jobTitle}=req.body;
    try {
        const jobs=await jobModel.find({jobTitle:jobTitle}).populate("id");
         if(jobs.length==0){
            return res.status(400).send("No Jobs Found");
        }
        res.status(200).send(jobs);
    } catch (error) {
        res.status(500).send("Server Error");
    }
    }


module.exports={register,login,UserAuthenticate,jobs,searchjob};
