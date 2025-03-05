import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const JobTopbar = () => {
    const navigate = useNavigate();
    const name=localStorage.getItem('name');
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="topbarJob">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/jobseeker/home">Job Portal</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/jobseeker/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/jobseeker/job">Jobs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/jobseeker/search">Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/jobseeker/applyhistory">Apply History</Link>
                        </li>
                    </ul>
                    Signed in as: {name}
                    <button className="btn btn-outline-danger" onClick={() =>{ localStorage.clear(),navigate('/login')}} style={{marginLeft:"10px"}}>Logout!</button>

                </div>
            </div>
        </nav>
    )
}

export default JobTopbar;

