import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5588',
    withCredentials: true
})
const useAxiosSecure = () => {
   let {logout}=useContext(AuthContext)
   let navigate=useNavigate()
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res
        },err=>{
            console.log('error tracked',err.response);
            if (err.response.status===401 || err.response.status===403) {
             console.log('log out the user');   
             logout()
             .then(()=>{
               navigate('/login')
             })
             .catch()
            }
        })
    },[])
    return axiosSecure

};

export default useAxiosSecure;