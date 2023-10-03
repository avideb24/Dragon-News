import Marquee from "react-fast-marquee";
import Header from "./Header";
import NavBar from "./NavBar";

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
        </div>
    );
};

export default Home;