import { FaAd, FaCalculator, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useCart from "../../hooks/useCart";


const Dashboard = () => {

    const [cart] = useCart();
    const [isAdmin] = useAdmin();


    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <div className="text-center p-4">
                    <h2 className="text-3xl font-extrabold">BISTRO BOSS</h2>
                    <p className="text-xl font-bold">RESTAURANT</p>
                </div>
                <ul className="menu space-y-2 font-semibold">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/adminHome'>
                                    <FaHome></FaHome>
                                    ADMIN HOME
                                </NavLink>
                            </li>
                            <li>

                                <NavLink to='/dashboard/addItems'>
                                    <FaCalculator></FaCalculator>
                                    ADD ITEMS
                                </NavLink>
                            </li>
                            <li>

                                <NavLink to='/dashboard/manageItem'>
                                    <FaShoppingCart />
                                    MANAGE ITEMS
                                </NavLink>
                            </li>
                            <li>

                                <NavLink to='/dashboard/booking'>
                                    <FaAd></FaAd>
                                    MANAGE BOOKINGS
                                </NavLink>
                            </li>
                            <li>

                                <NavLink to='/dashboard/users'>
                                    <FaList></FaList>
                                    ALL USER
                                </NavLink>
                            </li>
                        </>
                            :
                            <>
                            {/* User */}
                                <li>
                                    <NavLink to='/dashboard/userHome'>
                                        <FaHome></FaHome>
                                        USER  HOME
                                    </NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/history'>
                                        <FaCalculator></FaCalculator>
                                     PAYMENT HISTORY
                                    </NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/cart'>
                                        <FaShoppingCart />
                                        MY CART ({cart.length})
                                    </NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/review'>
                                        <FaAd></FaAd>
                                        ADD REVIEW
                                    </NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/paymentHistory'>
                                        <FaList></FaList>
                                      PAYMENT REAL HISTORY
                                    </NavLink>
                                </li>
                            </>
                    }
                    <span className="mt-96">
                        <hr />
                    </span>
                    {/* shared item */}
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order'>
                            <FaSearch></FaSearch>
                            MENU
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>
                            <FaShoppingBag></FaShoppingBag>
                            SHOP
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>
                            <FaEnvelope></FaEnvelope>
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