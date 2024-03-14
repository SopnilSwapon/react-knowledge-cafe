import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import BookMarks from './components/BookMarks/BookMarks';

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleBookMark  = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    console.log(bookMarks);
  setBookMarks(newBookMarks)
  }
  const handleMarkAsRead = (time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex'>
      <Blogs 
      handleBookMark={handleBookMark}
      handleMarkAsRead={handleMarkAsRead}
      ></Blogs>
      <BookMarks 
      bookMarks={bookMarks}
      readingTime={readingTime}
      ></BookMarks>
      </div>
    </>
  )
}

export default App
