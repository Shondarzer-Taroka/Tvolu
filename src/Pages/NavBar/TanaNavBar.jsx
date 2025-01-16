// import React, { useState, useContext } from 'react';
// import { FaUser, FaMoon, FaSun, FaCaretDown, FaSpinner, FaBars, FaTimes } from 'react-icons/fa';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../AuthProvider/AuthProvider';

// const TanaNavBar = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu
//   const { user, logout, spinner } = useContext(AuthContext);
//   const navigate = useNavigate();

//   // Toggle dark mode
//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.documentElement.classList.toggle('dark', !darkMode);
//   };

//   // Handle login (navigate to login page)
//   const handleLogin = () => {
//     navigate('/login');
//   };

//   // Handle logout
//   const handleLogout = async () => {
//     await logout();
//     setDropdownOpen(false);
//     setMobileMenuOpen(false); // Close mobile menu on logout
//   };

//   // Toggle dropdown menu visibility
//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   // Toggle mobile menu visibility
//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <>
//       {/* Fixed Navbar */}
//       <nav className={`fixed top-0 left-0 w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-4 px-6 shadow-md z-50`}>
//         <div className="max-w-screen-xl mx-auto flex justify-between items-center">
//           {/* Mobile Menu Button (Hamburger icon first) */}
//           <div className="lg:hidden">
//             <button onClick={toggleMobileMenu} className="text-gray-800 dark:text-white p-2">
//               {mobileMenuOpen ? <FaTimes /> : <FaBars />}
//             </button>
//           </div>

//           {/* Logo (appear second on mobile) */}
//           <div className="text-2xl font-bold">
//             <a href="/">TanaApp</a>
//           </div>

//           {/* Nav items for large screens */}
//           <div className="hidden lg:flex space-x-8">
//             <NavLink to="/" className="hover:text-gray-500">Home</NavLink>
//             <NavLink to="/need" className="hover:text-gray-500">Need volunteer</NavLink>
//             <NavLink to="/#makedo" className="hover:text-gray-500">Make donation</NavLink>
//             <NavLink to="/services" className="hover:text-gray-500">Services</NavLink>
//           </div>

//           {/* User profile and dark mode toggle */}
//           <div className="flex items-center space-x-4">
//             {/* Dark mode toggle */}
//             <button onClick={toggleDarkMode} className="p-2">
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>

//             {/* Profile or Login button */}
//             {spinner ? (
//               <FaSpinner className="animate-spin text-gray-500" />
//             ) : user ? (
//               <>
//                 <div className="relative hidden lg:block">
//                   <button onClick={toggleDropdown} className="flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-md">
//                     <img
//                       src={user.image || '/path/to/default-avatar.jpg'}
//                       alt="User Avatar"
//                       className="w-8 h-8 rounded-full"
//                     />
//                     <span>{user.displayName}</span>
//                     <FaCaretDown />
//                   </button>

//                   {/* Dropdown menu */}
//                   {dropdownOpen && !spinner && (
//                     <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 z-10">
//                       <div className="text-gray-800 dark:text-white px-4 py-2">
//                         <strong>{user.name}</strong>
//                         <p className="text-sm">Email: {user.email}</p>
//                       </div>
//                       <div className="text-gray-800 dark:text-white px-4 py-2">
//                        <NavLink to={'/go-dashboard'}>Dashboard</NavLink>
//                       </div>
//                       <button
//                         onClick={handleLogout}
//                         className="block w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
//                       >
//                         Logout
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </>
//             ) : (
//               <button onClick={handleLogin} className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-md">
//                 <FaUser />
//                 <span>Login</span>
//               </button>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMobileMenuOpen(false)} />
//       )}

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden fixed inset-0 bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-4 px-6 space-y-4 z-50">
//           <div className="flex justify-between items-center">
//             {/* Logo in mobile view */}
//             <div className="text-2xl font-bold">
//               <a href="/">TanaApp</a>
//             </div>
//             <button onClick={toggleMobileMenu} className="text-gray-800 dark:text-white p-2">
//               <FaTimes />
//             </button>
//           </div>
//           <NavLink to="/" className="block text-lg py-2 hover:text-gray-500" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
//           <NavLink to="/need" className="block text-lg py-2 hover:text-gray-500" onClick={() => setMobileMenuOpen(false)}>Need volunteer</NavLink>
//           <NavLink to="/#makedo" className="block text-lg py-2 hover:text-gray-500" onClick={() => setMobileMenuOpen(false)}>Make donation</NavLink>
//           <NavLink to="/services" className="block text-lg py-2 hover:text-gray-500" onClick={() => setMobileMenuOpen(false)}>Services</NavLink>

//           {/* Profile/Login in mobile view */}
//           {spinner ? (
//             <FaSpinner className="animate-spin text-gray-500" />
//           ) : user ? (
//             <div className="flex flex-col items-center">
//               <button onClick={toggleDropdown} className="flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-md mb-2">
//                 <img
//                   src={user.image || '/path/to/default-avatar.jpg'}
//                   alt="User Avatar"
//                   className="w-8 h-8 rounded-full"
//                 />
//                 <span>{user.displayName}</span>
//                 <FaCaretDown />
//               </button>

//               {/* Dropdown menu */}
//               {dropdownOpen && !spinner && (
//                 <div className="w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 z-10">
//                   <div className="text-gray-800 dark:text-white px-4 py-2">
//                     <strong>{user.name}</strong>
//                     <p className="text-sm">Email: {user.email}</p>
//                   </div>
//                   <button
//                     onClick={handleLogout}
//                     className="block w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <button onClick={handleLogin} className="w-full text-center py-2 bg-blue-500 text-white rounded-md">
//               <FaUser />
//               <span>Login</span>
//             </button>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default TanaNavBar;








import React, { useState, useContext } from 'react';
import { FaUser, FaMoon, FaSun, FaCaretDown, FaSpinner, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const TanaNavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout, spinner } = useContext(AuthContext);
  const navigate = useNavigate();

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  // Handle login
  const handleLogin = () => {
    navigate('/login');
  };

  // Handle logout
  const handleLogout = async () => {
    await logout();
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className={`fixed top-0 left-0 w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-4 px-6 shadow-md z-50`}>
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-800 dark:text-white p-2">
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="/">TanaApp</a>
          </div>

          {/* Nav items for large screens */}
          <div className="hidden lg:flex space-x-8">
            <NavLink to="/" className="hover:text-gray-500">Home</NavLink>
            <NavLink to="/need" className="hover:text-gray-500">Need volunteer</NavLink>
            <NavLink to="/Blogs" className="hover:text-gray-500">News</NavLink>
            {/* <NavLink to="/services" className="hover:text-gray-500">Services</NavLink> */}
          </div>

          {/* Profile and Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            {/* Dark mode toggle */}
            <button onClick={toggleDarkMode} className="p-2">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* Profile or Login */}
            {spinner ? (
              <FaSpinner className="animate-spin text-gray-500" />
            ) : user ? (
              <div className="relative">
                <button onClick={toggleDropdown} className="flex items-center">
                  <img
                    src={user.photoURL || '/path/to/default-avatar.jpg'}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </button>

                {/* Dropdown menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2  bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 z-10">
                    <div className="text-gray-800 dark:text-white px-4 py-2">
                      <strong>{user.displayName}</strong>
                      <p className="text-sm">Email: {user.email}</p>
                    </div>
                    <NavLink
                      to="/go-dashboard"
                      className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Dashboard
                    </NavLink>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button onClick={handleLogin} className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-md">
                <FaUser />
                <span>Login</span>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-4 px-6 space-y-4 z-50">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <a href="/">TanaApp</a>
            </div>
            <button onClick={toggleMobileMenu} className="text-gray-800 dark:text-white p-2">
              <FaTimes />
            </button>
          </div>
          <NavLink to="/" className="block text-lg py-2 hover:text-gray-500" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/need" className="block text-lg py-2 hover:text-gray-500" onClick={() => setMobileMenuOpen(false)}>Need volunteer</NavLink>
          <NavLink to="/Blogs" className="block text-lg py-2 hover:text-gray-500" onClick={() => setMobileMenuOpen(false)}>News</NavLink>
          <NavLink to="/services" className="block text-lg py-2 hover:text-gray-500" onClick={() => setMobileMenuOpen(false)}>Services</NavLink>
        </div>
      )}
    </>
  );
};

export default TanaNavBar;
