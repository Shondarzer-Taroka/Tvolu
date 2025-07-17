



import React, { useState, useEffect, useContext } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const TopBar = ({ onToggleSidebar, toggleMobileSidebar }) => {
  const [time, setTime] = useState("");
  let { user ,logout} = useContext(AuthContext)
    const [darkMode, setDarkMode] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 

  const handleLogout = async () => {
    await logout();
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime(); // Initial time update
    const timer = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <div className="w-full bg-gray-800 text-white px-4 py-2 flex justify-between items-center shadow-md">
      {/* Left Section */}


      <div className="flex items-center space-x-2 cursor-pointer md:hidden" onClick={() => {
        toggleMobileSidebar();
      }} >
        <CgMenuLeft size={24} />
        <span className="text-lg font-medium">Dashboard</span>
      </div>

      <div className=" hidden md:inline-block " onClick={onToggleSidebar} >
        <div className="items-center space-x-2 cursor-pointer flex">
          <CgMenuLeft size={24} />
          <span className="text-lg font-medium">Dashboard</span>
        </div>

      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
      <div className="bg-green-500 text-white px-4 py-2 rounded">
          <Link to={'/'}>Website</Link>
        </div>
        <span className="text-sm">{time}</span>
        <button
          className="px-3 py-1 bg-red-500 text-sm font-medium rounded hover:bg-red-600"
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default TopBar;










// import React, { useState, useEffect } from "react";
// import { CgMenuLeft } from "react-icons/cg";

// const TopBar = ({ onToggleSidebar }) => {
//   const [time, setTime] = useState("");

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       const hours = String(now.getHours()).padStart(2, "0");
//       const minutes = String(now.getMinutes()).padStart(2, "0");
//       const seconds = String(now.getSeconds()).padStart(2, "0");
//       setTime(`${hours}:${minutes}:${seconds}`);
//     };

//     updateTime(); // Initial time update
//     const timer = setInterval(updateTime, 1000); // Update every second

//     return () => clearInterval(timer); // Cleanup on component unmount
//   }, []);

//   return (
//     <div className="w-full bg-gray-800 text-white px-4 py-2 flex justify-between items-center shadow-md">
//       {/* Left Section */}
//       <div className="flex items-center space-x-2 cursor-pointer" onClick={onToggleSidebar}>
//         <CgMenuLeft size={24} />
//         <span className="text-lg font-medium">Dashboard</span>
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center space-x-6">
//         <span className="text-sm">{time}</span>
//         <button
//           className="px-3 py-1 bg-red-500 text-sm font-medium rounded hover:bg-red-600"
//           onClick={() => alert("Logging out...")}
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TopBar;
















// import React, { useState, useEffect } from "react";
// import { CgMenuLeft } from "react-icons/cg";

// const TopBar = ({ onToggleSidebar }) => {
//   const [time, setTime] = useState("");

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       const hours = String(now.getHours()).padStart(2, "0");
//       const minutes = String(now.getMinutes()).padStart(2, "0");
//       const seconds = String(now.getSeconds()).padStart(2, "0");
//       setTime(`${hours}:${minutes}:${seconds}`);
//     };

//     updateTime(); // Initial time update
//     const timer = setInterval(updateTime, 1000); // Update every second

//     return () => clearInterval(timer); // Cleanup on component unmount
//   }, []);

//   return (
//     <div className="w-full bg-gray-800 text-white px-4 py-2 flex justify-between items-center shadow-md">
//       {/* Left Section */}
//       <div className="flex items-center space-x-2 cursor-pointer" onClick={onToggleSidebar}>
//         <CgMenuLeft size={24} />
//         <span className="text-lg font-medium">Dashboard</span>
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center space-x-6">
//         <span className="text-sm">{time}</span>
//         <button
//           className="px-3 py-1 bg-red-500 text-sm font-medium rounded hover:bg-red-600"
//           onClick={() => alert("Logging out...")}
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TopBar;
