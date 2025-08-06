// src/pages/SuccessStoriesPage.jsx
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const SuccessStoriesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stories = [
    {
      id: 1,
      title: "Transforming a Community Through Education",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      excerpt: "How volunteers helped establish a learning center in a rural village",
      date: "March 15, 2023",
      readTime: "4 min read"
    },
    {
      id: 2,
      title: "From Volunteer to Full-Time Changemaker",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136",
      excerpt: "One volunteer's journey to becoming a nonprofit leader",
      date: "January 28, 2023",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "100,000 Meals Served and Counting",
      image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf",
      excerpt: "The story behind our food distribution milestone",
      date: "November 5, 2022",
      readTime: "5 min read"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Success Stories
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600">
            Celebrating the impact of our volunteers and partners
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <motion.div
              key={story.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img 
                src={story.image} 
                alt={story.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{story.date}</span>
                  <span>{story.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.excerpt}</p>
                <button className="text-orange-600 hover:text-orange-700 font-medium flex items-center">
                  Read Full Story
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Share Your Story</h2>
          <p className="text-gray-600 mb-6">
            Have a volunteering success story you'd like to share? We'd love to hear about your experience and the impact you've made.
          </p>
          <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            Submit Your Story
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SuccessStoriesPage;