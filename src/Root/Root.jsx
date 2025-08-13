import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import TanaNavBar from "../Pages/NavBar/TanaNavBar";

const Root = () => {
  const location = useLocation();

  const excludeNavAndFooter = ["/go-dashboard"];

  const shouldExclude = excludeNavAndFooter.includes(location.pathname);

  return (
    <section className="dark:bg-gray-800">
      <div className="" id="rootelement">
        {!shouldExclude && (
          <>
            <TanaNavBar />
            {location.pathname ==='/' || <> <br /> <br /> </>}
          </>
        )}

        {/* Main Content */}
        <div className={` ${location.pathname==='/' ? '':'max-w-7xl mx-auto mt-[70px]'} `} id="main-content-outlet" >

        <Outlet />
        </div>

      </div>
        {!shouldExclude && <Footer />}
    </section>
  );
};

export default Root;







