import { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from '../../confiq'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
const Job=()=>{
  const navigate=useNavigate();
    const [data,setData]=useState([]);

    const loadData=async()=>{
      try {
        let api=`${BASE_URL}/user/jobs`;
        let response=await axios.get(api);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
        loadData();
    }, []);

const handleApply=async(id)=>{
navigate(`/jobseeker/apply/${id}`);
}

    let ans=data.map((key)=>{
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
          <Button variant="primary" onClick={()=>handleApply(key._id)}>Apply</Button>
        </Card.Body>
      </Card>
      </>
        )
    })

    return(
        <>
        <h1 style={{textAlign:"center"}}>Jobs</h1>
        <div id="jobcard">
        {ans}
        </div>
        </>
    )
}
export default Job