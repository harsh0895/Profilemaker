import React, { useState } from 'react'

const Pagelayout = () => {
    const [bookMark, setBookMark] = useState(1);

    const [paragraph, setParagraph] = useState(
        {
            name: ["Harsh", "Aman", "kunal"],
        })

  return (
    <>
    <div className='flex text-white'>
        <ul>
            { paragraph.name.map( (a, index) => {
                return <li className='${key === bookMark ? block : hidden }' key={index} >{a}</li>
            })}
        </ul>
    </div>
    <div className='text-white'>
      <button onClick={() => {
        setBookMark((bookMark) => bookMark - 1);
      }} >Previous : {bookMark}</button>
      <button onClick={() => {
        setBookMark((bookMark) => bookMark + 1);
      }} >Next: {bookMark}</button>
    </div>
    </>
  )
}

export default Pagelayout
