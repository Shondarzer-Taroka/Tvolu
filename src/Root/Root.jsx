import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import TanaNavBar from "../Pages/NavBar/TanaNavBar";

const Root = () => {
  const location = useLocation();

  const excludeNavAndFooter = ["/go-dashboard"];

  const shouldExclude = excludeNavAndFooter.includes(location.pathname);

  return (
    <section className="dark:bg-gray-800">
      <div className="max-w-6xl mx-auto " id="rootelement">
        {!shouldExclude && (
          <>
            <TanaNavBar />
            
          </>
        )}

        {/* Main Content */}
        <div className="mt-[70px] max-w-7xl mx-auto" id="main-content-outlet">

        <Outlet />
        </div>

      </div>
        {!shouldExclude && <Footer />}
    </section>
  );
};

export default Root;







