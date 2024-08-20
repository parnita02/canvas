import React, { useRef, useState } from 'react'
import { validation } from '../utils/validate'
import { createUserWithEmailAndPassword,   signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const [errMessage, setErrMessage] = useState(null)
  const dispatch = useDispatch();
  const handleToggle = () => {
    setIsSignIn(!isSignIn)
  }
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignUp = () => {
    //validate
    const message = validation( email.current.value, password.current.value);
    setErrMessage(message)

    if (message) return;

    if (!isSignIn) {

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        
     .then((userCredential) => {
    
       const user = userCredential.user;
       console.log(user);
       

    updateProfile(user, {

      displayName: name.current.value 
     
      
      
    }).then(() => {
       const { uid, email, displayName } = auth.currentUser;
      dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      
    }).catch((error) => {
    
    setErrMessage(error.message)
}); 
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMessage(errorCode + "-" + errorMessage)
    // ..
  });
    }
 else {
      //sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
                console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "- " + errorMessage);
        });
    }


  }
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-4 w-[24rem] shadow-xl px-5 py-10 mx-auto my-20 border border-gray-300' action="">
        <h1 className='mx-11 text-xl font-semibold mb-3'>{isSignIn ? "Sign In" : "Sign Up"}</h1>

        {errMessage&& <span className='text-red-600 text-xs mx-11 font-semibold'>{errMessage}</span>}

        {!isSignIn && <input
          ref={name}
          className='px-2 py-1.5 rounded-md border border-gray-400 w-[75%] mx-auto hover:scale-105'
          type="text"
          placeholder='name' />}
        <input
          ref={email}
          className='px-2 py-1.5 rounded-md border border-gray-400 w-[75%] mx-auto hover:scale-105'
          type="text"
          placeholder='email' />
        <input
          ref={password}
          className='px-2 py-1.5 rounded-md border border-gray-400 w-[75%] mx-auto hover:scale-105'
          type="password"
          placeholder='password' />
        <button
          onClick={handleSignUp}
          className='bg-green-700 w-[75%] mx-auto p-[0.4rem] rounded-md text-white hover:bg-green-800 hover:scale-105 hover:shadow-xl shadow-md shadow-gray-400 font-semibold'>
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <span className='text-gray-500 text-sm mx-auto'>OR</span>
        <p className='text-xs mx-11 '>{isSignIn?"Not Registered Yet?":"Already a User?"} <span onClick={handleToggle} className='font-bold text-sm cursor-pointer'>{isSignIn?"Sign Up":"Sign In"}</span>.</p>
      </form>
    </div>
  )
}

export default Login
