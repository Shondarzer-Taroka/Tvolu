import React, { useEffect, useState } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from the server
// Fetch users from the server
useEffect(() => {
  const fetchUsers = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/users`, {
        method: "GET",
        credentials: "include", // Include cookies with the request
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  fetchUsers();
}, []);


  // Handlers for block and delete actions
  const handleBlock = (id) => {
    alert(`User with ID ${id} has been blocked.`);
  };

  const handleDelete = (id) => {
    alert(`User with ID ${id} has been deleted.`);
  };

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border border-gray-300">Photo</th>
              <th className="p-3 border border-gray-300">Name</th>
              <th className="p-3 border border-gray-300">Email</th>
              <th className="p-3 border border-gray-300">Role</th>
              <th className="p-3 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="p-3 border border-gray-300">
                    <img
                      src={user.photo}
                      alt={user.name}
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="p-3 border border-gray-300">{user.name}</td>
                  <td className="p-3 border border-gray-300">{user.email}</td>
                  <td className="p-3 border border-gray-300">{user.role}</td>
                  <td className="p-3 border border-gray-300">
                    <button
                      onClick={() => handleBlock(user.id)}
                      className="px-4 py-1 bg-yellow-500 text-white rounded mr-2 hover:bg-yellow-600"
                    >
                      Block
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="p-3 text-center border border-gray-300"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
