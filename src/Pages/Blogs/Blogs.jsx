// import React, { useState, useEffect } from 'react';
// import { FaSort } from 'react-icons/fa';
// import axios from 'axios';
// import { NewsCard } from '../NewsPage/NewsPage';

// const Blogs = () => {
//   const [categories] = useState(["Events", "Charity", "Updates"]);
//   const [activeCategory, setActiveCategory] = useState(''); // No default category
//   const [sortByDate, setSortByDate] = useState(false); // Default sort order
//   const [search, setSearch] = useState(''); // Empty search by default
//   const [news, setNews] = useState([]); // News data
//   const [isAscending, setIsAscending] = useState(false); // State to track icon direction

//   // Fetch data from API
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/all-news`, {
//         params: {
//           category: activeCategory || undefined, // Send only if a category is active
//           sortByDate,
//           search: search || undefined, // Send only if search has a value
//         },
//       });
//       setNews(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error.response?.data || error.message);
//       setNews([]); // Reset news list on error
//     }
//   };

//   // Call fetchData on dependency change
//   useEffect(() => {
//     fetchData();
//   }, [activeCategory, sortByDate, search]);

//   const handleSortClick = () => {
//     setSortByDate(!sortByDate);
//     setIsAscending(!isAscending); // Toggle the rotation direction
//   };

//   return (
//     <div className="mt-7">
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-5">
//         {/* Categories */}
//         <div className="space-x-2 flex items-center">
//           <button
//             onClick={() => setActiveCategory('')} // Clear category filter
//             className={`px-5 py-1 rounded-full border text-opacity-80 hover:bg-gray-100 transition ${
//               !activeCategory ? 'bg-gray-200 font-bold' : ''
//             }`}
//           >
//             All
//           </button>
//           {categories.map((category, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveCategory(category)}
//               className={`px-5 py-1 rounded-full border text-opacity-80 hover:bg-gray-100 transition ${
//                 activeCategory === category ? 'bg-gray-200 font-bold' : ''
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Search and Sort */}
//         <div className="flex items-center space-x-2">
//           {/* Search Input */}
//           <input
//             type="text"
//             placeholder="Search by title..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="border px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
//           />
//           {/* Sort by Date */}
//           <button
//             onClick={handleSortClick}
//             className="flex items-center px-5 py-1 rounded-full border text-opacity-80 hover:bg-gray-100 transition"
//           >
//             Sort by Date
//             <FaSort
//               className={`ml-2 transform transition-transform duration-300 ${
//                 isAscending ? 'rotate-180' : 'rotate-0'
//               }`}
//             />
//           </button>
//         </div>
//       </div>

//       {/* News List */}
//       <div>
//         {news.length > 0 ? (
//           <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {news.map((newsCard) => (
//               <NewsCard
//                 key={newsCard._id}
//                 title={newsCard.title}
//                 description={newsCard.description}
//                 category={newsCard.category}
//                 image={newsCard.image}
//                 _id={newsCard._id}
//                 date={newsCard.date}
//                 newsContent={newsCard.newsContent}
//               />
//             ))}
//           </aside>
//         ) : (
//           <p className="text-gray-500">No news found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Blogs;







import React, { useState, useEffect } from 'react';
import { FaSort } from 'react-icons/fa';
import axios from 'axios';
import { NewsCard } from '../NewsPage/NewsPage';

const Blogs = () => {
    const [categories] = useState(["Events", "Charity", "Updates"]);
    const [activeCategory, setActiveCategory] = useState(''); // No default category
    const [sortByDate, setSortByDate] = useState(false); // Default sort order
    const [search, setSearch] = useState(''); // Empty search by default
    const [news, setNews] = useState([]); // News data
    const [isAscending, setIsAscending] = useState(false); // State to track icon direction
    const [currentPage, setCurrentPage] = useState(1); // Current page
    const [totalPages, setTotalPages] = useState(1); // Total number of pages
    const [loading, setLoading] = useState(true)

    const ITEMS_PER_PAGE = 10; // Items per page

    // Fetch data from API
    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/all-news`, {
                params: {
                    category: activeCategory || undefined,
                    sortByDate,
                    search: search || undefined,
                    page: currentPage,
                    limit: ITEMS_PER_PAGE,
                },
            });
            setNews(response.data.data);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Error fetching data:', error.response?.data || error.message);
            setNews([]); // Reset news list on error
        } finally {
            setLoading(false)
        }
    };

    // Call fetchData on dependency change
    useEffect(() => {
        fetchData();
    }, [activeCategory, sortByDate, search, currentPage]);

    const handleSortClick = () => {
        setSortByDate(!sortByDate);
        setIsAscending(!isAscending); // Toggle the rotation direction
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

 

    return (
        <div className="mt-7">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-5">
                {/* Categories */}
                <div className="space-x-2 flex space-y-2 md:space-y-0 flex-wrap items-center">
                    <button
                        onClick={() => setActiveCategory('')} // Clear category filter
                        className={`px-5 py-1 rounded-full border text-opacity-80 hover:bg-gray-100 transition ${!activeCategory ? 'bg-gray-200 font-bold' : ''
                            }`}
                    >
                        All
                    </button>
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-1 rounded-full border text-opacity-80 hover:bg-gray-100 transition ${activeCategory === category ? 'bg-gray-200 font-bold' : ''
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Search and Sort */}
                <div className="flex items-center space-y-2 md:space-y-0 flex-wrap space-x-2">
                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search by title..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
                    />
                    {/* Sort by Date */}
                    <button
                        onClick={handleSortClick}
                        className="flex items-center px-5 py-1 rounded-full border text-opacity-80 hover:bg-gray-100 transition"
                    >
                        Sort by Date
                        <FaSort
                            className={`ml-2 transform transition-transform duration-300 ${isAscending ? 'rotate-180' : 'rotate-0'
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* News List */}
            <div>
              
                { loading ? <h1 className='mt-7'>Loading....</h1> : news.length > 0 ? (
                    <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {news.map((newsCard) => (
                            <NewsCard
                                key={newsCard._id}
                                title={newsCard.title}
                                description={newsCard.description}
                                category={newsCard.category}
                                image={newsCard.image}
                                _id={newsCard._id}
                                date={newsCard.date}
                                newsContent={newsCard.newsContent}
                            />
                        ))}
                    </aside>
                ) : (
                    <p className="text-gray-500">No news found.</p>
                )}
            </div>

            {/* Pagination */}
            { loading ? "" : 
            <div className="mt-5 flex justify-center items-center space-x-2">
                {/* Previous Button */}
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 border rounded ${currentPage === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'hover:bg-gray-100'
                        }`}
                >
                    Previous
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageClick(index + 1)}
                        className={`px-4 py-2 border rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}

                {/* Next Button */}
              <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 border rounded ${currentPage === totalPages
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'hover:bg-gray-100'
                        }`}
                >
                    Next
                </button>
            </div>}
        </div>
    );
};

export default Blogs;
