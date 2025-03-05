import { useParams } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import axios from "axios";
import BASE_URL from "../../confiq";
import { useNavigate } from "react-router-dom";
const Apply=()=>{
    const userid=localStorage.getItem('id');
    const navigate=useNavigate();
    const {id}=useParams();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [message,setMessage]=useState('');
    const [cv,setCv]=useState('');
    const handleApply=async(e)=>{
        e.preventDefault();

        try{
      const formData=new FormData();
      formData.append('file',cv);
      formData.append('upload_preset','pawan_cloud');
      formData.append('cloud_name','dbwpnzi57');
      const api='https://api.cloudinary.com/v1_1/dbwpnzi57/image/upload'
      const response=await axios.post(api,formData);
      let api1=`${BASE_URL}/job/applyjob`;
      let response1=await axios.post(api1,{name,email,phone,message,cv:response.data.url,jobid:id,userid:userid});
      await toast.success(response1.data);
      setTimeout(() => {
         navigate('/jobseeker/home'); 
      },2000)
       
        }
        catch(error){
            toast.error(error.response.data);
        }
    }
    return(
        <>
        <h1 style={{textAlign:'center'}}>Apply Job</h1>
            <form style={{width:'50%',margin:'auto'}}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cv" className="form-label">CV</label>
                    <input type="file" className="form-control" id="cv" onChange={(e) => setCv(e.target.files[0])} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleApply}>Apply</button>
            </form>
            <ToastContainer />
        </>
    )
}
export default Apply