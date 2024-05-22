import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                const userinfo = {
                    eamil: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userinfo)
                .then(res => {
                    console.log(res.data)
                    toast.success('User Login Successfully!')
                    navigate('/')
                })
            })
    }

    return (
        <div className="mx-auto py-2 ">
            <div>
                <button
                    onClick={handleGoogleSignIn}
                    className="btn bg-yellow-500 text-white ">
                    <FaGoogle></FaGoogle>
                    Google Login
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;