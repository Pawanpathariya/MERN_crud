import { useState } from "react"
import axios from "axios"
import BASE_URL from "../../confiq"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
const Search=()=>{
    const navigate=useNavigate();
    const [jobTitle,setJobTitle]=useState('');
    const [jobs,setJobs]=useState([]);
    const handleSearch=async(e)=>{
        e.preventDefault();
        try {
            let api=`${BASE_URL}/user/searchjob`;
            let response=await axios.post(api,{jobTitle});
            setJobs(response.data);
            toast.success("Job Found");
        } catch (error) {
            toast.error(error.response.data);
        }
    }

    const ans=jobs.map((key)=>{
        return(
            <>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{key.jobTitle}</Card.Title>
          <Card.Text>
            HR Name : {key.id.name} <br />
            HR Email : {key.id.email} <br />
           Job Discription : {key.jobDesc} <br />
          Job Type:  {key.jobType} <br />
          Job Location:  {key.jobLocation} <br />   
          Job Salary:  {key.jobSalary} <br />
          </Card.Text>
          <Button variant="primary" onClick={()=>navigate(`/jobseeker/apply/${key._id}`)}>Apply</Button>
        </Card.Body>
      </Card>
      </>
        )

    })

    return(
        <>
        <h1 style={{textAlign:"center"}}>Search Job</h1>

    <div id="search" style={{backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',width:"300px",margin:"auto"}}>
 <label htmlFor="search" style={{display: 'block', marginBottom: '10px', fontSize: '18px', color: '#333'}}>
    Enter Job Title: <input type="text" value={jobTitle} onChange={(e)=>setJobTitle(e.target.value)} style={{width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc'}}/>
 </label>
 <button onClick={handleSearch} style={{backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', fontSize: '16px', borderRadius: '5px', border: 'none'}}>Search</button>
    </div>

    <div id="jobcard">
        {ans}
    </div>
    <ToastContainer/>
        </>
    )
}
export default Search