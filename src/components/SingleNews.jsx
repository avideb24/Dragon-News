import PropTypes from 'prop-types';
import { BsBookmark, BsShare, BsEye, BsStar, BsFillStarFill } from "react-icons/bs";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const SingleNews = ({ news }) => {

    const { title, author, image_url, details, rating, total_view } = news;

    return (
        <div className='pb-4 space-y-2 border-2 rounded-md mb-8'>
            <div className='flex justify-between items-center bg-slate-200 p-2 px-4'>
                <div className='flex gap-4'>
                    <img className='w-10 h-10 object-cover rounded-full' src={author.img} alt="autor image" />
                    <div>
                        <p>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <Link><span><BsBookmark></BsBookmark></span></Link>
                    <Link><span><BsShare></BsShare></span></Link>
                </div>
            </div>
            <h3 className='text-xl font-bold px-4 py-2 text-[#403F3F]'>{title}</h3>
            <img className='w-full px-4' src={image_url} alt="" />
            {
                details.length > 200 ?

                    <div className='px-4 py-2'>
                        <span className='text-[#706F6F] text-justify'>{details.slice(0, 200)}..... </span>
                        <Link><button className='font-bold text-[#FF8C47]'>Read More</button></Link>
                    </div>
                    :
                    <p className='px-4 py-2 text-[#706F6F] text-justify'>{details}</p>
            }
            <div className='flex justify-between items-center text-[#706F6F] mx-4 pt-4 border-t-2'>
                <div><Rating className='text-[#FF8C47]' initialRating={rating.number} emptySymbol={<BsStar></BsStar>} fullSymbol={<BsFillStarFill></BsFillStarFill>}></Rating><span className='ml-2'>{rating.number}</span></div>
                <div className='flex gap-2 items-center'><BsEye></BsEye>{total_view}</div>
            </div>



        </div>
    );
};

export default SingleNews;

SingleNews.propTypes = {
    news: PropTypes.object,
}
