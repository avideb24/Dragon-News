import Marquee from "react-fast-marquee";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import { useLoaderData } from "react-router-dom";
import SingleNews from "../components/SingleNews";


const Home = () => {

    const newsData = useLoaderData();

    return (
        <div>
           
            <Header></Header>
            <div className="flex gap-2 items-center bg-[#F3F3F3] p-4">
                <button className="btn btn-sm rounded-none bg-red-500 text-white">Latest</button>
                <div className="text-[#403F3F] font-bold">
                    <Marquee pauseOnHover={true}>
                        <span>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</span>
                        <span>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</span>
                        <span>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</span>
                    </Marquee>
                </div>
            </div>
            <NavBar></NavBar>
            <div className="grid grid-cols-4 my-14 gap-4">
                <div>
                    <LeftSidebar></LeftSidebar>
                </div>
                <div className="col-span-2">
                    <h2 className="text-xl font-bold mb-4 text-[#403F3F]">Dragon News Home</h2>
                    <div>
                        {
                            newsData.map((news, idx) => <SingleNews key={idx} news={news}></SingleNews>)
                        }
                    </div>
                </div>
                <div>
                    <RightSidebar></RightSidebar>
                </div>
            </div>
        </div>
    );
};

export default Home;