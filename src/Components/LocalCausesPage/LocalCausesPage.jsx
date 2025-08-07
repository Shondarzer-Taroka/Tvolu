import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import CauseCard from '../CauseCard/CauseCard';
import axios from 'axios';

const ITEMS_PER_PAGE = 6;

const LocalCausesPage = () => {
  const [causes, setCauses] = useState([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [loading, setLoading] = useState(true);

  console.log(causes,'sf');
  
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchCauses = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/local-causes`);
        console.log(response,'res');
        
        const data = response.data.data
        setCauses(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching causes:", err);
        setLoading(false);
      }
    };

    fetchCauses();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" bg-gradient-to-b from-blue-50 dark:bg-red-600 to-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Local Causes
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600">
            Make an impact right in your neighborhood
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading causes...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {causes?.slice(0, visibleCount).map((cause) => (
                <CauseCard key={cause._id || cause.id} cause={cause} />
              ))}
            </div>

            {visibleCount < causes.length && (
              <div className="mt-12 text-center">
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Discover More Causes
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default LocalCausesPage;
