/* eslint-disable react/prop-types */
// src/components/CauseCard.jsx
import { motion } from 'framer-motion';

const CauseCard = ({ cause }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={cause.image} 
          alt={cause.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{cause.title}</h3>
          <p className="text-white/90 text-sm">{cause.location}</p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4">{cause.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500">
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>{cause.volunteers} volunteers</span>
          </div>
          
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300">
            Join Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CauseCard;