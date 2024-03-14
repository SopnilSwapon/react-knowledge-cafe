import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import BookMarks from './components/BookMarks/BookMarks';

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const handleBookMark  = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    console.log(bookMarks);
  setBookMarks(newBookMarks)
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex'>
      <Blogs handleBookMark={handleBookMark}></Blogs>
      <BookMarks bookMarks={bookMarks}></BookMarks>
      </div>
    </>
  )
}

export default App
