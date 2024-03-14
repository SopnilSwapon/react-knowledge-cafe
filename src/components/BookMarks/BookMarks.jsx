import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';
const BookMarks = ({bookMarks, readingTime}) => {
    // console.log(bookmark.id);
    return (
        <div className='w-full md:w-1/3'>
            <div className='bg-blue-200 text-blue-600 border p-4 rounded-lg mb-4'>
                <h2 className='text-3xl'>Spent Time on Read: {readingTime} min</h2>
            </div>
            <div className="bg-[#1111110D] rounded-lg">
            <h3 className='text-3xl text-center pt-4'>Book Marks {bookMarks.length}</h3>
            {
                bookMarks.map(bookmark => <BookMark 
                    key={bookmark.id}
                bookmark={bookmark}
                ></BookMark>)
            }
        </div>
        </div>
    );
};
BookMarks.propTypes = {
    bookMarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default BookMarks;