const express=require('express');
const router=express.Router();
const jobController=require('../controller/jobController')

router.post('/jobpost',jobController.Jobpost);  
router.post('/yoursjobs',jobController.yoursjobs);
router.post('/applyjob',jobController.applyjob);
router.post('/applyhistory',jobController.applyhistory);
router.post('/jobseekerslist',jobController.loadjobseekers);
router.post('/searchjobseekers',jobController.searchjobseekers);
module.exports=router