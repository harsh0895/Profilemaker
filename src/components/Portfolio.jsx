import React from 'react'

const Portfolio = ({profile}) => {
  return (
    <div className='flex justify-around mt-4 items-center ml-32 mr-32 rounded-2xl p-2 bg-gradient-to-r from-indigo-500 '>
    <p className='font-bold font-serif'>{profile}</p>
    <a href="https://portfolio-profile-six.vercel.app/" className="text-white font-serif bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-red-500 focus:outline-none dark:focus:ring-blue-800">check Profile</a>  
  </div>  
  )
}

export default Portfolio
