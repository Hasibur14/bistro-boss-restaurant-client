import { useQuery } from "@tanstack/react-query";
import { FaBook, FaDollarSign, FaUsers } from "react-icons/fa";
import { MdOutlineBorderColor } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AdminHome = () => {

    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();


    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    const { data: chatData } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats')
            return res.data
        }
    })


    if (loading) return

    return (
        <div className="">
            <h2 className="text-3xl">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <div>
                <div className="stats shadow ">

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaDollarSign className="text-3xl"></FaDollarSign>
                        </div>
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value">${stats?.revenue}</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUsers className="text-3xl"></FaUsers>
                        </div>
                        <div className="stat-title">Users</div>
                        <div className="stat-value">{stats.users}</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <MdOutlineBorderColor className="text-3xl" />
                        </div>
                        <div className="stat-title">Orders</div>
                        <div className="stat-value">{stats.orders}</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaBook className="text-3xl"></FaBook>
                        </div>
                        <div className="stat-title">Menu Items</div>
                        <div className="stat-value">{stats.menuItems}</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminHome;