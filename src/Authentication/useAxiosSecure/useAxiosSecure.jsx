import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import {  useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'https://assignment-eleven-server-brown.vercel.app',
    withCredentials: true
})
const useAxiosSecure = () => {
   let {logout,user,setSpinner}=useContext(AuthContext)
 
   
   let navigate=useNavigate()
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res
        },async err=>{
            // console.log('error tracked',err.response);
            if (err.response.status===401 || err.response.status===403) {
            //  console.log('log out the user');   
           await logout()
             .then(()=>{
                setSpinner(false)
                axios.post('https://assignment-eleven-server-brown.vercel.app/logout',user,{withCredentials:true})
                // axios.post('https://assignment-eleven-server-brown.vercel.app/logout',user,{withCredentials:true})
               navigate('/login')
             })
             .catch()
            }
        })
    },[logout,navigate,setSpinner,user])
    return axiosSecure

};

export default useAxiosSecure;



// 
// axiosSecure.interceptors.response.use(
//     res => {
//       return res
//     },
//     async error => {
  
//       if (error.response.status === 401 || error.response.status === 403) {
//         await logOut()
//         navigate('/login')
//       }
//       return error.response;
//     }
//   )