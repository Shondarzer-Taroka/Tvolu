import axios from "axios";
import { useEffect, useState } from "react";
import { CgOrganisation } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { Link, useParams } from "react-router-dom";
import { MdOutlineSubtitles } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";
import { MdConfirmationNumber } from "react-icons/md";

import { MdCategory } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
const VolunteerNeedPostDetails = () => {
    let [postDetails, setPostDetails] = useState({}) 
    let [posLoading, setPostLoading] = useState(true)
    let { id } = useParams()
   
    // let {volunteer_number,deadline,organizer_name,organizer_email,category,description,post_title}=postDetails
    useEffect(() => {
        setPostLoading(true)
        axios.get(`https://assignment-eleven-server-brown.vercel.app/postdetails/${id}`)
            .then(res => {
                console.log(res.data);
                setPostDetails(res.data)
                setPostLoading(false)
            })
            .catch(err => {
                console.log(err);
            })

    }, [setPostDetails,id])


    return (
     <div>

        <Helmet>
            <title>Post Details</title>
        </Helmet>


        <h2 className="font-poppins text-3xl text-center mb-6 font-bold uppercase">Post Details</h2>

         {/* { postDetails.length===null && <h2>No</h2> } */}

         { posLoading ? <h1 className="text-center"><span className="loading loading-dots loading-lg"></span></h1> :   <section id="cont" className="">
                <div>
                    <img className="w-[400px] " src={postDetails.thumbnail} alt="" />
                    <div>
                       <span className="font-poppins font-semibold"> Description:</span> <span> {postDetails.description} </span>
                    </div>
                </div>

                <div className="leading-9">
                    <p className="flex gap-1 items-center "> <span> <CgOrganisation></CgOrganisation> </span> <span className="font-poppins font-semibold">  Organizer Name:</span> { postDetails.organizer_name }</p>
                    <p className="flex gap-1 items-center"> <span> <TfiEmail></TfiEmail></span> <span className="font-poppins font-semibold">  Organizer Email:</span> {postDetails.organizer_email}</p>
                    <p className="flex gap-1 items-center"> <span> <FaLocationDot></FaLocationDot> </span> <span className="font-poppins font-semibold">  Location:</span>{postDetails.location} </p>
                    <p className="flex gap-1 items-center"> <span><MdOutlineSubtitles /></span> <span className="font-poppins font-semibold"> title:</span>{postDetails.post_title}</p>
                    <p className="flex gap-1 items-center"> <span><MdCategory /> </span> <span className="font-poppins font-semibold">  Category:</span>{postDetails.category} </p>
                    <p className="flex gap-1 items-center"> <span><FiCalendar /></span> <span className="font-poppins font-semibold">Deadline: </span> {new Date(postDetails.deadline).toISOString().split('T')[0].split('-').reverse().join('/')} </p>
                    <p className="flex gap-1 items-center"> <span><MdConfirmationNumber /></span> <span className="font-poppins font-semibold"> Volunteer Number:  </span> {postDetails.volunteer_number} </p>
                 {  postDetails.volunteer_number<0 || postDetails.volunteer_number==0 ? <button onClick={()=> toast.error('You cannot be volunteer')} className="btn btn-info">Be Volunteer </button>  :<Link to={`/bevolunteer/${postDetails._id}`}> <button className="btn btn-secondary"> Be a Volunteer </button> </Link>}
                   
                </div>
            </section>
}
         <ToastContainer></ToastContainer>
        </div>
    );
};

export default VolunteerNeedPostDetails;