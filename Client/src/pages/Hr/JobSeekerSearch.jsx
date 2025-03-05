import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../../confiq"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
const JobSeekerSearch = () => {
    const [name, setName] = useState('');
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(1);

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSearch = async() => {   
        let hrid=localStorage.getItem('id');
        let api=`${BASE_URL}/job/searchjobseekers`;
        try {
           let response=await axios.post(api,{id:hrid,name:name});
           toast.success("User Found");
           setData(response.data);
        } catch (error) {
           toast.error(error.response.data);
        }
    }


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

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

    return (
        <>
        <h1 style={{textAlign:"center"}}>JobSeekerSearch</h1>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"20px"}}>
        <input type="text" value={name} onChange={handleChange} />
        <button onClick={handleSearch}>Search</button>
        </div>


        <table style={{width:"90%",margin:"auto"}}>
        <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Job Title</th>
                </tr>
     {ans}
        </table>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"20px"}}>
        {pageNumbers.map(number => (
            <button key={number} id={number} onClick={handleClick}>
                {number}
            </button>
        ))}
        </div>
        <ToastContainer/>
        </>
    )
}

export default JobSeekerSearch

