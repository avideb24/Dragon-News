import { AiFillGithub, AiOutlineGoogle, AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import swimingPic from '../images/qZone1.png';
import classPic from '../images/qZone2.png';
import playgroundPic from '../images/qZone3.png';


const RightSidebar = () => {
    return (
        <div>
            <div className="border-2 border-black py-4 px-2 mb-10 rounded-md">
                <h2 className="text-xl font-bold mb-5">Login With</h2>
                <div>
                    <button className="w-[95%] bg-transparent border-2 text-blue-500 border-blue-500 rounded-md py-1 ml-4 flex justify-center items-center gap-1"><span className="text-lg"><AiOutlineGoogle></AiOutlineGoogle></span> Login With Google</button>
                    <button className="w-[95%] bg-transparent border-2 text-black border-black rounded-md mt-3 py-1 ml-4 flex justify-center items-center gap-1"><span className="text-lg"><AiFillGithub></AiFillGithub></span> Login With Github</button>
                </div>
            </div>
            <div className="py-4 px-2 mb-10">
                <h2 className="text-xl font-bold mb-5">Find Us on</h2>
                <div className="border-2 rounded-md">
                    <button className="flex items-center gap-2 text-[#706F6F] border-b-2 border-b-slate-200 w-full py-2"><span className="text-xl text-blue-700 ml-8"><AiFillFacebook></AiFillFacebook></span>Facebook</button>
                    <button className="flex items-center gap-2 text-[#706F6F] border-b-2 border-b-slate-200 w-full py-2"><span className="text-xl text-blue-500 ml-8"><AiFillTwitterCircle></AiFillTwitterCircle></span>Twitter</button>
                    <button className="flex items-center gap-2 text-[#706F6F] w-full py-2"><span className="text-xl text-pink-500 ml-8"><AiFillInstagram></AiFillInstagram></span>Instagram</button>
                </div>
            </div>
            <div className="bg-[#F3F3F3] px-2 py-4 rounded-md">
                <h2 className="text-xl font-bold mb-5">Q-Zone</h2>
                <img className="mx-auto" src={swimingPic} alt="" />
                <img className="mx-auto" src={classPic} alt="" />
                <img className="mx-auto" src={playgroundPic} alt="" />
            </div>
        </div>
    );
};

export default RightSidebar;