import React from 'react';
import donation_1 from '../../../src/assets/donation/group-of-volunteers-with-working-in-community-charity-donation-center--1024x682.jpg'
const Card = ({ title, description, collected, target, image }) => {
  const progress = (collected / target) * 100;

  return (
    <div className="rounded-xl overflow-hidden shadow-lg ">
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
        <button className="mt-4 w-full bg-button py-2 rounded-lg hover:bg-accent transition">
          Donate Now
        </button>
      </div>
    </div>
  );
};

const DonationPage = () => {
  const campaigns = [
    {
      title: 'Emergency Relief Fund',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus.',
      collected: 10000,
      target: 11000,
      image: donation_1,
    },
    {
      title: 'Education Access Initiative',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus.',
      collected: 10000,
      target: 11000,
      image: donation_1,
    },
    {
      title: 'Healthcare Outreach Program',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus.',
      collected: 1000,
      target: 11000,
      image: donation_1,
    },
  ];

  return (
    <div className=" min-h-screen flex flex-col items-center py-10 space-y-10 max-w-6xl mx-auto">
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
