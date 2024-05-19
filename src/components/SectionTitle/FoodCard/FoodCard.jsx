import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";



const FoodCard = ({ item }) => {

    const { name, image, price, recipe ,_id} = item;
    const { user } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (food) => {
        if (user && user?.email) {
           const cartItem = {
            menuId : _id,
            email: user?.email,
            name,
            image,
            price
           }
        }
        else {
            Swal.fire({
                title: "Your are not Logged In",
                text: "Please Login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send to user login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div>

            <div className="max-w-xs rounded-md shadow-md bg-gray-50 dark:text-gray-800">
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <p className="absolute r-0 bg-slate-800 w-12 text-white hover:text-yellow-600 rounded-sm">${price}</p>
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                        <p className="dark:text-gray-800">{recipe}</p>
                    </div>
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="flex items-center btn btn-outline ml-16 border-0 border-b-4 border-yellow-600 uppercase justify-center w-1/2 p-3 font-semibold tracking-wide rounded-md dark:bg-purple-600 dark:text-gray-50">add to card</button>
                </div>
            </div>

        </div>
    )
}

export default FoodCard;