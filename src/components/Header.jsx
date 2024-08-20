import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut,  onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/Firebase'
import { addUser, removeUser } from '../utils/userSlice'
import { MAIN_LOGO, USER_LOGO } from '../utils/Constants';

const Header = () => {
    const user = useSelector((state) => state.user);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    
  useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
    
    const { uid, email, displayName } = user;
          dispatch(addUser({
              uid: uid,
              email: email,
              displayName: displayName
          }));
          navigate("/home")
  } else {
   
          dispatch(removeUser());
          navigate("/")
        }
    }); 
      return () => unsubscribe(); 
  },[])
  

    const handleLogout = () => {
        signOut(auth).then(() => {   
        }).catch((error) => {
            console.error("Logout error: ", error);
        });
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='w-full flex py-1 px-10 items-end justify-between shadow-2xl'>
            <Link to={"/"}><img className='w-24 hover:scale-105' src={MAIN_LOGO} alt="logo" /></Link>
            {user && (
                <ul className='px-2 gap-x-2 hidden sm:flex'>
                    <li className='hover:underline hover:text-green-800 px-2 rounded-md text-black hover:scale-105'>
                        <Link to="/home">Home</Link>
                    </li>
                    <li className='hover:underline hover:text-green-800 px-2 rounded-md text-black hover:scale-105'>
                        <Link to="/album">Album</Link>
                    </li>
                    <li className='hover:underline hover:text-green-800 px-2 rounded-md text-black hover:scale-105'>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className='hover:underline hover:text-green-800 px-2 rounded-md text-black hover:scale-105'>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            )}
            
            {!user && (
                <button className='bg-green-700 text-white px-2 py-1 rounded-md hover:bg-green-800 hover:scale-105'>
                    <Link to="/login">Login</Link>
                </button>
            )}

            {user && (
                <div className='relative flex items-center'>
                    <div onClick={toggleDropdown} className='flex flex-col items-center cursor-pointer'>
                        <img className='w-6 hover:scale-105' src={USER_LOGO} alt="User" />
                        <span className='text-[0.6rem] font-bold'>{user.displayName}</span>
                    </div>
                    {isDropdownOpen && (
                        <div className='absolute right-0 top-full mt-2 w-40 bg-white border rounded-md shadow-lg z-50'>
                            <ul className='flex flex-col'>
                                <li className='hover:bg-gray-100 px-4 py-2'>
                                    <Link to="/profile">Profile</Link>
                                </li>
                                <li className='hover:bg-gray-100 px-4 py-2'>
                                    Settings
                                </li>
                                <li className='hover:bg-gray-100 px-4 py-2'>
                                    <button onClick={handleLogout} className='w-full text-left'>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Header;
