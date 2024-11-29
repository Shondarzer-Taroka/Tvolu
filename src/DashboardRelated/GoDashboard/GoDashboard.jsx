import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const GoDashboard = () => {
  const [activeTab, setActiveTab] = useState('admin'); // State to toggle between Admin and Users

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        {/* admin */}
       {/* users */}
       <NavLink to={'/managepost'}>Manage MyPost</NavLink>
       <NavLink to={'/managepost'}>Add Volunteer Post</NavLink>
       <NavLink to={'/managepost'}>Add Feedback</NavLink>
      </div>

      {/* Right Content */}
      <div className="w-3/4 p-6">
        {activeTab === 'admin' && (
          <div>
            <h1 className="text-2xl font-semibold mb-4">Admin Section</h1>
            <p className="text-gray-700">
              Here you can manage administrative tasks, including managing posts, reviewing feedback, and more.
            </p>
            <div className="mt-4 space-y-4">
              <button className="btn btn-primary">Manage Posts</button>
              <button className="btn btn-secondary">View Feedback</button>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div>
            <h1 className="text-2xl font-semibold mb-4">Users Section</h1>
            <p className="text-gray-700">
              This section allows you to view and manage user-related data, such as profiles, activities, and permissions.
            </p>
            <div className="mt-4 space-y-4">
              <button className="btn btn-primary">View Profiles</button>
              <button className="btn btn-secondary">Manage Activities</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoDashboard;
