import axios from "axios";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiGrid41 } from "react-icons/ci";
import { MdTableRows } from "react-icons/md";
import { Helmet } from "react-helmet-async";
const NeedVolunteer = () => {
    let [addedVolunteer, setaddedVolunteer] = useState([])
    let [loadingaddedVolunteer, setloadingaddedVolunteer] = useState(true)
    let [layout,setLayOut]=useState(true)


    useEffect(() => {
        setloadingaddedVolunteer(true)
        axios.get('http://localhost:5588/needaddvolunteer')
            .then(res => {
                setaddedVolunteer(res.data)
                setloadingaddedVolunteer(false)
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    function makeGrid() {
        setLayOut(true)
        console.log(layout);
    }

    function makeTable() {
        setLayOut(false)
        console.log(layout);
    }
    return (
        <div>
            <Helmet>
                <title>Need Volunteer</title>
            </Helmet>
            <h1 className="font-bold text-center font-poppins text-4xl "> Need Volunteer   </h1>
            <div className="w-full h-[50px] bg-slate-400 rounded-xl flex items-center justify-end"> 
            <div className="flex gap-5 items-center justify-end"> 
            <CiGrid41 className="text-[40px]" onClick={makeGrid}/> 
             <MdTableRows onClick={makeTable} className="text-[40px]" />
            </div>
             </div>

            {
                loadingaddedVolunteer ? <h1 className="text-center">loading</h1> :

                    layout&&    <section id="" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {
                            addedVolunteer.map((value, index) => {
                                return <>

                                    <aside key={index} id="card" className="border">
                                        <div id="img" className="p-4 ">
                                            <img className="w-full h-[300px] object-cover" src={value.thumbnail} alt="" />
                                        </div>

                                        <div id="content" className="p-4 leading-6">
                                            <h1 className="font-poppins font-medium"> {value.post_title} </h1>
                                            <h6 className="font-poppins text-[14px]"> <i> category: {value.category} </i>  </h6>
                                            <span className="flex gap-1 items-center"> <FaLocationDot></FaLocationDot>  <span> {value.location}</span> </span>
                                        </div>
                                        <Link to={`/postdeatails/${value._id}`}><button className="btn btn-info ml-4 mb-4 text-white"> View Details </button></Link>

                                    </aside>
                                </>
                            })
                        }

                    </section>
            }


           { layout ||  <section>
                {/* <h1>test</h1> */}

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className="bg-[#fc7537af]">
                            <tr>
                                <th></th>
                                <th>Organizer Name</th>
                                <th> Title </th>
                                <th>Category</th>
                                <th>No. of Volunteers</th>
                                <th> Details </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                addedVolunteer.map((value, index) => {
                                    return <>
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>{value.organizer_name}</td>
                                            <td>{value.post_title}</td>
                                            <td>{value.category}</td>
                                            <td>{value.volunteer_number}</td>
                                            <td><Link to={`/postdeatails/${value._id}`}><button className="btn btn-outline">View Details</button></Link></td>
                                        </tr>
                                    </>
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </section>
}
        </div>
    );
};

export default NeedVolunteer;