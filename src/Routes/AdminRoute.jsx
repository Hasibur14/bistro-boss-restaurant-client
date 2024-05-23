import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoute = ({ children }) => {

    const { user, loading } = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation()

    if (loading || isAdminLoading) {
        return <>
            <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-rose-600"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-rose-600"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-rose-600"></div>
            </div>
        </>
    }

    if (user && isAdmin) {
        return children
    }

    return (
        <Navigate to='/' state={{ from: location }} replace></Navigate>
    );
};

export default AdminRoute;