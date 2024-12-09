import { Outlet } from "react-router-dom";
import NavBar from "../Pages/NavBar/NavBar";
import Footer from "../Pages/Footer/Footer";


const Root = () => {
    return (
        <section>
            <div className="max-w-6xl mx-auto">
                <NavBar></NavBar>
                <br />
                <br />
                <Outlet></Outlet>
        
            </div>
            <Footer></Footer>
        </section>

    );
};

export default Root;