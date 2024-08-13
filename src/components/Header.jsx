import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    
  return (
          <div className='w-full flex py-1 px-10 items-end justify-between shadow-2xl'>     
              <h1 className='font-bold sm:text-3xl text-2xl text-green-800 font-sans'>CANVAS</h1>
          <ul className='px-2 gap-x-2 hidden sm:flex '>
              <li className='hover:underline hover:text-green-800  px-2 rounded-md text-black hover:scale-105'><Link to="/">Home</Link></li>
              <li className='hover:underline hover:text-green-800 px-2 rounded-md text-black hover:scale-105'><Link to="/album">Album</Link></li>
              <li className='hover:underline hover:text-green-800 px-2 rounded-md text-black hover:scale-105'><Link to="/blog">Blog</Link></li>
              <li className='hover:underline hover:text-green-800 px-2 rounded-md text-black hover:scale-105'><Link to="/contact">ContactUs</Link></li>

          </ul>
          <div className=''>
              <button className='bg-green-900 text-white px-2 py-1 rounded-md hover:bg-green-800 hover:scale-105 ' onClick={() => isSignIn ? setIsSignIn(false) : setIsSignIn(true)}>
                  <Link to="/login"> {isSignIn ? "Login" : "Logout"}</Link>
                 </button>
              
          </div>
          </div>
  )
}

export default Header
