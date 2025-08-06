/* eslint-disable react/prop-types */
// src/components/VolunteerCard.jsx
import { motion } from 'framer-motion';

const VolunteerCard = ({ opportunity }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-gray-900">{opportunity.title}</h3>
            <p className="text-sm text-gray-500">{opportunity.organization}</p>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{opportunity.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {opportunity.skills.map((skill, index) => (
            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
              {skill}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <span>{opportunity.location}</span>
          <span>{opportunity.date}</span>
        </div>
        
        <button className="w-full mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default VolunteerCard;