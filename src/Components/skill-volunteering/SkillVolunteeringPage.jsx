/* eslint-disable react/no-unescaped-entities */
// src/pages/SkillVolunteeringPage.jsx
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const SkillVolunteeringPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skillOpportunities = [
    {
      id: 1,
      title: "Graphic Design",
      organization: "Creative Minds NGO",
      skills: ["Adobe Photoshop", "Illustrator"],
      commitment: "5-10 hours/week",
      description: "Design marketing materials for social causes"
    },
    {
      id: 2,
      title: "Web Development",
      organization: "Tech for Good",
      skills: ["HTML/CSS", "JavaScript", "React"],
      commitment: "10-15 hours/week",
      description: "Build websites for non-profit organizations"
    },
    {
      id: 3,
      title: "Medical Professionals",
      organization: "Health Outreach",
      skills: ["Medical Degree", "Nursing"],
      commitment: "Flexible",
      description: "Provide free medical consultations"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="md:h-[700px]bg-gradient-to-b from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Skill-Based Volunteering
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600">
            Leverage your professional skills for social good
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillOpportunities.map((opportunity) => (
            <motion.div
              key={opportunity.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                    <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{opportunity.title}</h3>
                    <p className="text-sm text-gray-500">{opportunity.organization}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Required Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.skills.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-sm text-gray-500 mb-4">
                  <span className="font-medium">Time Commitment:</span> {opportunity.commitment}
                </div>
                
                <button className="w-full mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition duration-300">
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't See Your Skill Listed?</h2>
          <p className="text-gray-600 mb-6">
            We're always looking for talented professionals to contribute their unique skills. Let us know how you'd like to help!
          </p>
          <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            Suggest a Skill-Based Opportunity
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillVolunteeringPage;