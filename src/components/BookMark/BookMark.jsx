import PropTypes from 'prop-types'

const BookMark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-white rounded-lg text-black font-bold mt-4 text-center w-[90%] mx-auto p-3'>
            <h2 className="text-2xl">{title}</h2>
        </div>
    );
};

BookMark.propTypes = {
    bookmark: PropTypes.object
}

export default BookMark;