// src/pages/OpportunitiesPage.jsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import VolunteerCard from '../components/VolunteerCard';

const OpportunitiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const opportunities = [
    {
      id: 1,
      title: "Community Cleanup",
      organization: "Green Earth Initiative",
      location: "Dhaka, Bangladesh",
      date: "15 October 2023",
      skills: ["Environmental", "Teamwork"],
      description: "Join us in cleaning up local parks and waterways to create a healthier environment for our community."
    },
    {
      id: 2,
      title: "Youth Mentor Program",
      organization: "Future Leaders Foundation",
      location: "Online",
      date: "Ongoing",
      skills: ["Mentoring", "Education"],
      description: "Guide and inspire young students through weekly mentoring sessions and educational activities."
    },
    // Add more opportunities
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Volunteer Opportunities
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Find the perfect way to make a difference in your community
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((opportunity) => (
            <VolunteerCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            Load More Opportunities
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default OpportunitiesPage;