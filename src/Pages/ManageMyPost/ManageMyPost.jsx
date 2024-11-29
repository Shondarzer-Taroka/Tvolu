import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Authentication/useAxiosSecure/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const ManageMyPost = () => {
    let { user } = useContext(AuthContext)
    let [manageData, setManageData] = useState([])
    let [toggle, setToggle] = useState(false)
    let [myRequested, setmyRequested] = useState([])
    let [loadPost,setLoadPost]=useState(true)
    let [loadPostrequest,setloadPostrequest]=useState(true)
    let [postLoadToggle,setPostLoadToggle]=useState(false)
    let axiosSecure=useAxiosSecure()
    // console.log(user.email);

    let url=`/myneedvolunteer/${user?.email}`
    useEffect(() => {
        setLoadPost(true)
        
        // axios.get(`${import.meta.env.VITE_BASE_URL}/myneedvolunteer/${user?.email}`,{withCredentials:true})
        //     .then(res => {
        //         setManageData(res.data)
        //         setLoadPost(false)
        //         console.log(res.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        axiosSecure.get(url)
        .then(res=>{
            setManageData(res.data)
            setLoadPost(false)
            // console.log(res.data);
        })


    }, [user, toggle,url,axiosSecure])

    useEffect(() => {
        setloadPostrequest(true)
        axios.get(`${import.meta.env.VITE_BASE_URL}/myrequestedvolunteer/${user?.email}`,{withCredentials:true})
            .then(res => {
                setmyRequested(res.data)
                setloadPostrequest(false)
                console.log('lll', res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [user, postLoadToggle])

    // function handleUpdate(id) {
    //     axios.put(`${import.meta.env.VITE_BASE_URL}/updatevolunteer/${id}`)
    //     // console.log('kkk',id);
    //     // console.log('dfgfgd');
    // }
    function handleDelete(id) {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })

            .then(result => {
                if (result.isConfirmed) {
                    axios.delete(`${import.meta.env.VITE_BASE_URL}/deletevolunteer/${id}`)
                        .then(res => {
                            // console.log(res.data);
                            if (res.data.deletedCount > 0) {
                                setToggle(!toggle)
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
            })

    }











    function handleCancel(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })

            .then(result => {
                if (result.isConfirmed) {
                    axios.delete(`${import.meta.env.VITE_BASE_URL}/cancelrequested/${id}`)
                        .then(res => {
                            // console.log(res.data);
                            if (res.data.deletedCount > 0) {
                                // setTogglemyRequested(!toggle)
                                setPostLoadToggle(!postLoadToggle)
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
            })

    }


    return (
      <div>
        <Helmet>
            <title>Manage post</title>
        </Helmet>
            {    loadPost ?  <h1 className="text-center"><span className="loading loading-dots loading-lg"></span></h1> :   
            <section >
                <h1 className="text-4xl font-poppins font-bold text-center my-6 uppercase"> My Need Volunteer Post</h1>
               {         manageData.length === 0 ? <h2 className="text-[55px] font-bold font-poppins text-[#8885856d] text-center my-7">You Have No Post</h2> :
                <aside>
                    <div className="overflow-x-auto">
                        <table className="table table-xs sm:table-sm md:table-md lg:table-lg table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Deadline</th>
                                    <th>Update And Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    manageData.map((value, index) => {
                                        return <>
                                            <tr>
                                                <th>{index + 1}</th>
                                                <td>{value.organizer_name}</td>
                                                <td>{value.category}</td>
                                                <td>{new Date(value.deadline).toISOString().split('T')[0].split('-').reverse().join('/')} </td>
                                                <td className="text-white">  <Link to={`/update/${value._id}`}> <button className="btn btn-info text-white">Update</button></Link>   <button onClick={() => handleDelete(value._id)} className="text-white btn btn-success">Delete</button></td>


                                            </tr>
                                        </>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </aside>
}
            </section>

}

      { loadPostrequest ?   <h1 className="text-center"><span className="loading loading-dots loading-lg"></span></h1>:
            <section>
                <h1 className="text-center font-poppins font-bold text-4xl my-6 uppercase"> My Volunteer Request Post</h1>
               {
                myRequested.length==0 ? <h1 className="text-[55px] font-bold font-poppins text-[#8885856d] text-center my-7"> You Have No Requested Data </h1>:
            
                <aside>
                <div className="overflow-x-auto">
                        <table className="table table-xs sm:table-sm md:table-md lg:table-lg table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Deadline</th>
                                    <th>Location</th>
                                    <th>Cancel</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    myRequested.map((value, index) => {
                                        return <>
                                            <tr>
                                                <th>{index + 1}</th>
                                                <td>{value.organizer_name}</td>
                                                <td>{value.category}</td>
                                                <td>{new Date(value.deadline).toISOString().split('T')[0].split('-').reverse().join('/')} </td>
                                                <td>{value.location} </td>
                                                <td className="text-white"><button onClick={() => handleCancel(value._id)} className="text-white btn btn-success">Cancel</button></td>
                                            </tr>
                                        </>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </aside>
                   }
            </section>
}
        </div>
    );
};

export default ManageMyPost;