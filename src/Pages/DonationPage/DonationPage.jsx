import React, { useState } from 'react';
import donation_1 from '../../../src/assets/donation/group-of-volunteers-with-working-in-community-charity-donation-center--1024x682.jpg';
import donation_2 from '../../../src/assets/donation/children-2704878_640.jpg';
import donation_3 from '../../../src/assets/donation/donate-5281984_640.jpg';

const Card = ({ title, description, collected, target, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
  });

  const progress = (collected / target) * 100;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDonateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ name: '', email: '', amount: '' }); // Reset form data
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          amount: formData.amount,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }
  
      const { url } = await response.json();
  
      // Redirect to the Stripe Checkout page
      window.location.href = url;
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Something went wrong. Please try again.');
    }
  };
  

  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <span className="bg-gray-100 px-3 py-1 rounded-full text-xs uppercase">Social</span>
        <div className="mt-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm mt-2">{description}</p>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-xs">
            <span>Collected</span>
            <span>{Math.floor(progress)}%</span>
          </div>
          <div className="w-full bg-gray-600 h-2 rounded-full mt-2">
            <div
              style={{ width: `${progress}%` }}
              className="bg-accent h-2 rounded-full"
            ></div>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>Collected: ${collected}</span>
            <span>Target: ${target}</span>
          </div>
        </div>
        <button
          className="mt-4 w-full bg-button py-2 rounded-lg hover:bg-accent transition"
          onClick={handleDonateClick}
        >
          Donate Now
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] md:w-[50%] p-6">
            <h2 className="text-xl font-bold mb-4">Donator Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Donation Amount</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  min="1"
                  required
                />
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-button text-black rounded-lg hover:bg-accent transition"
                >
                  Submit Donation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};




const DonationPage = () => {
  
  const campaigns = [
    {
      title: 'Emergency Relief Fund',
      description: 'Providing immediate support to communities affected by natural disasters such as earthquakes, floods, and hurricanes. Your contribution ensures timely food, shelter, and medical assistance.',
      collected: 8700,
      target: 15000,
      image: donation_1,
    },
    {
      title: 'Education Access Initiative',
      description: 'Empowering underprivileged children with access to quality education, school supplies, and scholarships. Let’s build a brighter future, one child at a time.',
      collected: 12000,
      target: 20000,
      image: donation_2,
    },
    {
      title: 'Healthcare Outreach Program',
      description: 'Delivering free medical checkups, medicines, and health awareness programs to underserved rural communities. Together, we can save lives and promote wellness.',
      collected: 4500,
      target: 10000,
      image: donation_3,
    }
  ];
  

  return (
    <div className=" min-h-screen flex flex-col items-center py-10 space-y-10 max-w-6xl mx-auto" id='#makedo'>
      <h1 className="uppercase text-4xl font-bold text-center">
        Make A Difference Today By Donating To Our Cause.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {campaigns.map((campaign, index) => (
          <Card key={index} {...campaign} />
        ))}
      </div>
    </div>
  );
};

export default DonationPage;
