import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Authentication/useAxiosSecure/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const ManageMyPost = () => {
    const { user } = useContext(AuthContext);
    const [manageData, setManageData] = useState([]);
    const [myRequested, setMyRequested] = useState([]);
    const [loadingPosts, setLoadingPosts] = useState(true);
    const [loadingRequests, setLoadingRequests] = useState(true);
    const [refreshToggle, setRefreshToggle] = useState(false);
    const axiosSecure = useAxiosSecure();

    // Fetch my volunteer posts
    useEffect(() => {
        setLoadingPosts(true);
        axiosSecure.get(`/myneedvolunteer/${user?.email}`)
            .then(res => {
                setManageData(res.data);
                setLoadingPosts(false);
            })
            .catch(err => {
                console.log(err);
                setLoadingPosts(false);
            });
    }, [user, refreshToggle, axiosSecure]);

    // Fetch my volunteer requests
    useEffect(() => {
        setLoadingRequests(true);
        axios.get(`${import.meta.env.VITE_BASE_URL}/myrequestedvolunteer/${user?.email}`, { withCredentials: true })
            .then(res => {
                setMyRequested(res.data);
                setLoadingRequests(false);
            })
            .catch(err => {
                console.log(err);
                setLoadingRequests(false);
            });
    }, [user, refreshToggle]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(result => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_BASE_URL}/deletevolunteer/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            setRefreshToggle(!refreshToggle);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your post has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete post.",
                            icon: "error"
                        });
                    });
            }
        });
    };

    const handleCancel = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to cancel this volunteer request?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then(result => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_BASE_URL}/cancelrequested/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            setRefreshToggle(!refreshToggle);
                            Swal.fire({
                                title: "Cancelled!",
                                text: "Your request has been cancelled.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to cancel request.",
                            icon: "error"
                        });
                    });
            }
        });
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <Helmet>
                <title>Manage Posts | VolunteerHub</title>
            </Helmet>

            <div className="max-w-7xl mx-auto">
                {/* My Volunteer Posts Section */}
                <motion.section 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-12"
                >
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                            My Volunteer Posts
                        </h1>
                    </div>

                    {loadingPosts ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : manageData.length === 0 ? (
                        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                            <h2 className="text-2xl font-medium text-gray-500 mb-4">
                                You haven&lsquo;t created any volunteer posts yet
                            </h2>
                            
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {manageData.map((post, index) => (
                                            <tr key={post._id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.organizer_name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{post.category}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(post.deadline)}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                                                    <Link to={`/update/${post._id}`}>
                                                        <motion.button 
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
                                                        >
                                                            Update
                                                        </motion.button>
                                                    </Link>
                                                    <motion.button
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={() => handleDelete(post._id)}
                                                        className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
                                                    >
                                                        Delete
                                                    </motion.button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </motion.section>

                {/* My Volunteer Requests Section */}
                <motion.section 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                            My Volunteer Requests
                        </h1>
                    </div>

                    {loadingRequests ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : myRequested.length === 0 ? (
                        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                            <h2 className="text-2xl font-medium text-gray-500 mb-4">
                                You haven&lsquo;t made any volunteer requests yet
                            </h2>
                            <Link to="/" className="btn btn-primary">
                                Browse Volunteer Opportunities
                            </Link>
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {myRequested.map((request, index) => (
                                            <tr key={request._id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.organizer_name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{request.category}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(request.deadline)}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.location}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <motion.button
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={() => handleCancel(request._id)}
                                                        className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
                                                    >
                                                        Cancel
                                                    </motion.button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </motion.section>
            </div>
        </div>
    );
};

export default ManageMyPost;