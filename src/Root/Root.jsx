








import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import TanaNavBar from "../Pages/NavBar/TanaNavBar";

const Root = () => {
  const location = useLocation();

  // Define routes where NavBar and Footer should NOT appear
  const excludeNavAndFooter = ["/go-dashboard"];

  // Check if the current route matches the excluded routes
  const shouldExclude = excludeNavAndFooter.includes(location.pathname);

  return (
    <section className="dark:bg-gray-800">
      <div className="max-w-6xl mx-auto " id="rootelement">
        {/* Conditionally render TanaNavBar */}
        {!shouldExclude && (
          <>
            <TanaNavBar />
            <br />
            <br />
          </>
        )}

        {/* Main Content */}
        <Outlet />

        {/* Conditionally render Footer */}
        {!shouldExclude && <Footer />}
      </div>
    </section>
  );
};

export default Root;











// import { Outlet, useLocation } from "react-router-dom";
// import Footer from "../Pages/Footer/Footer";
// import TanaNavBar from "../Pages/NavBar/TanaNavBar";

// const Root = () => {
//   const location = useLocation();
//   const excludeNavAndFooter = ["/go-dashboard"];
//   const shouldExclude = excludeNavAndFooter.includes(location.pathname);

//   return (
//     <section className="relative overflow-hidden min-h-screen bg-black">
//       {/* Animated Wave Background */}
//       <div className="absolute top-0 left-0 w-[200%] animate-wave z-0">
//         <svg
//           viewBox="0 0 2880 560"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-full h-auto"
//         >
//           <defs>
//             <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
//               <stop offset="0%" stopColor="#00c6ff" />
//               <stop offset="50%" stopColor="#8e44ad" />
//               <stop offset="100%" stopColor="#f39c12" />
//             </linearGradient>
//           </defs>
//           {[...Array(20)].map((_, i) => (
//             <path
//               key={i}
//               d={`
//                 M0 ${100 + i * 10}
//                 C720 ${200 + i * 10}, 2160 ${0 + i * 10}, 2880 ${100 + i * 10}
//               `}
//               stroke="url(#gradient)"
//               strokeWidth="1"
//               fill="none"
//               opacity={(21 - i) / 25}
//             />
//           ))}
//         </svg>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 max-w-6xl mx-auto px-4" id="rootelement">
//         {!shouldExclude && (
//           <>
//             <TanaNavBar />
//             <br />
//             <br />
//           </>
//         )}
//         <Outlet />
//         {!shouldExclude && <Footer />}
//       </div>
//     </section>
//   );
// };

// export default Root;
