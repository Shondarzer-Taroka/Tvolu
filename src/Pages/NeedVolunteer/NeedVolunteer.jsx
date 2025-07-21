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
        <div className="p-6 min-h-screen">
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
                    <div className="flex items-center outline-none border border-gray-300 rounded-lg shadow-sm">
                        <input
                            type="text"
                            id="search"
                            className="flex-grow bg-base-content data-theme:text-white outline-none text-gray-800 dark:text-white bg-transparent dark:bg-transparent placeholder:text-gray-400 dark:placeholder:text-gray-500 px-2 py-4"
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
                            className="bg-white dark:bg-gray-800 dark:text-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition"
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
