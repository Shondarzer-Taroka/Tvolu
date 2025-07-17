// import  { useEffect, useState } from 'react';

// import axios from 'axios';

// export const Card = ({ title, description, collected, target, image, cardId }) => {
//   console.log(description.split(''));
  
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     amount: '',
//     cardId: '' || cardId
//   });

//   const progress = (collected / target) * 100;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleDonateClick = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setFormData({ name: '', email: '', amount: '' }); // Reset form data
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(`${import.meta.env.VITE_BASE_URL}/create-checkout-session`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           amount: formData.amount,
//           cardId: cardId || ''
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to create checkout session');
//       }

//       const { url } = await response.json();

//       // Redirect to the Stripe Checkout page
//       window.location.href = url;
//     } catch (error) {
//       console.error('Error creating checkout session:', error);
//       alert('Something went wrong. Please try again.');
//     }
//   };


//   return (
//     <div className="rounded-xl overflow-hidden shadow-lg">
//       <img src={image} alt={title} className="w-full h-48 object-cover" />
//       <div className="p-5">
//         <span className="bg-gray-100 px-3 py-1 rounded-full text-xs uppercase">Social</span>
//         <div className="mt-4">
//           <h3 className="text-xl font-bold">{title}</h3>
//           <p className="text-sm mt-2"> {description}</p>
//         </div>
//         <div className="mt-4">
//           <div className="flex justify-between text-xs">
//             <span>Collected</span>
//             <span>{Math.floor(progress)}%</span>
//           </div>
//           <div className="w-full bg-gray-600 h-2 rounded-full mt-2">
//             <div
//               style={{ width: `${progress}%` }}
//               className="bg-accent h-2 rounded-full"
//             ></div>
//           </div>
//           <div className="flex justify-between text-sm mt-2">
//             <span>Collected: ${collected}</span>
//             <span>Target: ${target}</span>
//           </div>
//         </div>
//         <button
//           className="mt-4 w-full bg-button py-2 rounded-lg hover:bg-accent transition"
//           onClick={handleDonateClick}
//         >
//           Donate Now
//         </button>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-white rounded-lg shadow-lg w-[90%] md:w-[50%] p-6">
//             <h2 className="text-xl font-bold mb-4">Donator Information</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border rounded-lg"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border rounded-lg"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">Donation Amount</label>
//                 <input
//                   type="number"
//                   name="amount"
//                   value={formData.amount}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border rounded-lg"
//                   min="1"
//                   required
//                 />
//               </div>
//               <div className="flex justify-between mt-6">
//                 <button
//                   type="button"
//                   onClick={handleCloseModal}
//                   className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-button text-black rounded-lg hover:bg-accent transition"
//                 >
//                   Submit Donation
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };




// const DonationPage = () => {
//   const [donations, setDonations] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch donations from the backend
//   const fetchDonations = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/donations`);
//       setDonations(response.data.data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching donations:', error.response?.data || error.message);
//       setDonations([]); // Reset donations list on error
//       setLoading(false);
//     }
//   };

//   // Fetch donations when component mounts
//   useEffect(() => {
//     fetchDonations();
//   }, []);

//   if (loading) {
//     return <h1>Loading.....</h1>;
//   }

//   // Take the first 6 donations
//   const campaigns = donations.slice(0, 3);

//   return (
//     <div className="min-h-screen flex flex-col items-center py-10 space-y-10 max-w-6xl mx-auto" id="#makedo">
//       <h1 className="uppercase text-4xl font-bold text-center">
//         Make A Difference Today By Donating To Our Cause.
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {campaigns.length > 0 &&
//           campaigns.map((campaign, index) => (
//             <Card key={index} {...campaign} />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default DonationPage;














// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaSpinner } from 'react-icons/fa';

// export const Card = ({ title, description, collected, target, image, cardId }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     amount: '',
//     cardId: '' || cardId
//   });

//   const progress = (collected / target) * 100;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleDonateClick = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setFormData({ name: '', email: '', amount: '' });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`${import.meta.env.VITE_BASE_URL}/create-checkout-session`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           amount: formData.amount,
//           cardId: cardId || ''
//         }),
//       });

//       if (!response.ok) throw new Error('Failed to create checkout session');
//       const { url } = await response.json();
//       window.location.href = url;
//     } catch (error) {
//       console.error('Error creating checkout session:', error);
//       alert('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <div className= " rounded-xl overflow-hidden shadow-lg bg-base-300 border border-base-300 hover:shadow-xl transition-shadow duration-300">
//       <img 
//         src={image} 
//         alt={title} 
//         className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
//       />
//       <div className="p-5">
//         <span className="bg-primary/10 px-3 py-1 rounded-full text-xs uppercase text-primary">
//           Social Cause
//         </span>
//         <div className="mt-4">
//           <h3 className="text-xl font-bold text-base-content">{title}</h3>
//           <p className="text-sm mt-2 text-base-content/80 line-clamp-3">
//             {description}
//           </p>
//         </div>
//         <div className="mt-4">
//           <div className="flex justify-between text-sm">
//             <span className="text-base-content/80">Progress</span>
//             <span className="font-medium text-primary">{Math.floor(progress)}%</span>
//           </div>
//           <div className="w-full bg-base-300 h-2 rounded-full mt-2">
//             <div
//               style={{ width: `${progress}%` }}
//               className="bg-primary h-2 rounded-full"
//             ></div>
//           </div>
//           <div className="flex justify-between text-sm mt-2">
//             <span className="text-base-content/80">Raised: ${collected.toLocaleString()}</span>
//             <span className="text-base-content/80">Goal: ${target.toLocaleString()}</span>
//           </div>
//         </div>
//         <button
//           className="mt-4 w-full btn btn-primary py-2 rounded-lg hover:bg-primary/90 transition-all"
//           onClick={handleDonateClick}
//         >
//           Donate Now
//         </button>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
//           <div className="bg-base-100 rounded-lg shadow-xl w-[90%] md:w-[50%] p-6 max-h-[90vh] overflow-y-auto">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold text-base-content">Donation Form</h2>
//               <button 
//                 onClick={handleCloseModal}
//                 className="btn btn-ghost btn-sm"
//               >
//                 ✕
//               </button>
//             </div>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-base-content/80 mb-1">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-base-300 rounded-lg bg-base-200 focus:ring-2 focus:ring-primary focus:border-transparent"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-base-content/80 mb-1">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-base-300 rounded-lg bg-base-200 focus:ring-2 focus:ring-primary focus:border-transparent"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-base-content/80 mb-1">
//                   Donation Amount ($)
//                 </label>
//                 <input
//                   type="number"
//                   name="amount"
//                   value={formData.amount}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-base-300 rounded-lg bg-base-200 focus:ring-2 focus:ring-primary focus:border-transparent"
//                   min="1"
//                   required
//                 />
//               </div>
//               <div className="flex justify-end gap-3 mt-6">
//                 <button
//                   type="button"
//                   onClick={handleCloseModal}
//                   className="btn btn-ghost"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="btn btn-primary"
//                 >
//                   Proceed to Payment
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };



// const DonationPage = () => {
//   const [donations, setDonations] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchDonations = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/donations`);
//       setDonations(response.data.data);
//     } catch (error) {
//       console.error('Error fetching donations:', error.response?.data || error.message);
//       setDonations([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDonations();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <FaSpinner className="animate-spin text-4xl text-primary" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-base-100">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
//             Make A Difference Today
//           </h1>
//           <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
//             Your donation can change lives. Support our causes and be part of the change.
//           </p>
//         </div>
        
//         {donations.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {donations.slice(0, 6).map((campaign, index) => (
//               <Card key={index} {...campaign} />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <h3 className="text-xl text-base-content/80">
//               No donation campaigns available at the moment.
//             </h3>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DonationPage;

















import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';

export const Card = ({ title, description, collected, target, image, cardId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    cardId: cardId || ''
  });

  const progress = (collected / target) * 100;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDonateClick = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ name: '', email: '', amount: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) throw new Error('Failed to create checkout session');
      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/20 dark:border-gray-700/30 rounded-2xl" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Image with gradient overlay */}
        <div className="relative overflow-hidden h-48 rounded-t-2xl">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <span className="self-start px-3 py-1 rounded-full text-xs uppercase font-semibold bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light mb-3">
            Social Cause
          </span>
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
            {description}
          </p>
          
          {/* Progress bar */}
          <div className="mb-3">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600 dark:text-gray-300">Progress</span>
              <span className="font-semibold text-primary dark:text-primary-light">
                {Math.floor(progress)}%
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-primary-dark dark:from-primary-light dark:to-primary rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-5">
            <span>Raised: ${collected.toLocaleString()}</span>
            <span>Goal: ${target.toLocaleString()}</span>
          </div>
          
          <button
            onClick={handleDonateClick}
            className="mt-auto w-full py-2 px-4 rounded-lg bg-gradient-to-r from-primary to-primary-dark dark:from-primary-light dark:to-primary text-white font-medium hover:opacity-90 transition-opacity shadow-md"
          >
            Donate Now
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-white/20 dark:border-gray-700/30">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Donation Form
                </h2>
                <button 
                  onClick={handleCloseModal}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Donation Amount ($)
                  </label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    min="1"
                    required
                  />
                </div>
                
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-primary to-primary-dark dark:from-primary-light dark:to-primary text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const DonationPage = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDonations = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/donations`);
      setDonations(response.data?.data || []);
    } catch (error) {
      console.error('Error:', error);
      setDonations([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchDonations(); }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <FaSpinner className="animate-spin text-4xl text-primary dark:text-primary-light" />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Make A Difference Today
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your donation can change lives. Support our causes and be part of the change.
          </p>
        </div>
        
        {donations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {donations.slice(0, 6).map((campaign, index) => (
              <Card key={index} {...campaign} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-600 dark:text-gray-400">
              No donation campaigns available at the moment.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationPage;