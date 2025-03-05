import { Link } from 'react-router-dom';

const JobFooter = () => {
    return (
        <footer className="footer mt-auto py-3" style={{backgroundColor: '#f8f9fa'}}>
            <div className="container-fluid">
                <div className="text-center">
                    <span className="text-muted">
                        Copyright &copy; Job Portal 2023
                        <Link to="/privacy-policy" className="ms-2">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="ms-2">Terms of Service</Link>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default JobFooter;

