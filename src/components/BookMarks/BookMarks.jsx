import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';
const BookMarks = ({bookMarks}) => {
    // console.log(bookmark.id);
    return (
        <div className="w-full md:w-1/3 bg-[#1111110D] rounded-lg">
            <h3 className='text-3xl text-center pt-4'>Book Marks {bookMarks.length}</h3>
            {
                bookMarks.map(bookmark => <BookMark 
                    key={bookmark.id}
                bookmark={bookmark}
                ></BookMark>)
            }
        </div>
    );
};
BookMarks.propTypes = {
    bookMarks: PropTypes.array
}

export default BookMarks;