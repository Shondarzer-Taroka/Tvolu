import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";


const BeVolunteer = () => {

    let [beVolunteer, setbeVolunteer] = useState({})
    let [beVolunteerLoading, setbeVolunteerLoading] = useState(true)
    let [knock,setKnock]=useState(false)
    let { user } = useContext(AuthContext)
    let { id } = useParams()
    
    let h=id
   console.log(id);
    // let {volunteer_number,deadline,organizer_name,organizer_email,category,description,post_title}=postDetails
    useEffect(() => {
        setbeVolunteerLoading(true)
        axios.get(`http://localhost:5588/bevolunteer/${id}`)
            .then(res => {
                console.log(res.data);
                setbeVolunteer(res.data)
                setbeVolunteerLoading(false)
            })
            .catch(err => {
                console.log(err);
            })

    }, [id,knock])

    // console.log(id);



    function handleRequested(event) {
        event.preventDefault()
        console.log(h);
        let g=h
        let form = event.target
        let thumbnail = form.thumbnail.value
        let post_title = form.post_title.value
        let location = form.location.value
        let volunteer_number =parseInt(form.volunteer_number.value) 
        let organizer_name = form.organizer_name.value
        let organizer_email = form.organizer_email.value
        let volunteer_name = form.volunteer_name.value
        let volunteer_email = form.volunteer_email.value
        let category=form.category.value
        let status=form.status.value 
        let suggestion=form.suggestion.value
        let description=form.description.value
        // Input date string in MM/DD/YYYY format
        let inputDate = form.deadline.value;

        // Split the date string into month, day, and year
        let parts = inputDate.split('/');
        let month = parts[0];
        let day = parts[1];
        let year = parts[2];
        // Create a new Date object using the extracted parts
        let date = new Date(year, month - 1, day);
        // Get the ISO 8601 formatted date with time and timezone
        let deadline = date.toISOString();
        let vlId=beVolunteer.vlId
        // let {id}=id
        // console.log({vlId,thumbnail,post_title,location,volunteer_number,organizer_name,organizer_email,volunteer_name,volunteer_email,category,status,suggestion,description,deadline}); // Output: "2024-05-10T00:00:00.000Z"
        let reqVolunteer={g,vlId,thumbnail,post_title,location,volunteer_number,organizer_name,organizer_email,volunteer_name,volunteer_email,category,status,suggestion,description,deadline}
        console.log(reqVolunteer);
        if (organizer_email===user.email) {
            return toast.error('You are Organizer. You cannot Request')
        }

        if (volunteer_number===0 || volunteer_number<0) {
            return toast.error('You cannot Requst')
        }
        
        axios.post('http://localhost:5588/requsted',reqVolunteer)
        .then(res=>{
            console.log(res.data);
            if (res.data.acknowledged) {
                toast.success('Successfully Requested')
                
               setTimeout(()=>{
                 setKnock(!knock)
               },1000)

            }
            
        })
        .catch(err=>{
            console.log(err);
        }
        )
        // let deadline = 
     }

    return (
        <> 
        <Helmet> <title> Volunteer Request </title> </Helmet>

      {  beVolunteerLoading ?  <h1 className="text-center"><span className="loading loading-dots loading-lg"></span></h1> :    <div>
            <form className="" onSubmit={handleRequested}>

                <section className="flex gap-3 flex-col">
                    <article className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1 ">
                            <span>Thumbnail:</span>
                            <input className=" p-2 w-[100%] outline-none" type="text" name="thumbnail" value={beVolunteer?.thumbnail} placeholder="Type your Thumbnail" id="" />
                        </div>
                        <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
                            <span> Post Title:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="post_title" value={beVolunteer?.post_title} id="" />
                        </div>
                        <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1 ">
                            <span>Location:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="location" value={beVolunteer?.location} id="" />
                        </div>

                    </article>


                    <article className="grid md:grid-cols-3 gap-4">

                        <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
                            <span>No. of volunteers needed:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="volunteer_number" value={beVolunteer?.volunteer_number} id="" />
                        </div>

                        <div className="flex items-center border-[1px] gap-3 border-black rounded-lg p-1" >
                            <span> Organizer name:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="organizer_name" value={beVolunteer?.organizer_name} id="" />
                        </div>

                        <div className="flex items-center border-[1px] border-black rounded-lg p-1 " >
                            <span>Organizer email:</span>
                            <input className=" p-2 w-[100%] outline-none " type="email" name="organizer_email" value={beVolunteer?.organizer_email} id="" />
                        </div>

                    </article>


                    {/*  */}
                    <article className="grid md:grid-cols-2 gap-4">



                        <div className="flex items-center border-[1px] gap-3 border-black rounded-lg p-1" >
                            <span className="font-semibold"> Volunteer name:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="volunteer_name" value={user?.displayName} id="" />
                        </div>

                        <div className="flex items-center border-[1px] border-black rounded-lg p-1 " >
                            <span className="font-semibold"> volunteer email:</span>
                            <input className=" p-2 w-[100%] outline-none " type="email" name="volunteer_email" value={user?.email} id="" />
                        </div>

                    </article>

                    {/*  */}


                    <article className="grid grid-cols-1 md:grid-cols-2 gap-4">


                        <div className="grid gap-4 ">

                            <div className="flex items-center border-[1px] gap-3 border-black rounded-lg p-1" >
                                <span>Deadline:</span>
                                <input className=" p-2 w-[100%] outline-none " type="text" name="deadline" value={ new Date(beVolunteer?.deadline).toISOString().split('T')[0].split('-').reverse().join('/')} id="" />
                            </div>
                            <div className="flex items-center gap-3 justify-between border-[1px] border-black rounded-lg p-1" >
                                <span>Category:</span>
                                <input className=" p-2 w-[100%] outline-none " type="text" name="category" value={beVolunteer.category} id="" />

                            </div>

                            <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1 ">
                                <span>Status:</span>
                                <input className=" p-2 w-[100%] outline-none " type="text" name="status" defaultValue={'Requested'} id="" />
                            </div>

                            <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
                                {/* <span>Suggestion:</span> */}
                                <textarea className="w-full h-full" placeholder="write here Suggestion..." name="suggestion" id="" cols="30" rows="2"></textarea>

                            </div>

                        </div>

                        <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
                            <textarea className="w-full h-full" placeholder="write here  description..." value={beVolunteer?.description} name="description" id="" cols="30" rows="5"></textarea>
                        </div>

                    </article>
                </section>
                <input type="submit" value={'Request'} className="btn btn-primary w-full mt-3" name="" id="" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
        }
        </> );
};

export default BeVolunteer;