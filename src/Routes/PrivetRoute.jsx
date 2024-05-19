import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location=useLocation()

    if (loading) {
        return <>
            <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-rose-600"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-rose-600"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-rose-600"></div>
            </div>
        </>
    }

    if (user) {
        return children
    }

    return (
        <Navigate to='/'  state={{from: location}} replace>

        </Navigate>
    );
};

export default PrivetRoute;