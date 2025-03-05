import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../confiq"
const ProtectedRouteJob = ({ Component}) => {
const navigate = useNavigate();

const token = localStorage.getItem('token');
const role = localStorage.getItem('role');
    useEffect(() => {
        if (!token) {
        navigate('/login');
    }
    if(token){
        let api=`${BASE_URL}/user/userAuthenticate`
        axios.get(api,{headers:{'x-auth-token':token}}).then((response)=>{
            localStorage.setItem('name',response.data.name);
            localStorage.setItem('email',response.data.email); 
        })
        }

    if(role=='hr'){
        navigate('/hr');
    }  
})

    return (
            <Component />
    )
}

export default ProtectedRouteJob