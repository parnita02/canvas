import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Body = () => {

  const user = useSelector((state) => state.user)
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    if (user) {
      navigate("/home")
    } else {
      navigate("/login")
    }
  }
  return (
    <div className='relative'>
      <div className="my-10 ">
          <h1 className='py-6 text-center lg:text-5xl text-4xl font-bold text-green-700 drop-shadow-lg'>Where Every Picture Tells a Story</h1>
      <h2 className='text-center lg:text-3xl text-2xl text-gray-700 font-bold'>Seeing the Extraordinary in the Ordinary</h2>
      </div>
    

      <div className='lg:w-[90%] w-[100%] mx-auto flex flex-col gap-y-20 p-10 items-center justify-evenly'>
        
        <div className='sm:flex-row flex-col flex gap-5 sm:items-start items-center'>
          <img className='rounded-sm lg:w-[23rem] w-[18rem] shadow-2xl hover:scale-105 ' src="img4.jpg" alt="" />
          <div className='flex flex-col gap-3 w-80'>
            <h1 className='text-lg font-bold text-justify'>Nurtured by Nature, Inspired by Rain.</h1>
            <p className='text-sm text-justify'>Let the soothing imagery of rain on leaves bring a sense of calm and tranquility to your space to simply appreciate the beauty of nature, our designs offer a peaceful retreat.</p>
            <button onClick={handleButtonClick} className='self-center sm:self-start text-sm lg:text-md font-semibold w-20 bg-green-600 text-white p-1 rounded-md hover:scale-105 hover:bg-green-700'>Explore</button>
          </div>
        </div>

        <div className='sm:flex-row flex-col-reverse flex gap-5 sm:items-start items-center'>
          <div className='flex flex-col gap-3 w-80'>
          <h1 className='text-lg font-bold text-justify'>Where the Earth Touches the Sky, Adventure Awaits.</h1>
          <p className='text-sm text-justify'>Inspiration to reach new heights, to explore the unknown, and to find peace in the stillness of their ancient presence. Whether you seek adventure or solace,</p>
           <button onClick={handleButtonClick} className='self-center sm:self-start text-sm lg:text-md font-semibold w-28 bg-green-600 text-white p-1 rounded-md hover:scale-105 hover:bg-green-700'>Join the Peaks</button>

          </div>   
          <img className='rounded-sm lg:w-[23rem] w-[18rem] shadow-2xl hover:scale-105 ' src="img5.jpg" alt="" />
        </div>

        <div className='sm:flex-row flex-col flex gap-5 sm:items-start items-center'>
          <img className='rounded-sm lg:w-[23rem] w-[18rem] h-[13rem] shadow-2xl hover:scale-105 ' src="img6.jpg" alt="" />
          <div className='flex flex-col gap-3 w-80'>
            <h1 className='text-lg font-bold text-justify'>Discover the Serenity of Nature's Gentle Touch.</h1>
            <p className='text-sm text-justify'> The gentle touch of nature and the soft rustle of the wind bring a calming beauty that soothes the soul. Discover a sanctuary in nature's tender grace, inviting you to pause, reflect, and renew.</p>
           <button onClick={handleButtonClick} className='self-center sm:self-start text-sm lg:text-md font-semibold w-20 bg-green-600 text-white p-1 rounded-md hover:scale-105 hover:bg-green-700'>Embrace</button>
          </div>
        </div>
    
      </div> 
      
    </div>
  )
}

export default Body
