import axios from "axios";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";


const NeedVolunteer = () => {
    let [addedVolunteer, setaddedVolunteer] = useState([])
    let [loadingaddedVolunteer, setloadingaddedVolunteer] = useState(true)


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
    return (
        <div>
            this is a Need Volunteer
            {
                loadingaddedVolunteer ? <h1 className="text-center">loading</h1> :
                    <section id="" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
        </div>
    );
};

export default NeedVolunteer;