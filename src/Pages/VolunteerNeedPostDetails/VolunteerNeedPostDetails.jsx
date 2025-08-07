// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import { CgOrganisation } from "react-icons/cg";
// import { FaLocationDot } from "react-icons/fa6";
// import { TfiEmail } from "react-icons/tfi";
// import { Link, useParams } from "react-router-dom";
// import { MdOutlineSubtitles, MdCategory, MdConfirmationNumber } from "react-icons/md";
// import { FiCalendar } from "react-icons/fi";
// import { Helmet } from "react-helmet-async";
// import { ToastContainer, toast } from "react-toastify";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import { motion } from "framer-motion";
// import Modal from "react-modal";


// const VolunteerNeedPostDetails = () => {
//   const { user } = useContext(AuthContext);
//   const [postDetails, setPostDetails] = useState({});
//   const [posLoading, setPostLoading] = useState(true);
//   const { id } = useParams();
//   const [isZoomOpen, setIsZoomOpen] = useState(false); // State for modal

//   useEffect(() => {
//     setPostLoading(true);
//     axios
//       .get(`${import.meta.env.VITE_BASE_URL}/postdetails/${id}`, { withCredentials: true })
//       .then((res) => {
//         setPostDetails(res.data);
//         setPostLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setPostLoading(false);
//       });
//   }, [id]);

//   // Modal styles
//   const customStyles = {
//     content: {
//       height:'100%',
//       top: "59%",
//       zIndex:'10000000',
//       left: "50%",
//       right: "auto",
//       bottom: "auto",
//       marginRight: "-50%",
//       transform: "translate(-50%, -50%)",
//       padding: "0",
//       border: "none",
//       marginTop:"50px",
//       background: "transparent",
//     },
//     overlay: {
//       backgroundColor: "rgba(0, 0, 0, 0.75)",
//     },
//   };

//   return (
//     <div  className="md:h-[700px]">
//       <Helmet>
//         <title>Post Details</title>
//       </Helmet>
//       <h2 className="font-poppins text-4xl text-center my-6 font-bold text-indigo-600 uppercase">
//         Post Details
//       </h2>

//       {posLoading ? (
//         <h1 className="text-center">
//           <span className="loading loading-dots loading-lg"></span>
//         </h1>
//       ) : (
//         <motion.section
//           id="cont"
//           className="container mx-auto p-6 bg-white rounded-lg shadow-md grid lg:grid-cols-2 gap-8"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="flex flex-col items-center">
//             <img
//               className="w-80 h-80 rounded-lg shadow-lg object-cover mb-6 cursor-pointer"
//               src={postDetails.thumbnail}
//               alt="Thumbnail"
//               onClick={() => setIsZoomOpen(true)} // Open modal on click
//             />
//             <p className="text-gray-600 text-lg leading-relaxed">
//               <span className="font-semibold text-indigo-500">Description:</span> {postDetails.description}
//             </p>
//           </div>

//           <div className="leading-9 space-y-4">
//             <p className="flex gap-2 items-center">
//               <CgOrganisation className="text-indigo-600" />
//               <span className="font-semibold">Organizer Name:</span> {postDetails.organizer_name}
//             </p>
//             <p className="flex gap-2 items-center">
//               <TfiEmail className="text-indigo-600" />
//               <span className="font-semibold">Organizer Email:</span> {postDetails.organizer_email}
//             </p>
//             <p className="flex gap-2 items-center">
//               <FaLocationDot className="text-indigo-600" />
//               <span className="font-semibold">Location:</span> {postDetails.location}
//             </p>
//             <p className="flex gap-2 items-center">
//               <MdOutlineSubtitles className="text-indigo-600" />
//               <span className="font-semibold">Title:</span> {postDetails.post_title}
//             </p>
//             <p className="flex gap-2 items-center">
//               <MdCategory className="text-indigo-600" />
//               <span className="font-semibold">Category:</span> {postDetails.category}
//             </p>
//             <p className="flex gap-2 items-center">
//               <FiCalendar className="text-indigo-600" />
//               <span className="font-semibold">Deadline:</span>{" "}
//               {new Date(postDetails.deadline).toLocaleDateString()}
//             </p>
//             <p className="flex gap-2 items-center">
//               <MdConfirmationNumber className="text-indigo-600" />
//               <span className="font-semibold">Volunteer Number:</span> {postDetails.volunteer_number}
//             </p>
//             {postDetails.volunteer_number <= 0 || postDetails.organizer_email === user.email ? (
//               <button
//                 onClick={() => toast.error("You cannot be a volunteer")}
//                 className="btn btn-info w-full"
//               >
//                 Be Volunteer
//               </button>
//             ) : (
//               <Link to={`/bevolunteer/${postDetails._id}`}>
//                 <button className="btn btn-secondary w-full">Be a Volunteer</button>
//               </Link>
//             )}
//           </div>
//         </motion.section>
//       )}

//       {/* Zoom Modal */}
//       <Modal
//         isOpen={isZoomOpen}
//         onRequestClose={() => setIsZoomOpen(false)}
//         style={customStyles}
//         contentLabel="Zoom Image"
//         ariaHideApp={false}
//       >
//         <div className="relative">
//           <img
//             src={postDetails.thumbnail}
//             alt="Zoomed Thumbnail"
//             className="rounded-lg shadow-lg object-contain w-full h-auto"
//           />
//           <button
//             onClick={() => setIsZoomOpen(false)}
//             className="absolute top-3 right-3 bg-gray-800 text-white rounded-full p-2"
//           >
//             ✕
//           </button>
//         </div>
//       </Modal>

//       <ToastContainer />
//     </div>
//   );
// };

// export default VolunteerNeedPostDetails;


























import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CgOrganisation } from "react-icons/cg";
import {  FaRegCalendarAlt, FaUsers } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { Link, useParams } from "react-router-dom";
import { MdOutlineSubtitles, MdCategory } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { FaLocationDot } from "react-icons/fa6";

// Make sure to bind modal to your app element
Modal.setAppElement('#root');

const VolunteerNeedPostDetails = () => {
  const { user } = useContext(AuthContext);
  const [postDetails, setPostDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/postdetails/${id}`, { withCredentials: true })
      .then((res) => {
        setPostDetails(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
        toast.error("Failed to load post details");
      });
  }, [id]);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      padding: 0,
      border: 'none',
      background: 'transparent',
      maxWidth: '90vw',
      maxHeight: '90vh'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(5px)',
      zIndex: 1000
    }
  };

  if (isLoading) {
    return (
      <div className="md:h-[700px]flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg text-indigo-600 font-medium">Loading post details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="md:h-[700px]bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>{postDetails.post_title || "Post Details"} | VolunteerHub</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2"
          >
            {postDetails.post_title || "Volunteer Opportunity"}
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {postDetails.category} • {postDetails.location}
          </p>
        </div>

        <motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 p-6">
            {/* Image Section */}
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 0.98 }}
            >
              <div className="relative group w-full">
                <img
                  className="w-full h-80 rounded-xl object-cover shadow-md cursor-pointer transition-transform duration-300 group-hover:shadow-lg"
                  src={postDetails.thumbnail}
                  alt="Opportunity thumbnail"
                  onClick={() => setIsZoomOpen(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">Click to enlarge</span>
                </div>
              </div>
              
              {/* Description */}
              <div className="mt-6 w-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                  About This Opportunity
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {postDetails.description}
                </p>
              </div>
            </motion.div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="bg-indigo-50/50 rounded-lg p-6 border border-indigo-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                  Opportunity Details
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-indigo-100 rounded-lg mr-4">
                      <CgOrganisation className="text-indigo-600 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Organized by</p>
                      <p className="font-medium text-gray-800">{postDetails.organizer_name}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 bg-indigo-100 rounded-lg mr-4">
                      <TfiEmail className="text-indigo-600 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Contact email</p>
                      <p className="font-medium text-gray-800">{postDetails.organizer_email}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 bg-indigo-100 rounded-lg mr-4">
                      <FaLocationDot className="text-indigo-600 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium text-gray-800">{postDetails.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 bg-indigo-100 rounded-lg mr-4">
                      <MdCategory className="text-indigo-600 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="font-medium text-gray-800">{postDetails.category}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 bg-indigo-100 rounded-lg mr-4">
                      <FaRegCalendarAlt className="text-indigo-600 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Application deadline</p>
                      <p className="font-medium text-gray-800">
                        {new Date(postDetails.deadline).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 bg-indigo-100 rounded-lg mr-4">
                      <FaUsers className="text-indigo-600 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Volunteers needed</p>
                      <p className="font-medium text-gray-800">
                        {postDetails.volunteer_number > 0 ? postDetails.volunteer_number : "Positions filled"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <motion.div 
                className="mt-6"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {postDetails.volunteer_number <= 0 || postDetails.organizer_email === user?.email ? (
                  <button
                    onClick={() => toast.info(
                      postDetails.volunteer_number <= 0 
                        ? "All volunteer positions have been filled" 
                        : "You cannot volunteer for your own post"
                    )}
                    className="w-full py-3 px-6 bg-gray-300 text-gray-700 rounded-lg font-medium cursor-not-allowed"
                  >
                    Volunteer Positions Filled
                  </button>
                ) : (
                  <Link to={`/bevolunteer/${postDetails._id}`}>
                    <button className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all">
                      Apply to Volunteer
                    </button>
                  </Link>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Image Zoom Modal - Fixed to work properly */}
      <Modal
        isOpen={isZoomOpen}
        onRequestClose={() => setIsZoomOpen(false)}
        style={customStyles}
        contentLabel="Zoomed Image"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <img
            src={postDetails.thumbnail}
            alt="Zoomed view"
            className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomOpen(false);
            }}
            className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Close zoom"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      </Modal>

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

export default VolunteerNeedPostDetails;