import axios from "axios";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";


const VolunteerNeedsNow = () => {
    const [Volunteer, setVolunteer] = useState([])
    const [loadingVolunteer, setloadingVolunteer] = useState(true)
    useEffect(() => {
        setloadingVolunteer(true)
        axios.get(`${import.meta.env.VITE_BASE_URL}/volunteerneed`)
            .then(res => {
                setVolunteer(res.data)
                setloadingVolunteer(false)
                console.log(res.data);
                // let date = res.data[0].deadline
                // console.log(date);
                // const utcDate = new Date(date);
                // const localDate = new Date(utcDate.getTime() + (6 * 60 * 60 * 1000));
                // const localDateString = localDate.toISOString().split('T')[0];
                // console.log(localDateString);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        loadingVolunteer ? <div className="flex items-center justify-center my-8">
            <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div> : <div>
            <h1 className="text-center font-poppins font-bold my-5 uppercase"> Volunteer Needs Now </h1>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    Volunteer.map(value => {
                        return <>

                            <aside key={value._id} id="cardCont" className="border">
                                <div className="p-4">
                                    <img className="w-full h-[280px] object-cover" src={value.thumbnail} alt="" />
                                </div>

                                <div id="content" className="p-4 leading-7">
                                    <h1 className="font-semibold font-poppins text-[29px]" id="title"> {value.post_title} </h1>
                                    <h4 className="font-semibold font-poppins text-[15px]"> Category: {value.category} </h4>
                                    <h6 className="text-[16px]">Deadline:  {new Date(new Date(value.deadline)?.getTime() + (6 * 60 * 60 * 1000))?.toISOString()?.split('T')[0]} </h6>

                                </div>
                                <Link to={`/postdetails/${value._id}`}><button className=" text-white btn btn-info mx-4 mb-4">View Details</button></Link>
                                
                            </aside>
                        </>
                    })
                }
            </section>

            <div className="text-center">
                <Link to={'/need'}><button className="btn my-5 btn-accent text-white text-center">See All</button> </Link>

            </div>

        </div>
    );
};

export default VolunteerNeedsNow;