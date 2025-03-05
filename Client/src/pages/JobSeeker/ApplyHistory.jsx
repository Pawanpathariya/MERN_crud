import { useState,useEffect } from "react"
import axios from "axios";
import BASE_URL from "../../confiq"

const ApplyHistory = () => {
    const [jobs, setJobs] = useState([]);

    const loadjobs=async()=>{
  let api=`${BASE_URL}/job/applyhistory`;
  let response=await axios.post(api,{id:localStorage.getItem('id')});
  setJobs(response.data);
    }

    useEffect(() => {
        loadjobs();
    }, []);

    const ans=jobs.map((key)=>{
        return(
          
<tr key={key._id}>
<td style={{padding:"10px"}} >{key.jobid.jobTitle}</td>
<td style={{padding:"10px"}} >{key.jobid.id.name}</td>
<td style={{padding:"10px"}} >{key.jobid.id.email}</td>
<td style={{padding:"10px"}} >{key.jobid.jobDesc}</td>
<td style={{padding:"10px"}} >{key.jobid.jobType}</td>
<td style={{padding:"10px"}} >{key.jobid.jobLocation}</td>
<td style={{padding:"10px"}} >{key.jobid.jobSalary}</td>
</tr>

        )
    })
          



    return (
        <>
        <h1 style={{textAlign:"center",margin:"20px"}}>Apply History</h1>


        <table className="table table-bordered" style={{width:"90%",margin:"auto"}}>
            <tr>
                <th style={{padding:"10px"}}>Job Title</th>
                <th style={{padding:"10px"}} >HR Name</th>
                <th style={{padding:"10px"}}  >HR Email</th>
                <th style={{padding:"10px"}}  >Job Discription</th>
                <th style={{padding:"10px"}}  >Job Type</th>
                <th style={{padding:"10px"}}  >Job Location</th>
                <th style={{padding:"10px"}}  >Job Salary</th>
            </tr>
{ans}

        </table>
        </>
    )
}

export default ApplyHistory
