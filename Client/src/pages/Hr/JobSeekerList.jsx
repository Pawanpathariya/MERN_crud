import { useState,useEffect } from "react";
import axios from "axios";
import BASE_URL from "../../confiq"
import { Table,Pagination } from 'react-bootstrap';

const JobSeekerList=()=>{
    const hrid=localStorage.getItem('id');
    const [jobseekers,setJobseekers]=useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(1);

    const loadjobseekers=async()=>{
     let api=`${BASE_URL}/job/jobseekerslist`;
     try {
        let response=await axios.post(api,{id:hrid});
        setJobseekers(response.data);
     } catch (error) {
        console.log(error);
     }
    }

    useEffect(() => {
        loadjobseekers();
    }, []);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = jobseekers.slice(indexOfFirstItem, indexOfLastItem);

    const ans=currentItems.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.userid.name}</td>
                <td>{key.userid.email}</td>
                <td>{key.userid.mobile}</td>
                <td>{key.jobid.jobTitle}</td>
            </tr>
            <tr>
            <td colSpan={4}><img src={key.cv} className="img-fluid" style={{height:"400px"}}/></td>
            </tr>
            </>
        )
    })

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(jobseekers.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <>
        <h1>Job Seeker List</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Job Title</th>
                </tr>
            </thead>
            <tbody>
                {ans}
            </tbody>
        </Table>
        <Pagination className="justify-content-center">
            <Pagination.Prev onClick={handleClick} id={currentPage - 1} disabled={currentPage === 1} />
            {pageNumbers.map(number => (
                <Pagination.Item key={number} id={number} active={number === currentPage} onClick={handleClick}>
                    {number}
                </Pagination.Item>
            ))}
            <Pagination.Next onClick={handleClick} id={currentPage + 1} disabled={currentPage >= pageNumbers.length} />
        </Pagination>
        </>
    )
}

export default JobSeekerList

