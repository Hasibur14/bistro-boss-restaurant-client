import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard/Dashboard";
import MainLayout from "../Layout/MainLayout";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import Cart from "../pages/Dashboard/Cart";
import Home from "../pages/Home/Home/Home";
import OurMenu from "../pages/Menu/OurMenu/OurMenu";
import Order from "../pages/Order/Order/Order";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/ourMenu',
                element: <OurMenu></OurMenu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard', 
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'cart',
               element: <Cart></Cart>
            }
        ]
    }
])

export default router;