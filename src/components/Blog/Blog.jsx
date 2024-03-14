import PropTypes from 'prop-types'; // ES6
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({blog, handleBookMark}) => {
    // console.log(handleBookMark);
    const {cover_img, author_name, author_img, title,
    read_time, publish_date, hashtags} = blog
    return (
        <main className='p-4 m-4'>
            <img className='mt-5 rounded-lg' width='100%' height='40%' src={cover_img} alt={`The title of the cover img ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-5 mt-5'>
                <img className='w-[20%]' src={author_img} alt="" />
                <div>
                    <h2 className="text-[16px] font-semibold">{author_name}</h2>
                    <p>{publish_date}</p>
                </div>
                </div>
                <div className='flex ml-2'>
           <p>{read_time} min read.</p>
           <button onClick={()=>handleBookMark(blog)} className='text-2xl'><FaRegBookmark></FaRegBookmark></button></div>
            </div>
            <br />
            <h2 className="text-3xl font-bold">{title}</h2>
            {hashtags.map((hash, idx) =><span key={idx}> <a>#{hash}</a> </span>)}
        </main>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookMark: PropTypes.func.isRequired
}

export default Blog;