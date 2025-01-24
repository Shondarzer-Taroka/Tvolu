






// import React from "react";
// import { FaHome, FaPlusCircle, FaComments } from "react-icons/fa";
// import { FiLogOut } from "react-icons/fi";

// const Sidebar = ({ isCollapsed, onSidebarItemClick }) => {
//   return (
//     <div
//       className={`h-screen bg-gray-900 text-gray-200 ${
//         isCollapsed ? "w-20" : "w-64"
//       } transition-all duration-300 flex flex-col`}
//     >
//       {/* Header */}
//       <div
//         className={`flex items-center justify-center py-6 bg-gray-800 ${
//           isCollapsed ? "hidden" : "block"
//         }`}
//       >
//         <h1 className="text-xl font-bold uppercase">My Dashboard</h1>
//       </div>

//       {/* Navigation Links */}
//       <nav className="flex-1 px-4 py-6 space-y-6">
//         {/* Main Section */}
//         <div>
//           <SidebarItem 
//             icon={<FaHome />} 
//             label="Manage My Post" 
//             isCollapsed={isCollapsed} 
//             onClick={() => onSidebarItemClick("Manage My Post")}
//           />
//           <SidebarItem 
//             icon={<FaPlusCircle />} 
//             label="Add Post" 
//             isCollapsed={isCollapsed} 
//             onClick={() => onSidebarItemClick("Add Post")}
//           />
//           <SidebarItem 
//             icon={<FaComments />} 
//             label="Feedback" 
//             isCollapsed={isCollapsed} 
//             onClick={() => onSidebarItemClick("Feedback")}
//           />
//         </div>

//         {/* Secondary Section */}
//         <div>
//           <SidebarItem 
//             icon={<FiLogOut />} 
//             label="Logout" 
//             isCollapsed={isCollapsed} 
//             onClick={() => alert("Logging out...")}
//           />
//         </div>
//       </nav>

//       {/* Footer */}
//       <div className={`px-4 py-4 bg-gray-800 ${isCollapsed ? "hidden" : "block"}`}>
//         <p className="text-xs text-gray-400 text-center">
//           © 2024 My Dashboard. All rights reserved.
//         </p>
//       </div>
//     </div>
//   );
// };

// const SidebarItem = ({ icon, label, isCollapsed, onClick }) => (
//   <div 
//     className="flex items-center p-3 rounded-md hover:bg-gray-700 cursor-pointer transition"
//     onClick={onClick}
//   >
//     <div className="text-lg">{icon}</div>
//     {!isCollapsed && <span className="ml-3 text-sm font-medium">{label}</span>}
//   </div>
// );

// export default Sidebar;






















import React, { useContext } from "react";
import { FaHome, FaPlusCircle, FaComments, FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaDonate } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Sidebar = ({ isCollapsed, onSidebarItemClick, showMobileSidebar, }) => {
  let { user } = useContext(AuthContext)
  console.log(user);

  return (
    <div
      //   className={`h-screen bg-gray-900 text-gray-200 ${isCollapsed ? "w-20" : "w-64"} transition-all duration-300 flex flex-col lg:relative`}

      className={`bg-gray-900 text-white h-screen  flex flex-col fixed md:relative z-50 transition-all duration-300 
        ${isCollapsed ? 'w-16' : 'w-64'} 
        ${showMobileSidebar ? 'left-0' : '-left-64'} md:left-0`}
    >
      {/* Header */}
      <div
        className={`flex items-center justify-center py-6 bg-gray-800 ${isCollapsed ? "hidden" : "block"}`}
      >
        <h1 className="text-xl font-bold uppercase">My Dashboard</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-6">
        {/* Main Section */}
        <div>
          <SidebarItem
            icon={<FaHome />}
            label="Manage My Post"
            isCollapsed={isCollapsed}
            onClick={() => onSidebarItemClick("Manage My Post")}
          />
          <SidebarItem
            icon={<FaPlusCircle />}
            label="Add Post"
            isCollapsed={isCollapsed}
            onClick={() => onSidebarItemClick("Add Post")}
          />
          <SidebarItem
            icon={<FaComments />}
            label="Feedback"
            isCollapsed={isCollapsed}
            onClick={() => onSidebarItemClick("Feedback")}
          />
          <SidebarItem
            icon={<IoNewspaperSharp />}
            label="Make a News"
            isCollapsed={isCollapsed}
            onClick={() => onSidebarItemClick("Make a News")}
          />
          <SidebarItem
            icon={<IoNewspaperSharp />}
            label="My News"
            isCollapsed={isCollapsed}
            onClick={() => onSidebarItemClick("My News")}
          />
          <SidebarItem
            icon={<FaDonate />}
            label="Add Donation"
            isCollapsed={isCollapsed}
            onClick={() => onSidebarItemClick("Add Donation")}
          />
          <SidebarItem
            icon={<FaUser />}
            label="All Users"
            isCollapsed={isCollapsed}
            onClick={() => onSidebarItemClick("All Users")}
          />
        </div>

        {/* Secondary Section */}
        <div>
          <SidebarItem
            icon={<FiLogOut />}
            label="Logout"
            isCollapsed={isCollapsed}
            onClick={() => alert("Logging out...")}
          />
        </div>
      </nav>

      {/* Footer */}
      <div className={`px-4 py-4 bg-gray-800 ${isCollapsed ? "hidden" : "block"}`}>
        <p className="text-xs text-gray-400 text-center">
          © 2024 My Dashboard. All rights reserved.
        </p>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, isCollapsed, onClick }) => (
  <div
    className="flex items-center p-3 rounded-md hover:bg-gray-700 cursor-pointer transition"
    onClick={onClick}
  >
    <div className="text-lg">{icon}</div>
    {!isCollapsed && <span className="ml-3 text-sm font-medium">{label}</span>}
  </div>
);

export default Sidebar;
