// // 

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { RotatingLines } from "react-loader-spinner";
// import { Link } from "react-router-dom";

// const VolunteerNeedsNow = () => {
//     const [Volunteer, setVolunteer] = useState([]); // Ensure initial state is an empty array
//     const [loadingVolunteer, setLoadingVolunteer] = useState(true);
//     console.log(Volunteer);

//     useEffect(() => {
//         setLoadingVolunteer(true);

//         // Fetch data from API
//         axios.get(`${import.meta.env.VITE_BASE_URL}/volunteerneed`)
//             .then((res) => {
//                 // Check if response data is an array and update state accordingly
//                 if (Array.isArray(res.data)) {
//                     setVolunteer(res.data);
//                 } else {
//                     setVolunteer([]); // Default to an empty array if response is not an array
//                 }
//                 setLoadingVolunteer(false);
//             })
//             .catch((err) => {
//                 console.error("Error fetching volunteer data:", err);
//                 setLoadingVolunteer(false);
//             });
//     }, []);

//     return (
//         loadingVolunteer ? (
//             <div className="flex items-center justify-center my-8">
//                 <RotatingLines
//                     visible={true}
//                     height="96"
//                     width="96"
//                     color="grey"
//                     strokeWidth="5"
//                     animationDuration="0.75"
//                     ariaLabel="rotating-lines-loading"
//                 />
//             </div>
//         ) : (
//             <div>
//                 <h1 className="text-center font-poppins font-bold my-5 uppercase">Volunteer Needs Now</h1>

//                 {/* Display volunteer items only if Volunteer is an array and has items */}
//                 <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
//                     {Array.isArray(Volunteer) && Volunteer.length > 0 ? (
//                         Volunteer.map(value => (
//                             <aside key={value._id} id="cardCont" className="border">
//                                 <div className="p-4">
//                                     <img className="w-full h-[280px] object-cover" src={value.thumbnail} alt="" />
//                                 </div>

//                                 <div id="content" className="p-4 leading-7">
//                                     <h1 className="font-semibold font-poppins text-[29px]" id="title">{value.post_title}</h1>
//                                     <h4 className="font-semibold font-poppins text-[15px]">Category: {value.category}</h4>
//                                     <h6 className="text-[16px]">
//                                         Deadline: {new Date(new Date(value.deadline)?.getTime() + (6 * 60 * 60 * 1000))?.toISOString()?.split('T')[0]}
//                                     </h6>
//                                 </div>
//                                 <Link to={`/postdetails/${value._id}`}>
//                                     <button className="text-white btn btn-info mx-4 mb-4">View Details</button>
//                                 </Link>
//                             </aside>
//                         ))
//                     ) : (
//                         <p className="text-center">No volunteer needs available at the moment.</p>
//                     )}
//                 </section>

//                 <div className="text-center">
//                     <Link to={'/need'}>
//                         <button className="btn my-5 btn-accent text-white text-center">See All</button>
//                     </Link>
//                 </div>
//             </div>
//         )
//     );
// };

// export default VolunteerNeedsNow;











import axios from "axios";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaClipboardList } from "react-icons/fa";

const VolunteerNeedsNow = () => {
    const [Volunteer, setVolunteer] = useState([]);
    const [loadingVolunteer, setLoadingVolunteer] = useState(true);

    useEffect(() => {
        setLoadingVolunteer(true);

        axios.get(`${import.meta.env.VITE_BASE_URL}/volunteerneed`)
            .then((res) => {
                if (Array.isArray(res.data)) {
                    setVolunteer(res.data);
                } else {
                    setVolunteer([]);
                }
                setLoadingVolunteer(false);
            })
            .catch((err) => {
                console.error("Error fetching volunteer data:", err);
                setLoadingVolunteer(false);
            });
    }, []);

    return (
        loadingVolunteer ? (
            <div className="flex items-center justify-center my-8">
                <RotatingLines
                    visible={true}
                    height="96"
                    width="96"
                    color="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                />
            </div>
        ) : (
            <div>
                <h1 className="text-center font-poppins font-bold my-5 uppercase text-3xl">Volunteer Needs Now</h1>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
                    {Array.isArray(Volunteer) && Volunteer.length > 0 ? (
                        Volunteer.map(value => (
                            <aside key={value._id} className="border rounded-lg shadow-md overflow-hidden bg-white">
                                <div className="relative">
                                    <img
                                        className="w-full h-64 object-cover"
                                        src={value.thumbnail}
                                        alt={value.post_title || "Thumbnail"}
                                    />
                                </div>

                                <div className="p-4">
                                    <h1 className="font-semibold font-poppins text-xl mb-2" title={value.post_title}>
                                        {value.post_title}
                                    </h1>
                                    <p className="flex items-center text-gray-600 text-sm mb-2">
                                        <FaClipboardList className="mr-2 text-blue-500" />
                                        Category: {value.category}
                                    </p>
                                    <p className="flex items-center text-gray-600 text-sm">
                                        <FaCalendarAlt className="mr-2 text-green-500" />
                                        Deadline: {new Date(new Date(value.deadline)?.getTime() + (6 * 60 * 60 * 1000))?.toISOString()?.split('T')[0]}
                                    </p>
                                </div>
                                
                                <div className="p-4 flex justify-between items-center">
                                    <Link to={`/postdetails/${value._id}`}>
                                        <button className="bg-blue-500 text-[19px] text-white px-3 py-2 rounded-lg shadow hover:bg-blue-600">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </aside>
                        ))
                    ) : (
                        <p className="text-center text-gray-600">No volunteer needs available at the moment.</p>
                    )}
                </section>

                <div className="text-center mt-8">
                    <Link to={'/need'}>
                        <button className="btn my-5 btn-accent text-white px-6 py-3 text-lg rounded-lg shadow hover:bg-accent-dark">
                            See All
                        </button>
                    </Link>
                </div>
            </div>
        )
    );
};

export default VolunteerNeedsNow;
