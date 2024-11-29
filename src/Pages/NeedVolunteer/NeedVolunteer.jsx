// import axios from "axios";
// import { useEffect, useState } from "react";
// import { FaLocationDot } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { CiGrid41 } from "react-icons/ci";
// import { MdTableRows } from "react-icons/md";
// import { Helmet } from "react-helmet-async";
// const NeedVolunteer = () => {
//     let [addedVolunteer, setaddedVolunteer] = useState([])
//     let [loadingaddedVolunteer, setloadingaddedVolunteer] = useState(true)
//     let [layout, setLayOut] = useState(true)
//     useEffect(() => {
//         setloadingaddedVolunteer(true)
//         axios.get(`${import.meta.env.VITE_BASE_URL}/needaddvolunteer`)
//             .then(res => {
//                 setaddedVolunteer(res.data)
//                 setloadingaddedVolunteer(false)
//                 // console.log(res.data);
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }, [])

//     function makeGrid() {
//         setLayOut(true)
//         console.log(layout);
//     }

//     function makeTable() {
//         setLayOut(false)
//         console.log(layout);
//     }


//     function handleSearch() {
//           console.log(document.getElementById('search').value);
//           setloadingaddedVolunteer(true)
//          let searchValue=document.getElementById('search').value
//          axios.get(`${import.meta.env.VITE_BASE_URL}/posttitle/${searchValue}`)
//         .then(res=>{
//             console.log(res.data);
//             setaddedVolunteer(res.data)
//             setloadingaddedVolunteer(false)
//         })
//         .catch(err=>{
//             console.log(err);
//         })
//     }
//     return (
//         <div>
//             <Helmet>
//                 <title>Need Volunteer</title>
//             </Helmet>

//             <div className="flex justify-center">
//                 <div className="md:w-[400px]">
//                     <label className="input input-bordered flex items-center gap-2">
//                         <input  type="text" id="search" className="grow" placeholder="get the posts searching posts title" />
//                         <svg onClick={handleSearch} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
//                     </label>
//                 </div>
//             </div>

//             <h1 className="font-bold text-center font-poppins text-4xl "> Need Volunteer   </h1>
//             <div className="w-full h-[50px] bg-slate-400 rounded-xl flex items-center justify-end">
            
//                 <div className="flex gap-5 items-center justify-end">
//                     <CiGrid41 className="text-[40px]" onClick={makeGrid} />
//                     <MdTableRows onClick={makeTable} className="text-[40px]" />
//                 </div>
//             </div>


//             {
//                 loadingaddedVolunteer ? <h1 className="text-center"><span className="loading loading-dots loading-lg"></span></h1>:

//                     layout && <section id="" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
//                         {
//                             addedVolunteer.map((value, index) => {
//                                 return <>

//                                     <aside key={index} id="card" className="border">
//                                         <div id="img" className="p-4 ">
//                                             <img className="w-full h-[300px] object-cover" src={value.thumbnail} alt="" />
//                                         </div>

//                                         <div id="content" className="p-4 leading-6">
//                                             <h1 className="font-poppins font-medium"> {value.post_title} </h1>
//                                             <h6 className="font-poppins text-[14px]"> <i> category: {value.category} </i>  </h6>
//                                             <span className="flex gap-1 items-center"> <FaLocationDot></FaLocationDot>  <span> {value.location}</span> </span>
//                                         </div>
//                                         <Link to={`/postdeatails/${value._id}`}><button className="btn btn-info ml-4 mb-4 text-white"> View Details </button></Link>
//                                     </aside>
//                                 </>
//                             })
//                         }

//                     </section>
//             }


//             {layout || <section>
//                 {/* <h1>test</h1> */}

//                 <div className="overflow-x-auto mt-4">
//                     <table className="table table-zebra">
//                         {/* head */}
//                         <thead className="bg-[#fc7537af]  rounded-lg font-bold text-2xl">
//                             <tr>
//                                 <th></th>
//                                 <th>Organizer Name</th>
//                                 <th> Title </th>
//                                 <th>Category</th>
//                                 <th>No. of Volunteers</th>
//                                 <th> Details </th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {/* row 1 */}
//                             {
//                                 addedVolunteer.map((value, index) => {
//                                     return <>
//                                         <tr key={index}>
//                                             <th>{index + 1}</th>
//                                             <td>{value.organizer_name}</td>
//                                             <td>{value.post_title}</td>
//                                             <td>{value.category}</td>
//                                             <td>{value.volunteer_number}</td>
//                                             <td><Link to={`/postdeatails/${value._id}`}><button className="btn btn-outline">View Details</button></Link></td>
//                                         </tr>
//                                     </>
//                                 })
//                             }
//                         </tbody>
//                     </table>
//                 </div>

//             </section>
//             }
//         </div>
//     );
// };

// export default NeedVolunteer;




// import axios from "axios";
// import { useEffect, useState } from "react";
// import { FaLocationDot } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { CiGrid41 } from "react-icons/ci";
// import { MdTableRows } from "react-icons/md";
// import { Helmet } from "react-helmet-async";

// const NeedVolunteer = () => {
//     const [addedVolunteer, setAddedVolunteer] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [layout, setLayout] = useState(true);

//     useEffect(() => {
//         setLoading(true);
//         axios.get(`${import.meta.env.VITE_BASE_URL}/needaddvolunteer`)
//             .then(res => {
//                 setAddedVolunteer(res.data);
//                 setLoading(false);
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }, []);

//     const handleSearch = () => {
//         const searchValue = document.getElementById("search").value;
//         setLoading(true);
//         axios.get(`${import.meta.env.VITE_BASE_URL}/posttitle/${searchValue}`)
//             .then(res => {
//                 setAddedVolunteer(res.data);
//                 setLoading(false);
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     };

//     return (
//         <div className="p-6 bg-gray-50 min-h-screen">
//             <Helmet>
//                 <title>Need Volunteer</title>
//             </Helmet>

//             <div className="text-center">
//                 <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Need Volunteers</h1>
//                 <p className="text-gray-600">Browse volunteer opportunities or search by title to find the perfect match.</p>
//             </div>

//             <div className="flex justify-center mt-8">
//                 <div className="w-full max-w-lg">
//                     <div className="flex items-center border border-gray-300 rounded-lg p-2 shadow-sm bg-white">
//                         <input
//                             type="text"
//                             id="search"
//                             className="flex-grow outline-none text-gray-700 px-2"
//                             placeholder="Search by post title..."
//                         />
//                         <button
//                             onClick={handleSearch}
//                             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
//                         >
//                             Search
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex justify-between items-center mt-8">
//                 <h2 className="text-xl font-semibold text-gray-700">Volunteer Opportunities</h2>
//                 <div className="flex space-x-4">
//                     <CiGrid41
//                         className={`text-3xl cursor-pointer ${layout ? "text-blue-500" : "text-gray-500"}`}
//                         onClick={() => setLayout(true)}
//                     />
//                     <MdTableRows
//                         className={`text-3xl cursor-pointer ${!layout ? "text-blue-500" : "text-gray-500"}`}
//                         onClick={() => setLayout(false)}
//                     />
//                 </div>
//             </div>

//             {loading ? (
//                 <div className="flex justify-center items-center mt-16">
//                     <span className="loading loading-dots loading-lg text-blue-500"></span>
//                 </div>
//             ) : layout ? (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//                     {addedVolunteer.map((volunteer, index) => (
//                         <div
//                             key={index}
//                             className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition"
//                         >
//                             <img
//                                 src={volunteer.thumbnail}
//                                 alt={volunteer.post_title}
//                                 className="w-full h-48 object-cover"
//                             />
//                             <div className="p-4">
//                                 <h3 className="font-bold text-xl text-gray-800">{volunteer.post_title}</h3>
//                                 <p className="text-sm text-gray-600 italic">Category: {volunteer.category}</p>
//                                 <div className="flex items-center text-gray-500 mt-2">
//                                     <FaLocationDot className="mr-2" />
//                                     <span>{volunteer.location}</span>
//                                 </div>
//                                 <Link to={`/postdeatails/${volunteer._id}`}>
//                                     <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
//                                         View Details
//                                     </button>
//                                 </Link>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <div className="overflow-x-auto mt-6">
//                     <table className="table-auto w-full border border-gray-300 bg-white shadow-md">
//                         <thead className="bg-blue-500 text-white">
//                             <tr>
//                                 <th className="py-3 px-4">#</th>
//                                 <th className="py-3 px-4">Organizer Name</th>
//                                 <th className="py-3 px-4">Title</th>
//                                 <th className="py-3 px-4">Category</th>
//                                 <th className="py-3 px-4">Volunteers Needed</th>
//                                 <th className="py-3 px-4">Details</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {addedVolunteer.map((volunteer, index) => (
//                                 <tr key={index} className="border-b">
//                                     <td className="py-3 px-4 text-center">{index + 1}</td>
//                                     <td className="py-3 px-4">{volunteer.organizer_name}</td>
//                                     <td className="py-3 px-4">{volunteer.post_title}</td>
//                                     <td className="py-3 px-4">{volunteer.category}</td>
//                                     <td className="py-3 px-4 text-center">{volunteer.volunteer_number}</td>
//                                     <td className="py-3 px-4 text-center">
//                                         <Link to={`/postdeatails/${volunteer._id}`}>
//                                             <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
//                                                 View Details
//                                             </button>
//                                         </Link>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default NeedVolunteer;



import axios from "axios";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NeedVolunteer = () => {
    const [volunteers, setVolunteers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchVolunteers();
    }, []);

    const fetchVolunteers = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/needaddvolunteer`);
            setVolunteers(response.data);
        } catch (error) {
            console.error("Error fetching volunteer data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async () => {
        const searchValue = document.getElementById("search").value.trim();
        setLoading(true);
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/needaddvolunteer?search=${searchValue}`
            );
            setVolunteers(response.data);
        } catch (error) {
            console.error("Error searching volunteer data:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <Helmet>
                <title>Need Volunteer</title>
            </Helmet>

            <div className="text-center">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                    Need Volunteers
                </h1>
                <p className="text-gray-600">
                    Browse volunteer opportunities or search by title to find the perfect match.
                </p>
            </div>

            <div className="flex justify-center mt-8">
                <div className="w-full max-w-lg">
                    <div className="flex items-center border border-gray-300 rounded-lg p-2 shadow-sm bg-white">
                        <input
                            type="text"
                            id="search"
                            className="flex-grow outline-none text-gray-700 px-2"
                            placeholder="Search by post title..."
                        />
                        <button
                            onClick={handleSearch}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center items-center mt-16">
                    <span className="loading loading-dots loading-lg text-blue-500"></span>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {volunteers.map((volunteer, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={volunteer.thumbnail}
                                    alt={volunteer.post_title}
                                    className="w-full h-48 object-cover transform transition duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-xl text-gray-800">
                                    {volunteer.post_title}
                                </h3>
                                <p className="text-sm text-gray-600 italic">
                                    Category: {volunteer.category}
                                </p>
                                <div className="flex items-center text-gray-500 mt-2">
                                    <FaLocationDot className="mr-2" />
                                    <span>{volunteer.location}</span>
                                </div>
                                <Link to={`/postdetails/${volunteer._id}`}>
                                    <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NeedVolunteer;
