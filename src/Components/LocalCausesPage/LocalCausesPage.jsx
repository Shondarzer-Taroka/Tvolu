// src/Components/LocalCausesPage.jsx
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import CauseCard from '../CauseCard/CauseCard';


const LocalCausesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const localCauses = [
    {
      id: 1,
      title: "Food Bank Support",
      location: "Mirpur, Dhaka",
      volunteers: 24,
      image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf",
      description: "Help distribute food to families in need at our community food bank."
    },
    {
      id: 2,
      title: "Street Children Education",
      location: "Mohammadpur, Dhaka",
      volunteers: 15,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      description: "Teach basic literacy and numeracy to underprivileged children."
    },
    {
      id: 3,
      title: "Elderly Care Program",
      location: "Uttara, Dhaka",
      volunteers: 8,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
      description: "Provide companionship and assistance to senior citizens."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8"
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {localCauses.map((cause) => (
            <CauseCard key={cause.id} cause={cause} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            Discover More Causes
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default LocalCausesPage;