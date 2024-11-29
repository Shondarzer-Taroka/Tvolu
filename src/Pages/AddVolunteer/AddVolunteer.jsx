// import { useContext, useState } from "react";
// import ReactDatePicker from "react-datepicker";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import "react-datepicker/dist/react-datepicker.css";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import { Helmet } from "react-helmet-async";
// const AddVolunteer = () => {
//     const {user}=useContext(AuthContext)
//     const [startDate, setStartDate] = useState(new Date());
//     let vlId=1212
//     function add(e) {
//         e.preventDefault()
//         vlId++
//         let form=e.target
//         let thumbnail=form.thumbnail.value
//         let post_title=form.post_title.value
//         let category=form.category.value
//         let location=form.location.value
//         let volunteer_number=parseInt(form.volunteer_number.value) 
//         var date = new Date(startDate);
//         var year = date.getFullYear();
//         var month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
//         var day = date.getDate().toString().padStart(2, '0');
//         var deadline = `${year}-${month}-${day}T00:00:00Z`;
//         console.log(deadline);
       
//         let organizer_name=form.organizer_name.value
//         let organizer_email=form.organizer_email.value
//         let description=form.description.value
//         let volunteer={vlId,thumbnail,post_title,category,location,volunteer_number,deadline,organizer_email,organizer_name,description}
//        console.log(volunteer);

//         axios.post(`${import.meta.env.VITE_BASE_URL}/addvolunteer`,volunteer,{withCredentials:true})
//         .then(res=>{
//            console.log(res.data);
//             if (res.data.acknowledged) {
//                 toast.success('Your Post Successfully Added')
//             }
//         })
//         .catch(err=>{
//             console.log(err);
//         })

//     }
//     return (
//         <div className="mb-7">
//                  <Helmet>
//                     <title>Add Volunteer</title>
//                  </Helmet>

//                 <h2 className="font-poppins text-3xl text-center mb-6 font-bold uppercase">Add Volunteer</h2>

//             <form className="" onSubmit={add}>

//                 <section className="flex gap-3 flex-col">
//                     <article className="grid md:grid-cols-3 gap-4">
//                         <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1 ">
//                             <span>Thumbnail:</span>
//                             <input className=" p-2 w-[100%] outline-none" type="text" name="thumbnail" placeholder="Type your Thumbnail" id="" />
//                         </div>
//                         <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
//                             <span> Post Title:</span>
//                             <input className=" p-2 w-[100%] outline-none "  type="text" name="post_title" placeholder="Type your Post Title" id="" />
//                         </div>
//                         <div className="flex items-center gap-3 justify-between border-[1px] border-black rounded-lg p-1" >
//                             <span>Category:</span>
//                             {/* <input className=" p-2 w-[100%] outline-none " type="text" name="subcategory_Name" placeholder="Type your Subcategory" id="" /> */}
//                             <select className="w-full h-full" id="cars" name="category">
//                                 <option value="healthcare">Healthcare</option>
//                                 <option value="education">Education</option>
//                                 <option value="social service">Social service</option>
//                                 <option value="animal welfare">animal welfare</option>
//                             </select>
//                         </div>

//                     </article>


//                     <article className="grid md:grid-cols-3 gap-4">

//                         <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1 ">
//                             <span>Location:</span>
//                             <input className=" p-2 w-[100%] outline-none " type="text" name="location" placeholder="Type your Location" id="" />
//                         </div>

//                         <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
//                             <span>No. of volunteers needed:</span>
//                             <input className=" p-2 w-[100%] outline-none " type="text" name="volunteer_number" placeholder=" No. of volunteers needed" id="" />
//                         </div>
//                         <div className="flex items-center border-[1px] gap-3 border-black rounded-lg p-1" >
//                             <span>Deadline:</span>
//                             <ReactDatePicker
//                                 showIcon
//                                 selected={startDate}
//                                 onChange={(date) => setStartDate(date)}
//                             />
//                         </div>

//                     </article>
//                     <article className="grid grid-cols-1 md:grid-cols-2 gap-4">


//                         <div className="grid gap-4 ">

//                             <div className="flex items-center border-[1px] gap-3 border-black rounded-lg p-1" >
//                                 <span> Organizer name:</span>
//                                 <input className=" p-2 w-[100%] outline-none " type="text" name="organizer_name" value={user?.displayName} id="" />
//                             </div>

//                             <div className="flex items-center border-[1px] border-black rounded-lg p-1 " >
//                                 <span>Organizer email:</span>
//                                 <input className=" p-2 w-[100%] outline-none " type="email" name="organizer_email" value={user?.email} id="" />
//                             </div>
//                         </div>

//                         <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
//                             <textarea className="w-full h-full" placeholder="write here short description..." name="description" id="" cols="30" rows="5"></textarea>
//                         </div>

//                     </article>
//                 </section>
//                 <input type="submit" value={'Add Post'} className="btn btn-primary w-full mt-3" name="" id="" />
//             </form>

// <ToastContainer></ToastContainer>
//         </div>
//     );
// };

// export default AddVolunteer;









import { useContext, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const AddVolunteer = () => {
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    let vlId = 1212;

    function add(e) {
        e.preventDefault();
        vlId++;
        let form = e.target;
        let thumbnail = form.thumbnail.value;
        let post_title = form.post_title.value;
        let category = form.category.value;
        let location = form.location.value;
        let volunteer_number = parseInt(form.volunteer_number.value);
        let date = new Date(startDate);
        let year = date.getFullYear();
        let month = (date.getMonth() + 1).toString().padStart(2, "0");
        let day = date.getDate().toString().padStart(2, "0");
        let deadline = `${year}-${month}-${day}T00:00:00Z`;

        let organizer_name = form.organizer_name.value;
        let organizer_email = form.organizer_email.value;
        let description = form.description.value;
        let volunteer = {
            vlId,
            thumbnail,
            post_title,
            category,
            location,
            volunteer_number,
            deadline,
            organizer_email,
            organizer_name,
            description,
        };

        axios
            .post(
                `${import.meta.env.VITE_BASE_URL}/addvolunteer`,
                volunteer,
                { withCredentials: true }
            )
            .then((res) => {
                if (res.data.acknowledged) {
                    toast.success("Your Post Successfully Added");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="mb-12">
            <Helmet>
                <title>Add Volunteer</title>
            </Helmet>
            <h2 className="text-4xl font-bold text-center mb-8 uppercase text-blue-600">
                Add Volunteer
            </h2>
            <form
                className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg"
                onSubmit={add}
            >
                <section className="grid gap-6">
                    <article className="grid md:grid-cols-3 gap-6">
                        <div className="flex flex-col">
                            <label
                                htmlFor="thumbnail"
                                className="text-sm font-medium mb-1 text-gray-600"
                            >
                                Thumbnail
                            </label>
                            <input
                                className="p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 outline-none"
                                type="text"
                                name="thumbnail"
                                required
                                placeholder="Enter Thumbnail URL"
                                id="thumbnail"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="post_title"
                                className="text-sm font-medium mb-1 text-gray-600"
                            >
                                Post Title
                            </label>
                            <input
                                className="p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 outline-none"
                                type="text"
                                name="post_title"
                                placeholder="Enter Post Title"
                                id="post_title"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="category"
                                className="text-sm font-medium mb-1 text-gray-600"
                            >
                                Category
                            </label>
                            <select
                                className="p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 outline-none"
                                name="category"
                                id="category"
                            >
                                <option value="healthcare">Healthcare</option>
                                <option value="education">Education</option>
                                <option value="social service">
                                    Social Service
                                </option>
                                <option value="animal welfare">
                                    Animal Welfare
                                </option>
                            </select>
                        </div>
                    </article>

                    <article className="grid md:grid-cols-3 gap-6">
                        <div className="flex flex-col">
                            <label
                                htmlFor="location"
                                className="text-sm font-medium mb-1 text-gray-600"
                            >
                                Location
                            </label>
                            <input
                                className="p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 outline-none"
                                type="text"
                                name="location"
                                placeholder="Enter Location"
                                id="location"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="volunteer_number"
                                className="text-sm font-medium mb-1 text-gray-600"
                            >
                                Volunteers Needed
                            </label>
                            <input
                                className="p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 outline-none"
                                type="text"
                                name="volunteer_number"
                                placeholder="Enter Number"
                                id="volunteer_number"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="deadline"
                                className="text-sm font-medium mb-1 text-gray-600"
                            >
                                Deadline
                                
                            </label>
                            <ReactDatePicker
                                className="p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 outline-none"
                                selected={startDate}
                                
                                onChange={(date) => setStartDate(date)}
                            />
                        </div>
                    </article>

                    <article className="grid md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col">
                                <label
                                    htmlFor="organizer_name"
                                    className="text-sm font-medium mb-1 text-gray-600"
                                >
                                    Organizer Name
                                </label>
                                <input
                                    className="p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 outline-none"
                                    type="text"
                                    name="organizer_name"
                                    value={user?.displayName}
                                    id="organizer_name"
                                    readOnly
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="organizer_email"
                                    className="text-sm font-medium mb-1 text-gray-600"
                                >
                                    Organizer Email
                                </label>
                                <input
                                    className="p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 outline-none"
                                    type="email"
                                    name="organizer_email"
                                    value={user?.email}
                                    id="organizer_email"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="description"
                                className="text-sm font-medium mb-1 text-gray-600"
                            >
                                Description
                            </label>
                            <textarea
                                className="p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 outline-none"
                                placeholder="Write a short description..."
                                name="description"
                                id="description"
                                rows="5"
                            ></textarea>
                        </div>
                    </article>
                </section>

                <button
                    type="submit"
                    className="w-full mt-6 bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                    Add Post
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddVolunteer;
