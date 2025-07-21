// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card } from '../DonationPage/DonationPage';

// const Donations = () => {
//   const [categories] = useState(["Health", "Education", "Charity"]); // Example categories
//   const [activeCategory, setActiveCategory] = useState('');
//   const [sortByDate, setSortByDate] = useState(false);
//   const [search, setSearch] = useState('');
//   const [donations, setDonations] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const ITEMS_PER_PAGE = 10;

//   // Fetch donations from the backend
//   const fetchDonations = async () => {
//     try {
//       const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/donations`, {
//         params: {
//           category: activeCategory || undefined,
//           sortByDate,
//           search: search || undefined,
//           page: currentPage,
//           limit: ITEMS_PER_PAGE,
//         },
//       });
//       setDonations(response.data.data);
//       setTotalPages(response.data.totalPages);
//     } catch (error) {
//       console.error('Error fetching donations:', error.response?.data || error.message);
//       setDonations([]); // Reset donations list on error
//     }
//   };

//   // Fetch donations when dependencies change
//   useEffect(() => {
//     fetchDonations();
//   }, [activeCategory, sortByDate, search, currentPage]);

//   const handlePageClick = (page) => {
//     setCurrentPage(page);
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) setCurrentPage((prev) => prev - 1);
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
//             onClick={() => setSortByDate(!sortByDate)}
//             className="flex items-center px-5 py-1 rounded-full border text-opacity-80 hover:bg-gray-100 transition"
//           >
//             Sort by Date
//           </button>
//         </div>
//       </div>

//       {/* Donations List */}
//       <div>
//         {donations.length > 0 ? (
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
//             {donations.map((donation) => (
//               <Card
//                 key={donation._id}
//                 title={donation.title}
//                 description={donation.description}
//                 category={donation.category}
//                 image={donation.image}
//                 collected={donation.collected}
//                 target={donation.target}
//               />
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-500">No donations found.</p>
//         )}
//       </div>

//       {/* Pagination */}
//       <div className="mt-5 flex justify-center items-center space-x-2">
//         {/* Previous Button */}
//         <button
//           onClick={handlePreviousPage}
//           disabled={currentPage === 1}
//           className={`px-4 py-2 border rounded ${
//             currentPage === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'hover:bg-gray-100'
//           }`}
//         >
//           Previous
//         </button>

//         {/* Page Numbers */}
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => handlePageClick(index + 1)}
//             className={`px-4 py-2 border rounded ${
//               currentPage === index + 1 ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
//             }`}
//           >
//             {index + 1}
//           </button>
//         ))}

//         {/* Next Button */}
//         <button
//           onClick={handleNextPage}
//           disabled={currentPage === totalPages}
//           className={`px-4 py-2 border rounded ${
//             currentPage === totalPages
//               ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
//               : 'hover:bg-gray-100'
//           }`}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Donations;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../DonationPage/DonationPage';
import { FaSort } from 'react-icons/fa'; // Import sort icon

const Donations = () => {
  const [categories] = useState(["Health", "Education", "Charity"]); // Example categories
  const [activeCategory, setActiveCategory] = useState('');
  const [sortByDate, setSortByDate] = useState(false);
  const [isAscending, setIsAscending] = useState(false); // Tracks sorting direction
  const [search, setSearch] = useState('');
  const [donations, setDonations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true)
  const ITEMS_PER_PAGE = 10;

  // Fetch donations from the backend
  const fetchDonations = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/donations`, {
        params: {
          category: activeCategory || undefined,
          sortByDate: isAscending, // Pass sorting direction
          search: search || undefined,
          page: currentPage,
          limit: ITEMS_PER_PAGE,
        },
      });
      setDonations(response.data.data);
      setTotalPages(response.data.totalPages);

    } catch (error) {
      console.error('Error fetching donations:', error.response?.data || error.message);
      setDonations([]); // Reset donations list on error
    } finally {
      setLoading(false)
    }
  };

  // Fetch donations when dependencies change
  useEffect(() => {
    fetchDonations();
  }, [activeCategory, isAscending, search, currentPage]);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleSortByDate = () => {
    setIsAscending(!isAscending); // Toggle sorting direction
    setSortByDate(!sortByDate);
  };


  return (
    <div className="mt-7">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-5">
        {/* Categories */}
        <div className="md:space-x-2  p-4 md:p-0 space-y-2 md:space-y-0 flex flex-wrap items-center">
          <button
            onClick={() => setActiveCategory('')} // Clear category filter
            className={`px-5 py-1 rounded-full border dark:text-white text-opacity-80 hover:bg-gray-100 transition ${!activeCategory ? 'bg-gray-200 font-bold dark:bg-transparent' : ''
              }`}
          >
            All
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-1 rounded-full border text-opacity-80 dark:hover:bg-gray-800 hover:bg-gray-100 transition ${activeCategory === category ? 'bg-gray-200 font-bold dark:bg-transparent dark:text-white' : ''
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search and Sort */}
        <div className="flex flex-wrap space-y-2 md:space-y-0 items-center space-x-2">
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
            onClick={handleSortByDate}
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

      {/* Donations List */}
      {loading ? <h1 className='mt-7 p-4 md:p-0 '>Loading...</h1> : <div>
        {donations.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-4 md:p-0">
            {donations.map((donation) => (
              <Card
                key={donation._id}
                title={donation.title}
                description={donation.description}
                category={donation.category}
                image={donation.image}
                collected={donation.collected}
                target={donation.target}
                cardId={donation._id}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No donations found.</p>
        )}
      </div>}

      {/* Pagination */}
      {loading ? '' : <div className="mt-5 flex justify-center items-center space-x-2">
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

export default Donations;
