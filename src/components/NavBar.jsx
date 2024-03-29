import { Link } from "react-router-dom";
import userPic from '../images/user.png';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const NavBar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(res => {
                toast.success('Successfully Signed Out!')
                console.log(res)
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="grid grid-cols-3 py-5">
            <div></div>
            <div className="flex justify-center gap-4 mt-3 text-[#706F6F]">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className="flex justify-center items-center gap-4">
                <img className="w-10" src={userPic} alt="user-image" />
                {
                    user ?
                        <Link onClick={handleSignOut}><button className="btn btn-sm rounded-none text-white bg-[#403F3F]">Sign Out</button></Link>
                        :
                        <Link to='/login'><button className="btn btn-sm rounded-none text-white bg-[#403F3F]">Login</button></Link>
                }


            </div>
        </div>
    );
};

export default NavBar;