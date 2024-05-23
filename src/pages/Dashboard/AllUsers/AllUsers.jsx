import { useQuery } from "@tanstack/react-query";
import { AiOutlineInteraction } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`)
            return res.data
        }
    });

    //user delete
    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    };

    //make admin
    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    };


    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Users: {users.length}</h2>
                <h2 className="text-3xl">All Users</h2>
            </div>

            <div className="overflow-x-auto px-10 py-6">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="bg-[#D1A054] dark:bg-gray-800 text-white ">
                        <tr>
                            <th>No.</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>ACtion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ? 'Admin' : <button
                                                onClick={() => handleMakeAdmin(user)}>
                                                <AiOutlineInteraction className="text-lg hover:text-green-500" />
                                            </button>
                                        }
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteUser(user)}>
                                            <RiDeleteBinLine className="text-lg hover:text-red-600" />
                                        </button>
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;