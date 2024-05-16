import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";


const MainLayout = () => {
    return (
        <div className="container mx-auto">

            <Navbar></Navbar>
          <div className="min-h-[calc(100vh-280px)]">
          <Outlet></Outlet>
          </div>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;