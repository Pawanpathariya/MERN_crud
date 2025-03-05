import { useState } from 'react';
import BASE_URL from '../confiq'
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Registeration = () => {
    const navigate=useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('jobseeker');

    const handleRegister = async(e) => {
        e.preventDefault();
try {
    let api=`${BASE_URL}/user/register`
    let response=await axios.post(api,{name,email,mobile,password,role})
    toast.success(response.data);

    setTimeout(() => {
        navigate('/login');
    },2000)
} catch (error) {
    toast.error(error.response.data);
}
    };

    return (
        <>
<div className='index'>
        <div id='register'> 
            <h1>Registration</h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Mobile:</label>
                    <input
                        type="mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Role:</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="jobseeker">Jobseeker</option>
                        <option value="hr">HR</option>
                    </select>
                </div>
                <button type="submit" onClick={handleRegister}>Register</button>
            </form>
        </div>
        </div>
        
        <ToastContainer />
        </>
    );
}

export default Registeration;
