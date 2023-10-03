import Marquee from "react-fast-marquee";
import Header from "./Header";
import NavBar from "./NavBar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Content from "./Content";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="flex gap-2 items-center bg-[#F3F3F3] p-4">
                <button className="btn btn-sm rounded-none bg-red-500 text-white">Latest</button>
                <p className="text-[#403F3F] font-bold">
                    <Marquee pauseOnHover={true}>
                        <span>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</span>
                        <span>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</span>
                        <span>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</span>
                    </Marquee>
                </p>
            </div>
            <NavBar></NavBar>
            <div className="grid grid-cols-4 my-14">
                <div>
                    <LeftSidebar></LeftSidebar>
                </div>
                <div className="col-span-2">
                    <Content></Content>
                </div>
                <div>
                    <RightSidebar></RightSidebar>
                </div>
            </div>
        </div>
    );
};

export default Home;