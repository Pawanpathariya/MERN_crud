import { useState,useEffect } from "react";
import axios from "axios";
import BASE_URL from "../../confiq"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const YourJobs = () => {
const [jobs, setJobs] = useState([]);
const id=localStorage.getItem('id');

const loadjobs=async()=>{ 
    let api=`${BASE_URL}/job/yoursjobs`
    let response=await axios.post(api,{id:id});
    setJobs(response.data);
}

useEffect(() => {
    loadjobs();
}, []);

let ans=jobs.map((key)=>{
    return(
        <>
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{key.jobTitle}</Card.Title>
      <Card.Text>
       Job Discription : {key.jobDesc} <br />
      Job Type:  {key.jobType} <br />
      Job Location:  {key.jobLocation} <br />   
      Job Salary:  {key.jobSalary} <br />
      </Card.Text>
    </Card.Body>
  </Card>
  </>
    )
})
    return (
        <>
        <h1>Your Jobs</h1>

        <div id="jobcard">
        {ans}
        </div>
        </>
    )
}

export default YourJobs;