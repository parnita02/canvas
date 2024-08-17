import React, { useState } from 'react'
import { v4 } from 'uuid'
import { auth, storage } from '../utils/Firebase'
import { ref, uploadBytes } from 'firebase/storage'
import { useNavigate } from 'react-router-dom'


const Upload = () => {

    const navigate = useNavigate()

    const [imgUpload, setImgUpload] = useState(null)
     const uploadImage = () => {
        if (imgUpload == null) return

       
        const user = auth.currentUser; // Get the currently logged-in user

        if (user) {
            const imageRef = ref(storage, `users/${user.uid}/uploads/${v4()}`); // Store images in a directory specific to the user
            uploadBytes(imageRef, imgUpload).then(() => {
                alert("Image Uploaded");
                navigate("/profile")
            });
        }
    }
    
  return (
    <div>
      <div className='flex flex-col gap-4 w-[24rem] shadow-xl px-5 py-10 mx-auto my-20 border border-gray-300 '>
              <div className='flex justify-center bg-gray-300 px-6 py-12 rounded-md'>
                  <input 
                      className='hover:scale-105'
                      type="file"
                      onChange={(e) => {
                          setImgUpload(e.target.files[0])
                      }}
                  />
                  </div>
                  <div className='bg-red-600 py-1 px-2 rounded-md flex justify-center hover:scale-105'>
                      <button className='text-white font-semibold text-lg drop-shadow-xl' onClick={uploadImage}>Upload</button>
                  </div>
                </div>  
    </div>
  )
}

export default Upload
