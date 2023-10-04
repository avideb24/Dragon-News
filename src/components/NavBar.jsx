import { Link } from "react-router-dom";
import userPic from '../images/user.png';

const NavBar = () => {
    return (
        <div className="grid grid-cols-3 py-5">
            <div></div>
            <div className="flex justify-center gap-4 mt-3 text-[#706F6F]">
                <Link to='/'>Home</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Career</Link>
            </div>
            <div className="flex justify-center items-center gap-4">
                <img className="w-10" src={userPic} alt="user-image" />
                <Link to='/login'><button className="btn btn-sm rounded-none text-white bg-[#403F3F]">Login</button></Link>
            </div>
        </div>
    );
};

export default NavBar;