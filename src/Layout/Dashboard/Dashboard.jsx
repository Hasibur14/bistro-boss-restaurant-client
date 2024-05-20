import { FaAd, FaCalculator, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <div className="text-center p-4">
                    <h2 className="text-3xl font-extrabold">BISTRO BOSS</h2>
                    <p className="text-xl font-bold">RESTAURANT</p>
                </div>
                <ul className="menu space-y-2 font-semibold">
                    <li>
                        <NavLink to='/dashboard/userHome'>
                            <FaHome></FaHome>
                            USER  HOME
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to='/dashboard/reservation'>
                            <FaCalculator></FaCalculator>
                            RESERVATION
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to='/dashboard/cart'>
                            <FaShoppingCart />
                            MY CART
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to='/dashboard/review'>
                            <FaAd></FaAd>
                            ADD REVIEW
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to='/dashboard/booking'>
                            <FaList></FaList>
                            MY BOOKING
                        </NavLink>
                    </li>
                    <span className="mt-96">
                        <hr />
                    </span>
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order'>
                            <FaHome></FaHome>
                            MENU
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>
                            <FaSearch></FaSearch>
                            SHOP
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>
                            CONTACT
                        </NavLink>
                    </li>
                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;