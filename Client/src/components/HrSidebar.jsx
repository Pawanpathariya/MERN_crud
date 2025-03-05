import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const HrSidebar = () => {
    const navigate = useNavigate();
    return (
     
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark" style={{width: '280px'}} id='sidebar'>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4" style={{textAlign: 'center',width: '100%'}}>HR Dashboard</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link to="/hr" className="nav-link text-white" aria-current="page">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/hr/post" className="nav-link text-white">
                        Post Job
                    </Link>
                </li>
                <li>
                    <Link to="/hr/yourjob" className="nav-link text-white">
                     Yours Job
                    </Link>
                </li>
                <li>
                    <Link to="/hr/seeker" className="nav-link text-white">
                        Job Seeker
                    </Link>
                </li>
                <li>
                    <Link to="/hr/search" className="nav-link text-white">
                        Job Seeker Search
                    </Link>
                </li>
                <li>
                <button className="btn btn-outline-danger" onClick={() =>{ localStorage.clear(),navigate('/login')}}>Logout!</button>
                </li>
            </ul>
          
        </div>

    )
}

export default HrSidebar;

