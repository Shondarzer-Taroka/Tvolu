import { useState, useContext, useEffect } from 'react';
import { FaUser, FaMoon, FaSun, FaSpinner, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const TanaNavBar = () => {
  // Initialize darkMode state with localStorage value or false
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      return savedMode ? JSON.parse(savedMode) : false;
    }
    return false;
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout, spinner } = useContext(AuthContext);
  const navigate = useNavigate();

  // Apply or remove 'dark' class on html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const toggleDropdown = () => setDropdownOpen(prev => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  const handleLogin = () => navigate('/login');

  const handleLogout = async () => {
    await logout();
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed font-poppins top-0 left-0 w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-white py-4 px-6 shadow-md z-50 transition-colors duration-300">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-accent"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

          {/* Logo */}
          <div className="text-2xl font-bold font-poppins">
            <NavLink to="/" className="hover:text-accent transition-colors duration-200">
              Tvolu
            </NavLink>
          </div>

          {/* Desktop nav links */}
          <div className="hidden lg:flex space-x-8 font-poppins text-lg">
            {[
              { to: '/', label: 'Home' },
              { to: '/need', label: 'Need volunteer' },
              { to: '/Blogs', label: 'News' },
              { to: '/Donations', label: 'Donations' },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `hover:text-accent transition-colors duration-200 ${
                    isActive ? 'text-primary font-semibold' : ''
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Profile and Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-accent"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" size={20} />
              ) : (
                <FaMoon size={20} />
              )}
            </button>

            {/* Profile or Login */}
            {spinner ? (
              <FaSpinner className="animate-spin text-gray-500" size={20} />
            ) : user ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-accent"
                  aria-label="User menu"
                >
                  <img
                    src={user.photoURL || '/default-avatar.jpg'}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg rounded-md py-2 z-10 border border-gray-200 dark:border-gray-700">
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                      <strong className="block truncate">{user.displayName}</strong>
                      <p className="text-sm opacity-75 truncate">Email: {user.email}</p>
                    </div>
                    <NavLink
                      to="/go-dashboard"
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                          isActive ? 'bg-gray-100 dark:bg-gray-700 font-semibold' : ''
                        }`
                      }
                      onClick={() => setDropdownOpen(false)}
                    >
                      Dashboard
                    </NavLink>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-brown-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary"
              >
                <FaUser size={18} />
                <span>Login</span>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-4 px-6 space-y-4 z-50 shadow-lg overflow-y-auto">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold font-poppins">
              <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
                Tvolu
              </NavLink>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-accent"
              aria-label="Close menu"
            >
              <FaTimes size={20} />
            </button>
          </div>

          <div className="flex flex-col space-y-2 mt-8 font-poppins text-lg">
            {[
              { to: '/', label: 'Home' },
              { to: '/need', label: 'Need volunteer' },
              { to: '/Blogs', label: 'News' },
              { to: '/Donations', label: 'Donations' },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 ${
                    isActive ? 'bg-gray-200 dark:bg-gray-700 text-primary font-semibold' : ''
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TanaNavBar;
