import React, { useEffect } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/Firebase'
import { addUser, removeUser } from '../utils/userSlice'

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
    
    const { uid, email, displayName } = user;
    dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
 
    
  } else {
   
    dispatch(removeUser());
  }
});
  
   
  },)
  

  return (
    
    <div>
          <Header />
          <Outlet />
          <Footer/>
      </div>

  )
}

export default Layout
