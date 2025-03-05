import { useState } from "react";
import axios from "axios";
import BASE_URL from "../../confiq"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
const JobPost = () => {
    const id=localStorage.getItem('id');
    const [jobTitle, setJobTitle] = useState('');
    const [jobDesc, setJobDesc] = useState('');
    const [jobType, setJobType] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    const [jobSalary, setJobSalary] = useState('');
    const [jobExp, setJobExp] = useState('');
    const [jobSkills, setJobSkills] = useState('');

    const handleJobPost = async(e) => {
        e.preventDefault();
  try {
    let api=`${BASE_URL}/job/jobpost`
    let response=await axios.post(api,{jobTitle,jobDesc,jobType,jobLocation,jobSalary,jobExp,jobSkills,id});
    toast.success(response.data);
    setJobTitle('');setJobDesc('');setJobType('');setJobLocation('');setJobSalary('');setJobExp('');setJobSkills('');
  } catch (error) {
    toast.error(error.response.data);
  }


    }

    return (
        <>
        <h1>JobPost</h1>
        <div id='jobpost'>
         <h3>Enter Job Details</h3>
         <form >
            <div className="mb-3 input-group">
                <label htmlFor="jobTitle" className="input-group-text">Job Title</label>
                <input type="text" className="form-control" id="jobTitle" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
            </div>
            <div className="mb-3 input-group">
                <label htmlFor="jobDesc" className="input-group-text">Job Description</label>
                <textarea className="form-control" id="jobDesc" value={jobDesc} onChange={(e) => setJobDesc(e.target.value)} />
            </div>
            <div className="mb-3 input-group">
                <label htmlFor="jobType" className="input-group-text">Job Type</label>
                <select className="form-select" id="jobType" value={jobType} onChange={(e) => setJobType(e.target.value)}>
                    <option value="">Select</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="internship">Internship</option>
                </select>
            </div>
            <div className="mb-3 input-group">
                <label htmlFor="jobLocation" className="input-group-text">Job Location</label>
                <input type="text" className="form-control" id="jobLocation" value={jobLocation} onChange={(e) => setJobLocation(e.target.value)} />
            </div>
            <div className="mb-3 input-group">
                <label htmlFor="jobSalary" className="input-group-text">Job Salary</label>
                <input type="text" className="form-control" id="jobSalary" value={jobSalary} onChange={(e) => setJobSalary(e.target.value)} />
            </div>
            <div className="mb-3 input-group">
                <label htmlFor="jobExp" className="input-group-text">Job Experience</label>
                <input type="text" className="form-control" id="jobExp" value={jobExp} onChange={(e) => setJobExp(e.target.value)} />
            </div>
            <div className="mb-3 input-group">
                <label htmlFor="jobSkills" className="input-group-text">Job Skills</label>
                <input type="text" className="form-control" id="jobSkills" value={jobSkills} onChange={(e) => setJobSkills(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleJobPost}>Post Job</button>
        </form>
        </div>
        <ToastContainer/>
        </>
    )
}

export default JobPost
