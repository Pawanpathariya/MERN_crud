const express=require('express');
const app=express();
const cors=require('cors');
const bodyparser=require('body-parser');
require('dotenv').config();
const port=process.env.PORT;
const mongoose = require('mongoose');
const userRoutes=require('./Routes/userRoutes');
const jobRoutes=require('./Routes/jobRoutes');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
mongoose.connect(process.env.MONGOCONNECT).then((res)=>console.log("DB connected"));

app.use('/user',userRoutes);
app.use('/job',jobRoutes);
app.listen(port,()=>console.log(`Server is running on port ${port}`));
