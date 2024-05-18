import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";


const MainLayout = () => {

    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') ||  location.pathname.includes('signUp')
    return (
        <div className="container mx-auto">

            {noHeaderFooter || <Navbar></Navbar>}

            <div className="min-h-[calc(100vh-280px)]">
                <Outlet></Outlet>
            </div>

            {noHeaderFooter || <Footer></Footer>}

        </div>
    );
};

export default MainLayout;