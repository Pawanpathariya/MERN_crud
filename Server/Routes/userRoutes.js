const express=require('express');
const router=express.Router();
const userController=require('../controller/userController')
router.post('/register',userController.register);
router.post('/login',userController.login);
router.get('/userAuthenticate',userController.UserAuthenticate);
router.get('/jobs',userController.jobs);
router.post('/searchjob',userController.searchjob);
module.exports=router