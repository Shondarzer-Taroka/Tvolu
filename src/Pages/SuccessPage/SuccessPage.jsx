import { useEffect, useState } from 'react';

const SuccessPage = () => {
  const [donationDetails, setDonationDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonationDetails = async () => {
      try {
        const sessionId = new URLSearchParams(window.location.search).get('session_id');
        if (!sessionId) {
          throw new Error('Session ID not found');
        }

        const response = await fetch(`http://localhost:5588/donation-success?session_id=${sessionId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch donation details');
        }

        const data = await response.json();
        setDonationDetails(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching donation details:', error);
        setLoading(false);
      }
    };

    fetchDonationDetails();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!donationDetails) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">Failed to load donation details.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-5">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center">
        <h2 className="text-2xl font-bold text-green-600">Thank You for Your Donation!</h2>
        <p className="text-gray-700 mt-4">Your contribution makes a difference!</p>
        <div className="mt-6 text-left">
          <p className="text-sm text-gray-600"><strong>Name:</strong> {donationDetails.name}</p>
          <p className="text-sm text-gray-600"><strong>Email:</strong> {donationDetails.email}</p>
          <p className="text-sm text-gray-600"><strong>Donation Amount:</strong> ${donationDetails.amount}</p>
          <p className="text-sm text-gray-600"><strong>Transaction ID:</strong> {donationDetails.sessionId}</p>
        </div>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default SuccessPage;
