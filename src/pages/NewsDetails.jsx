import { useLoaderData, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import RightSidebar from "../components/RightSidebar";


const NewsDetails = () => {

    const newsData = useLoaderData();

    const { id } = useParams();

    const singleNewsData = newsData.filter(singleNews => singleNews._id === id);

    const news = singleNewsData[0];

    return (
        <div>
            <NavBar></NavBar>
            <div className="grid grid-cols-4 gap-6">
                <div className="col-span-3">
                    <h2 className="text-xl font-bold mb-4 text-[#403F3F]">Dragon News</h2>
                    <img className="w-full object-cover" src={news.image_url} alt="news image" />
                    <p className="text-[#706F6F] text-justify my-6">{news.details}</p>
                </div>
                <RightSidebar></RightSidebar>
            </div>
        </div>
    );
};

export default NewsDetails;