import JobFooter from "../../components/JobFooter"
import JobTopbar from "../../components/JobTopbar"
import { Outlet } from "react-router-dom"
const JobLayout=()=>{
    return(
        <>
      <JobTopbar/>
      <Outlet/>
      <JobFooter/>
        </>
    )
}
export default JobLayout