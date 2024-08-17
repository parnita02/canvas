import React, { useEffect, useState } from 'react'
import { storage } from '../utils/Firebase'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import { Link } from 'react-router-dom';

const Home = () => {
    const [allImages, setAllImages] = useState([]);

    useEffect(() => {
        const imageListRef = ref(storage, `users/`)        
        
        listAll(imageListRef)
            .then((uidFolder) =>
                uidFolder.prefixes.forEach((folderRef =>
                    listAll(folderRef)
                        .then((images) =>
                            images.prefixes.forEach((uploadFolder) =>
                                listAll(uploadFolder)
                                    .then((imgs) =>
                                        imgs.items.forEach((item) => {
                                            getDownloadURL(item)
                                                .then((url) => {
                                                    setAllImages((prev) => [...prev, url])
                                         })
                                    })
                                )   
                            )
                        )
                    )
                )
            )
        
    }, []);

  return (<div>
       <div className='px-20 py-8 flex gap-1 items-center w-[95%] mx-auto'>
          <input className='border w-full border-gray-300 p-[0.7rem] rounded-full' type="text" placeholder='search here' />
              <button className='bg-gray-500 px-4 py-[0.7rem] text-sm font-bold text-white rounded-full'>search</button>
        </div>
        <div className='flex flex-wrap mx-2 gap-4 justify-center'>
            {allImages.map((url, index) => (<Link key={index} to="/imageInfo">
                <div className='w-56 h-52 overflow-hidden'>
                    <img src={url} alt='User uploaded content' className='w-full h-full' />
                </div></Link>
            ))}
    </div>
    </div>
    )
}

export default Home;

