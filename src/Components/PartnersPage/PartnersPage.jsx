// src/Components/PartnersPage.jsx
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const PartnersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partners = [
    {
      id: 1,
      name: "Green Bangladesh",
      logo: "https://via.placeholder.com/150x80?text=Green+Bangladesh",
      description: "Environmental conservation organization",
      since: 2015
    },
    {
      id: 2,
      name: "Education for All",
      logo: "https://via.placeholder.com/150x80?text=Education+For+All",
      description: "Promoting literacy nationwide",
      since: 2012
    },
    {
      id: 3,
      name: "Healthcare Foundation",
      logo: "https://via.placeholder.com/150x80?text=Healthcare+FDN",
      description: "Improving community health services",
      since: 2018
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Trusted Partners
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600">
            Organizations we collaborate with to create impact
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <motion.div 
              key={partner.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-md overflow-hidden p-6 flex flex-col items-center text-center"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-20 object-contain mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
              <p className="text-gray-600 mb-4">{partner.description}</p>
              <div className="mt-auto text-sm text-gray-500">
                Partner since {partner.since}
              </div>
              <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Become a Partner</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Join our network of organizations making a difference in communities across Bangladesh.
          </p>
          <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            Partner With Us
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PartnersPage;