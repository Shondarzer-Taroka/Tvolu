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
// import "react-toastify/dist/ReactToastify.css";

// const VolunteerNeedPostDetails = () => {
//   const { user } = useContext(AuthContext);
//   const [postDetails, setPostDetails] = useState({});
//   const [posLoading, setPostLoading] = useState(true);
//   const { id } = useParams();

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

//   return (
//     <div className="min-h-screen bg-gray-50">
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
//               className="w-80 h-80 rounded-lg shadow-lg object-cover mb-6"
//               src={postDetails.thumbnail}
//               alt="Thumbnail"
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
//       <ToastContainer />
//     </div>
//   );
// };

// export default VolunteerNeedPostDetails;









import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CgOrganisation } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { Link, useParams } from "react-router-dom";
import { MdOutlineSubtitles, MdCategory, MdConfirmationNumber } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { motion } from "framer-motion";
import Modal from "react-modal";


const VolunteerNeedPostDetails = () => {
  const { user } = useContext(AuthContext);
  const [postDetails, setPostDetails] = useState({});
  const [posLoading, setPostLoading] = useState(true);
  const { id } = useParams();
  const [isZoomOpen, setIsZoomOpen] = useState(false); // State for modal

  useEffect(() => {
    setPostLoading(true);
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/postdetails/${id}`, { withCredentials: true })
      .then((res) => {
        setPostDetails(res.data);
        setPostLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setPostLoading(false);
      });
  }, [id]);

  // Modal styles
  const customStyles = {
    content: {
      height:'100%',
      top: "53%",
      zIndex:'10000000',
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
      border: "none",
      background: "transparent",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  return (
    <div  className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Post Details</title>
      </Helmet>
      <h2 className="font-poppins text-4xl text-center my-6 font-bold text-indigo-600 uppercase">
        Post Details
      </h2>

      {posLoading ? (
        <h1 className="text-center">
          <span className="loading loading-dots loading-lg"></span>
        </h1>
      ) : (
        <motion.section
          id="cont"
          className="container mx-auto p-6 bg-white rounded-lg shadow-md grid lg:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <img
              className="w-80 h-80 rounded-lg shadow-lg object-cover mb-6 cursor-pointer"
              src={postDetails.thumbnail}
              alt="Thumbnail"
              onClick={() => setIsZoomOpen(true)} // Open modal on click
            />
            <p className="text-gray-600 text-lg leading-relaxed">
              <span className="font-semibold text-indigo-500">Description:</span> {postDetails.description}
            </p>
          </div>

          <div className="leading-9 space-y-4">
            <p className="flex gap-2 items-center">
              <CgOrganisation className="text-indigo-600" />
              <span className="font-semibold">Organizer Name:</span> {postDetails.organizer_name}
            </p>
            <p className="flex gap-2 items-center">
              <TfiEmail className="text-indigo-600" />
              <span className="font-semibold">Organizer Email:</span> {postDetails.organizer_email}
            </p>
            <p className="flex gap-2 items-center">
              <FaLocationDot className="text-indigo-600" />
              <span className="font-semibold">Location:</span> {postDetails.location}
            </p>
            <p className="flex gap-2 items-center">
              <MdOutlineSubtitles className="text-indigo-600" />
              <span className="font-semibold">Title:</span> {postDetails.post_title}
            </p>
            <p className="flex gap-2 items-center">
              <MdCategory className="text-indigo-600" />
              <span className="font-semibold">Category:</span> {postDetails.category}
            </p>
            <p className="flex gap-2 items-center">
              <FiCalendar className="text-indigo-600" />
              <span className="font-semibold">Deadline:</span>{" "}
              {new Date(postDetails.deadline).toLocaleDateString()}
            </p>
            <p className="flex gap-2 items-center">
              <MdConfirmationNumber className="text-indigo-600" />
              <span className="font-semibold">Volunteer Number:</span> {postDetails.volunteer_number}
            </p>
            {postDetails.volunteer_number <= 0 || postDetails.organizer_email === user.email ? (
              <button
                onClick={() => toast.error("You cannot be a volunteer")}
                className="btn btn-info w-full"
              >
                Be Volunteer
              </button>
            ) : (
              <Link to={`/bevolunteer/${postDetails._id}`}>
                <button className="btn btn-secondary w-full">Be a Volunteer</button>
              </Link>
            )}
          </div>
        </motion.section>
      )}

      {/* Zoom Modal */}
      <Modal
        isOpen={isZoomOpen}
        onRequestClose={() => setIsZoomOpen(false)}
        style={customStyles}
        contentLabel="Zoom Image"
        ariaHideApp={false}
      >
        <div className="relative">
          <img
            src={postDetails.thumbnail}
            alt="Zoomed Thumbnail"
            className="rounded-lg shadow-lg object-contain w-full h-auto"
          />
          <button
            onClick={() => setIsZoomOpen(false)}
            className="absolute top-3 right-3 bg-gray-800 text-white rounded-full p-2"
          >
            ✕
          </button>
        </div>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default VolunteerNeedPostDetails;
