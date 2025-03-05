import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./components/Login"
import Home from "./pages/JobSeeker/Home"
import Job from "./pages/JobSeeker/Job"
import Apply from './pages/JobSeeker/Apply';
import Search from "./pages/JobSeeker/Search"
import DashBoard from "./pages/Hr/DashBoard"
import Registeration from './components/Registeration';
import JobLayout from './pages/JobSeeker/JobLayout';
import ProtectedRouteHr from './pages/Hr/ProtectedRouteHr';
import ProtectedRouteJob from './pages/JobSeeker/ProtectedRouteJob';
import JobPost from './pages/Hr/JobPost';
import JobSeekerList from './pages/Hr/JobSeekerList';
import JobSeekerSearch from './pages/Hr/JobSeekerSearch';
import HrHome from './pages/Hr/HrHome';
import YourJobs from './pages/Hr/YourJobs';
import ApplyHistory from './pages/JobSeeker/ApplyHistory';
const App=()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Registeration/>}/>
      </Routes>

<Routes>
  <Route path='/jobseeker' element={<ProtectedRouteJob Component={JobLayout}/>}>
    <Route index element={<ProtectedRouteJob Component={Home}/>}/>
    <Route path="home" element={<ProtectedRouteJob Component={Home}/>}/>
    <Route path='job' element={<ProtectedRouteJob Component={Job}/>}/>
    <Route path='apply/:id' element={<ProtectedRouteJob Component={Apply}/>}/>
    <Route path='search' element={<ProtectedRouteJob Component={Search}/>}/>
    <Route path='applyhistory' element={<ProtectedRouteJob Component={ApplyHistory}/>}/>

  </Route>
  </Routes>
  <Routes>
  <Route path='/hr' element={<ProtectedRouteHr Component={DashBoard}/>}>
  <Route index element={<ProtectedRouteHr Component={HrHome}/>}/>
  <Route path='post' element={<ProtectedRouteHr Component={JobPost}/>}/>
     <Route path='seeker' element={<ProtectedRouteHr Component={JobSeekerList}/>}/>
     <Route path='yourjob' element={<ProtectedRouteHr Component={YourJobs}/>}/>
     <Route path='search' element={<ProtectedRouteHr Component={JobSeekerSearch}/>}/>
  </Route>
</Routes>


    </BrowserRouter>
  )
}
export default App
