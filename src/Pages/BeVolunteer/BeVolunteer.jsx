// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import { ToastContainer, toast } from "react-toastify";
// import { Helmet } from "react-helmet-async";


// const BeVolunteer = () => {

//     let [beVolunteer, setbeVolunteer] = useState({})
//     let [beVolunteerLoading, setbeVolunteerLoading] = useState(true)
//     let [knock,setKnock]=useState(false)
//     let { user } = useContext(AuthContext)
//     let { id } = useParams()
    
//     let h=id
//     useEffect(() => {
//         setbeVolunteerLoading(true)
//         axios.get(`${import.meta.env.VITE_BASE_URL}/bevolunteer/${id}`,{withCredentials:true})
//             .then(res => {
//                 console.log(res.data);
//                 setbeVolunteer(res.data)
//                 setbeVolunteerLoading(false)
//             })
//             .catch(err => {
//                 console.log(err);
//             })

//     }, [id,knock])

//     function handleRequested(event) {
//         event.preventDefault()
//         console.log(h);
//         let g=h
//         let form = event.target
//         let thumbnail = form.thumbnail.value
//         let post_title = form.post_title.value
//         let location = form.location.value
//         let volunteer_number =parseInt(form.volunteer_number.value) 
//         let organizer_name = form.organizer_name.value
//         let organizer_email = form.organizer_email.value
//         let volunteer_name = form.volunteer_name.value
//         let volunteer_email = form.volunteer_email.value
//         let category=form.category.value
//         let status=form.status.value 
//         let suggestion=form.suggestion.value
//         let description=form.description.value
//         // Input date string in MM/DD/YYYY format
//         let inputDate = form.deadline.value;

//         // Split the date string into month, day, and year
//         let parts = inputDate.split('/');
//         let month = parts[0];
//         let day = parts[1];
//         let year = parts[2];
//         // Create a new Date object using the extracted parts
//         let date = new Date(year, month - 1, day);
//         // Get the ISO 8601 formatted date with time and timezone
//         let deadline = date.toISOString();
//         let vlId=beVolunteer.vlId
//         // let {id}=id
//         // console.log({vlId,thumbnail,post_title,location,volunteer_number,organizer_name,organizer_email,volunteer_name,volunteer_email,category,status,suggestion,description,deadline}); // Output: "2024-05-10T00:00:00.000Z"
//         let reqVolunteer={g,vlId,thumbnail,post_title,location,volunteer_number,organizer_name,organizer_email,volunteer_name,volunteer_email,category,status,suggestion,description,deadline}
//         // console.log(reqVolunteer);
//         if (organizer_email===user.email) {
//             return toast.error('You are Organizer. You cannot request')
//         }

//         if (volunteer_number===0 || volunteer_number<0) {
//             return toast.error('You cannot request')
//         }
        
//         axios.post(`${import.meta.env.VITE_BASE_URL}/requsted`,reqVolunteer,{withCredentials:true})
//         .then(res=>{
//             // console.log(res.data);
//             if (res.data.acknowledged) {
//                 toast.success('Successfully Requested')
                
//                setTimeout(()=>{
//                  setKnock(!knock)
//                },1000)

//             }
            
//         })
//         .catch(err=>{
//             console.log(err);
//         }
//         )
//         // let deadline = 
//      }

//     return (
//         <> 
//         <Helmet> <title> Volunteer Request </title> </Helmet>

        

//       {  beVolunteerLoading ?  <h1 className="text-center"><span className="loading loading-dots loading-lg"></span></h1> :    <div>
//             <form className="" onSubmit={handleRequested}>

//                 <section className="flex gap-3 flex-col">
//                     <article className="grid md:grid-cols-3 gap-4">
//                         <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1 ">
//                             <span>Thumbnail:</span>
//                             <input className=" p-2 w-[100%] outline-none" type="text" name="thumbnail" value={beVolunteer?.thumbnail} placeholder="Type your Thumbnail" id="" />
//                         </div>
//                         <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
//                             <span> Post Title:</span>
//                             <input className=" p-2 w-[100%] outline-none " type="text" name="post_title" value={beVolunteer?.post_title} id="" />
//                         </div>
//                         <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1 ">
//                             <span>Location:</span>
//                             <input className=" p-2 w-[100%] outline-none " type="text" name="location" value={beVolunteer?.location} id="" />
//                         </div>

//                     </article>


//                     <article className="grid md:grid-cols-3 gap-4">

//                         <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
//                             <span>No. of volunteers needed:</span>
//                             <input className=" p-2 w-[100%] outline-none " type="text" name="volunteer_number" value={beVolunteer?.volunteer_number} id="" />
//                         </div>

//                         <div className="flex items-center border-[1px] gap-3 border-black rounded-lg p-1" >
//                             <span> Organizer name:</span>
//                             <input className=" p-2 w-[100%] outline-none " type="text" name="organizer_name" value={beVolunteer?.organizer_name} id="" />
//                         </div>

//                         <div className="flex items-center border-[1px] border-black rounded-lg p-1 " >
//                             <span>Organizer email:</span>
//                             <input className=" p-2 w-[100%] outline-none " type="email" name="organizer_email" value={beVolunteer?.organizer_email} id="" />
//                         </div>

//                     </article>


//                     {/*  */}
//                     <article className="grid md:grid-cols-2 gap-4">



//                         <div className="flex items-center border-[1px] gap-3 border-black rounded-lg p-1" >
//                             <span className="font-semibold"> Volunteer name:</span>
//                             <input className=" p-2 w-[100%] outline-none " type="text" name="volunteer_name" value={user?.displayName} id="" />
//                         </div>

//                         <div className="flex items-center border-[1px] border-black rounded-lg p-1 " >
//                             <span className="font-semibold"> volunteer email:</span>
//                             <input className=" p-2 w-[100%] outline-none " type="email" name="volunteer_email" value={user?.email} id="" />
//                         </div>

//                     </article>

//                     {/*  */}


//                     <article className="grid grid-cols-1 md:grid-cols-2 gap-4">


//                         <div className="grid gap-4 ">

//                             <div className="flex items-center border-[1px] gap-3 border-black rounded-lg p-1" >
//                                 <span>Deadline:</span>
//                                 <input className=" p-2 w-[100%] outline-none " type="text" name="deadline" value={ new Date(beVolunteer?.deadline).toISOString().split('T')[0].split('-').reverse().join('/')} id="" />
//                             </div>
//                             <div className="flex items-center gap-3 justify-between border-[1px] border-black rounded-lg p-1" >
//                                 <span>Category:</span>
//                                 <input className=" p-2 w-[100%] outline-none " type="text" name="category" value={beVolunteer.category} id="" />

//                             </div>

//                             <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1 ">
//                                 <span>Status:</span>
//                                 <input className=" p-2 w-[100%] outline-none " type="text" name="status" defaultValue={'Requested'} id="" />
//                             </div>

//                             <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
//                                 {/* <span>Suggestion:</span> */}
//                                 <textarea className="w-full h-full" placeholder="write here Suggestion..." name="suggestion" id="" cols="30" rows="2"></textarea>

//                             </div>

//                         </div>

//                         <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
//                             <textarea className="w-full h-full" placeholder="write here  description..." value={beVolunteer?.description} name="description" id="" cols="30" rows="5"></textarea>
//                         </div>

//                     </article>
//                 </section>
//                 <input type="submit" value={'Request'} className="btn btn-primary w-full mt-3" name="" id="" />
//             </form>
//             <ToastContainer></ToastContainer>
//         </div>
//         }
//         </> );
// };

// export default BeVolunteer;



















import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const BeVolunteer = () => {
  const [beVolunteer, setbeVolunteer] = useState({});
  const [beVolunteerLoading, setbeVolunteerLoading] = useState(true);
  const [knock, setKnock] = useState(false);
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    setbeVolunteerLoading(true);
    axios.get(`${import.meta.env.VITE_BASE_URL}/bevolunteer/${id}`, { withCredentials: true })
      .then(res => {
        setbeVolunteer(res.data);
        setbeVolunteerLoading(false);
      })
      .catch(err => {
        console.log(err);
        setbeVolunteerLoading(false);
        toast.error("Failed to load volunteer details");
      });
  }, [id, knock]);

  function handleRequested(event) {
    event.preventDefault();
    const form = event.target;
    
    // Format the date properly
    const inputDate = form.deadline.value;
    const parts = inputDate.split('/');
    const month = parts[0];
    const day = parts[1];
    const year = parts[2];
    const date = new Date(year, month - 1, day);
    const deadline = date.toISOString();

    const reqVolunteer = {
      g: id,
      vlId: beVolunteer.vlId,
      thumbnail: form.thumbnail.value,
      post_title: form.post_title.value,
      location: form.location.value,
      volunteer_number: parseInt(form.volunteer_number.value),
      organizer_name: form.organizer_name.value,
      organizer_email: form.organizer_email.value,
      volunteer_name: form.volunteer_name.value,
      volunteer_email: form.volunteer_email.value,
      category: form.category.value,
      status: form.status.value,
      suggestion: form.suggestion.value,
      description: form.description.value,
      deadline
    };

    if (reqVolunteer.organizer_email === user.email) {
      return toast.error('You are the organizer and cannot request to volunteer');
    }

    if (reqVolunteer.volunteer_number <= 0) {
      return toast.error('No volunteer positions available');
    }
    
    axios.post(`${import.meta.env.VITE_BASE_URL}/requsted`, reqVolunteer, { withCredentials: true })
      .then(res => {
        if (res.data.acknowledged) {
          toast.success('Successfully requested to volunteer');
          setTimeout(() => setKnock(!knock), 1000);
        }
      })
      .catch(err => {
        console.log(err);
        toast.error('Failed to submit volunteer request');
      });
  }

  if (beVolunteerLoading) {
    return (
      <div className="md:h-[700px]flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg text-indigo-600 font-medium">Loading volunteer details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="md:h-[700px]bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Volunteer Request | VolunteerHub</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Volunteer Request Form
          </h1>
          <p className="mt-2 text-gray-600">
            Complete the form below to request to volunteer for this opportunity
          </p>
        </div>

        <motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <form onSubmit={handleRequested} className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Opportunity Title</label>
                  <input
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    type="text"
                    name="post_title"
                    value={beVolunteer?.post_title}
                    readOnly
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    type="text"
                    name="location"
                    value={beVolunteer?.location}
                    readOnly
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Volunteers Needed</label>
                  <input
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    type="text"
                    name="volunteer_number"
                    value={beVolunteer?.volunteer_number}
                    readOnly
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Organizer Name</label>
                  <input
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    type="text"
                    name="organizer_name"
                    value={beVolunteer?.organizer_name}
                    readOnly
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Organizer Email</label>
                  <input
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    type="email"
                    name="organizer_email"
                    value={beVolunteer?.organizer_email}
                    readOnly
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Your Name</label>
                  <input
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    type="text"
                    name="volunteer_name"
                    value={user?.displayName}
                    readOnly
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Your Email</label>
                  <input
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    type="email"
                    name="volunteer_email"
                    value={user?.email}
                    readOnly
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Deadline</label>
                  <input
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    type="text"
                    name="deadline"
                    value={new Date(beVolunteer?.deadline).toISOString().split('T')[0].split('-').reverse().join('/')}
                    readOnly
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <input
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    type="text"
                    name="category"
                    value={beVolunteer.category}
                    readOnly
                  />
                </div>

                <div className="hidden">
                  <input type="text" name="status" value="Requested" readOnly />
                  <input type="text" name="thumbnail" value={beVolunteer?.thumbnail} readOnly />
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Your Suggestions</label>
                <textarea
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent min-h-[100px]"
                  placeholder="Write your suggestions here..."
                  name="suggestion"
                ></textarea>
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Opportunity Description</label>
                <textarea
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent min-h-[120px]"
                  name="description"
                  value={beVolunteer?.description}
                  readOnly
                ></textarea>
              </div>
            </div>

            <motion.div
              className="mt-8"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
              >
                Submit Volunteer Request
              </button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>

      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default BeVolunteer;