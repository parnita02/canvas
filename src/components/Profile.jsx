import React, { useEffect, useState } from 'react'
import { auth, storage } from '../utils/Firebase'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    
    const [imgList, setImgList] = useState([]);

    const navigate=useNavigate()
    
    const uploadNavigate = () => {
        navigate("/upload")
    }

   useEffect(() => {
    setTimeout(() => {
    const user = auth.currentUser;
        const imageListRef = ref(storage, `users/${user.uid}/uploads/`);        

        if (user) {
            setImgList([]);
            listAll(imageListRef)
                .then(imgs => {
                    imgs.items.forEach((item) => {
                        getDownloadURL(item).then((url) => {
                            setImgList((prev) => [...prev, url])
                        })
                    })
                })
        }
}, 1000);
       
    }, [])

    

  return (
      <div className='flex flex-col gap-10'>   
          <div className='flex justify-evenly m-10'>
              <div></div>
              <div className='bg-red-600 rounded-full w-14 p-2 flex justify-center shadow-lg shadow-[#646464] hover:scale-105'>
                      <button onClick={uploadNavigate} className=' text-4xl text-white font-bold drop-shadow-xl'>+</button>
            </div>  
          </div>      
        
          
        <div>
              <div className='flex gap-1 w-[90%] mx-auto flex-wrap justify-center'>
                  {imgList.map((url, index) => <div key={index} className='w-56 h-52 overflow-hidden'><img className='w-full h-full' src={url} alt='' /></div>)}
              </div>
        </div>

    </div>
  )
}

export default Profile
