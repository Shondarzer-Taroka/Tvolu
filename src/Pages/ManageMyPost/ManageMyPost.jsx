import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ManageMyPost = () => {
    let { user } = useContext(AuthContext)
    let [manageData, setManageData] = useState([])
    // console.log(user.email);


    useEffect(() => {
        axios.get(`http://localhost:5588/myneedvolunteer/${user?.email}`)
            .then(res => {
                setManageData(res.data)
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [user])

    function handleUpdate(id) {
        console.log('kkk',id);
        console.log('dfgfgd');
    }
    function handleDelete(id) {
        console.log('kkk',id);
        console.log('dfgfgd');
    }


    return (
        <div>
            <section >
                <h1 className="text-2xl font-poppins font-bold"> My Need Volunteer Post</h1>
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
                                    manageData.map((value,index) => {
                                        return <>
                                            <tr>
                                                <th>{index+1}</th>
                                                <td>{value.organizer_name}</td>
                                                <td>{value.category}</td>
                                                <td>{value.deadline}</td>
                                                <td className="text-white"> <button onClick={()=> handleUpdate(value._id)} className="btn btn-info text-white">Update</button>  <button onClick={()=> handleDelete(value._id)} className="text-white btn btn-success">Delete</button></td>
                                            </tr>
                                        </>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </aside>
            </section>
        </div>
    );
};

export default ManageMyPost;