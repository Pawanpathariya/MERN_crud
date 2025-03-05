import { Outlet } from "react-router-dom"
import HrSidebar from "../../components/HrSidebar"
import HrTopbar from "../../components/HrTopbar"
const DashBoard=()=>{
    return(
        <>
        <HrTopbar/>
<div id="dashboard">
<HrSidebar/>
<div id="content">
<Outlet/>
</div>
</div>
        </>
    )
}

export default DashBoard