import { NavLink } from "react-router-dom";

const Navbar = () => {


    const links = (
        <>
        <li>
        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-white  px-2 py-2 border-2 border-yellow-600 rounded-md" : "hover:text-yellow-600"} > <span>Home</span> </NavLink>
        </li>
        <li>
        <NavLink to="/ourMenu" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-white  px-2 py-2 border-2 border-yellow-600 rounded-md" : "hover:text-yellow-600"} > <span>Our Menu</span> </NavLink>
        </li>
        <li>
        <NavLink to="/order/salad" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-white  px-2 py-2 border-2 border-yellow-600 rounded-md" : "hover:text-yellow-600"} > <span>Our Order</span> </NavLink>
        </li>
        <li>
        <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-white  px-2 py-2 border-2 border-yellow-600 rounded-md" : "hover:text-yellow-600"} > <span>Login</span> </NavLink>
        </li>
        </>
    )

    return (
        <div>
            <div className="container mx-auto navbar fixed z-10 bg-opacity-30 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-500 rounded-box w-52 border">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className=" text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal space-x-4 px-1 text-white">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;