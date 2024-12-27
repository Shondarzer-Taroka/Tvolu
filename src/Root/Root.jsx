// import { Outlet } from "react-router-dom";
// import NavBar from "../Pages/NavBar/NavBar";
// import Footer from "../Pages/Footer/Footer";
// import TanaNavBar from "../Pages/NavBar/TanaNavBar";



// const Root = () => {
//     return (
//         <section>
//             <div className="max-w-6xl mx-auto">
//                 {/* <NavBar></NavBar> */}
//                 <TanaNavBar />
//                 <br />
//                 <br />
//                 <Outlet></Outlet>
            
//             </div>
//             <Footer></Footer>
//         </section>

//     );
// };

// export default Root;




import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Pages/NavBar/NavBar";
import Footer from "../Pages/Footer/Footer";
import TanaNavBar from "../Pages/NavBar/TanaNavBar";

const Root = () => {
  const location = useLocation();

  // Define routes where NavBar and Footer should NOT appear
  const excludeNavAndFooter = ["/go-dashboard"];

  // Check if the current route matches the excluded routes
  const shouldExclude = excludeNavAndFooter.includes(location.pathname);

  return (
    <section>
      <div className="max-w-6xl mx-auto" id="rootelement">
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
