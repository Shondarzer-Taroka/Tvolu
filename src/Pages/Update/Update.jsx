import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Update = () => {
    let {id} = useParams()
    let { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());

    function update(e) {
        e.preventDefault()
        let form = e.target
        let thumbnail = form.thumbnail.value
        let post_title = form.post_title.value
        let category = form.category.value
        let location = form.location.value
        let volunteer_number =parseInt(form.volunteer_number.value) 
        // let date= new Date(startDate)
        // let  deadline = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`
        


        var date = new Date(startDate);

        // Extract year, month, and day from the date object
        var year = date.getFullYear();
        var month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
        var day = date.getDate().toString().padStart(2, '0');

        // Construct the desired ISO 8601 formatted string
        var deadline = `${year}-${month}-${day}T00:00:00Z`;

        console.log(deadline); // Output: "2024-05-29T00:00:00Z"

        let organizer_name = form.organizer_name.value
        let organizer_email = form.organizer_email.value
        let description = form.description.value
        let volunteer={thumbnail,post_title,category,location,volunteer_number,deadline,organizer_email,organizer_name,description}
        console.log(thumbnail,post_title,category,location,volunteer_number,deadline,organizer_email,organizer_name,description);
        console.log(volunteer);
        
        axios.put(`http://localhost:5588/updatevolunteer/${id}`,volunteer)
        .then(res=>{
            console.log(res.data);
            if (res.data.modifiedCount>0) {
                toast.success('Update successfully')
            }
        })
        .catch(err=>{
            console.log(err);
        })

    }
    return (
        <div>

            <form className="" onSubmit={update}>

                <section className="flex gap-3 flex-col">
                    <article className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1 ">
                            <span>Thumbnail:</span>
                            <input className=" p-2 w-[100%] outline-none" type="text" name="thumbnail" placeholder="Type your Thumbnail" id="" />
                        </div>
                        <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
                            <span> Post Title:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="post_title" placeholder="Type your Post Title" id="" />
                        </div>
                        <div className="flex items-center gap-3 justify-between border-[1px] border-black rounded-lg p-1" >
                            <span>Category:</span>
                            {/* <input className=" p-2 w-[100%] outline-none " type="text" name="subcategory_Name" placeholder="Type your Subcategory" id="" /> */}
                            <select className="w-full h-full" id="cars" name="category">
                                <option value="healthcare">Healthcare</option>
                                <option value="education">Education</option>
                                <option value="social service">Social service</option>
                                <option value="animal welfare">animal welfare</option>
                            </select>
                        </div>

                    </article>


                    <article className="grid md:grid-cols-3 gap-4">

                        <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1 ">
                            <span>Location:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="location" placeholder="Type your Location" id="" />
                        </div>

                        <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
                            <span>No. of volunteers needed:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="volunteer_number" placeholder=" No. of volunteers needed" id="" />
                        </div>
                        <div className="flex items-center border-[1px] gap-3 border-black rounded-lg p-1" >
                            <span>Deadline:</span>
                            <ReactDatePicker
                                showIcon
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                        </div>

                    </article>
                    <article className="grid grid-cols-1 md:grid-cols-2 gap-4">


                        <div className="grid gap-4 ">

                            <div className="flex items-center border-[1px] gap-3 border-black rounded-lg p-1" >
                                <span> Organizer name:</span>
                                <input className=" p-2 w-[100%] outline-none " type="text" name="organizer_name" value={user?.displayName} id="" />
                            </div>

                            <div className="flex items-center border-[1px] border-black rounded-lg p-1 " >
                                <span>Organizer email:</span>
                                <input className=" p-2 w-[100%] outline-none " type="email" name="organizer_email" value={user?.email} id="" />
                            </div>
                        </div>

                        <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
                            <textarea className="w-full h-full" placeholder="write here short description..." name="description" id="" cols="30" rows="5"></textarea>
                        </div>

                    </article>
                </section>
                <input type="submit" value={'Update Post'} className="btn btn-primary w-full mt-3" name="" id="" />
            </form>
    <ToastContainer></ToastContainer>
        </div>
    );
};

export default Update;