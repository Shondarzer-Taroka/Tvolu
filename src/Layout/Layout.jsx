// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import TanaNavBar from '../Pages/NavBar/TanaNavBar';
// import Footer from '../Pages/Footer/Footer';
// import GoDashboard from '../DashboardRelated/GoDashboard/GoDashboard';
// import ManageMyPost from '../Pages/ManageMyPost/ManageMyPost';

// const Layout = () => {
//   const location = useLocation(); // Get the current route

//   // Check if the current route is the dashboard route
//   const isDashboardPage = location.pathname === '/go-dashboard';

//   return (
//     <>
//       {/* Render the Navbar if not on the dashboard page */}
//       {!isDashboardPage && <TanaNavBar />}

//       <div className="min-h-screen">
//         {/* Page content */}
//         <Routes>
//           <Route path="/managepost" element={<ManageMyPost />} />
//           {/* Other routes */}
//         </Routes>
//       </div>

//       {/* Render the Footer if not on the dashboard page */}
//       {!isDashboardPage && <Footer />}
//     </>
//   );
// };

// export default Layout;






// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import TanaNavBar from '../Pages/NavBar/TanaNavBar';
// import Footer from '../Pages/Footer/Footer';
// import GoDashboard from '../DashboardRelated/GoDashboard/GoDashboard';
// import ManageMyPost from '../Pages/ManageMyPost/ManageMyPost';
// import Sidebar from '../DashboardRelated/GoDashboard/Sidebar';

// const Layout = () => {
//   const location = useLocation(); // Get the current route

//   // Check if the current route is the dashboard route
//   const isDashboardPage = location.pathname === '/go-dashboard';

//   return (
//     <>
//       {/* Render the Navbar if not on the dashboard page */}
//       {!isDashboardPage && <TanaNavBar />}

//       <div className="md:h-[700px]flex justify-center">
//         {/* Show Sidebar only on the dashboard page */}
//         {/* {isDashboardPage && <Sidebar />} */}

//         {/* Page content */}
//         <div className={` mt-12 flex ${isDashboardPage ? 'justify-center items-center' : ''}`}>
//           <Routes>
//             {/* Route for GoDashboard */}
//             <Route path="/go-dashboard" element={<GoDashboard />} />
//             {/* Add route for ManageMyPost */}
//             <Route path="/manage-my-post" element={<ManageMyPost />} />
//             {/* Other routes can go here */}
//           </Routes>
//         </div>
//       </div>

//       {/* Render the Footer if not on the dashboard page */}
//       {!isDashboardPage && <Footer />}
//     </>
//   );
// };

// export default Layout;


import React from 'react';

const Layout = () => {
    return (
        <div>
            
        </div>
    );
};

export default Layout;