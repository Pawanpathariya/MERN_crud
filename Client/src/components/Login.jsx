import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../confiq'
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
    const navigate=useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('jobseeker');

    const handleLogin = async(e) => {
        e.preventDefault();
       try {
        let api=`${BASE_URL}/user/login`
        let response=await axios.post(api,{email,password,role})
        toast.success(response.data);
        localStorage.setItem('token',response.data.token);
        localStorage.setItem('role',response.data.role);
        localStorage.setItem('id',response.data.id);

        if(response.data.role=='jobseeker'){
            toast.success('Login Success');
     setTimeout(() => {
        navigate('/jobseeker/home');

     },2000)

        }else{
            toast.success('Login Success');
            setTimeout(() => {
                navigate('/hr');
       
            },2000)

        }
       } catch (error) {
        toast.success(error.response.data);
       }
    };

    const Registeration = () => {
        navigate('/register');
    }


const checkLogin=async()=>{
    const token=localStorage.getItem('token');
    const role=localStorage.getItem('role');
    if(token && role){
        if(role=='jobseeker'){
            navigate('/jobseeker/home');
        }else{
            navigate('/hr');
        }
    }
}

useEffect(() => {
    checkLogin();
}, []);

    return (
        <>
<div className='index'>
        <div id='login'>
            <h1>Login</h1>
            <form >
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

                <button onClick={handleLogin} >Login</button>                
            </form>
            <button onClick={Registeration} id='btnreg'>Register</button>

        </div>
        </div>
        <ToastContainer/>
        </>
    );
};

export default Login;
