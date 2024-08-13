import React from 'react'

const Body = () => {
  return (
    <div className='absolute h-full'>
      {/* <div className="absolute h-full w-full">
        <img
          className="w-full h-full object-cover"
          src="blank_canvas.jpg"
          alt="bg" />
      </div> */}

      <div className='w-full h-full object-cover flex  flex-col gap-y-10 p-5'>
        
        <div className='sm:flex-row flex-col flex gap-10 sm:items-start items-center'>
          <img className='w-[45%] shadow-2xl hover:scale-105 ' src="img4.jpg" alt="" />
          <div className='flex flex-col gap-5'>
            <h1 className='text-md font-bold text-start font-serif'>Nurtured by Nature, Inspired by Rain.</h1>
            <p className='text-sm'>Let the soothing imagery of rain on leaves bring a sense of calm and tranquility to your space. Whether you're looking to unwind, meditate, or simply appreciate the beauty of nature, our designs offer a peaceful retreat.</p>
            <button className='self-center sm:self-start text-sm lg:text-md font-semibold w-20 bg-green-600 text-white p-1 rounded-md'>Explore</button>
          </div>
        </div>

        <div className='sm:flex-row flex-col-reverse flex gap-10 sm:items-start items-center'>
          <div className='flex flex-col gap-5 '>
          <h1 className='text-md font-bold text-start font-serif'>Where the Earth Touches the Sky, Adventure Awaits.</h1>
          <p className='text-sm'>Inspiration to reach new heights, to explore the unknown, and to find peace in the stillness of their ancient presence. Whether you seek adventure or solace,</p>
            <button className='self-center sm:self-start text-sm lg:text-md font-semibold w-28 bg-green-600 text-white p-1 rounded-md'>Join the Peaks</button>
          </div>   
          <img className='w-[50%] shadow-2xl hover:scale-105 ' src="img5.jpg" alt="" />
        </div>

        <div className='sm:flex-row flex-col flex gap-10 sm:items-start items-center'>
          <img className='w-[45%] shadow-2xl hover:scale-105 ' src="img6.jpg" alt="" />
          <div className='flex flex-col gap-5'>
            <h1 className='text-md font-bold text-start font-serif'>Discover the Serenity and Beauty of Nature's Gentle Touch.</h1>
            <p className='text-sm'> The gentle touch of nature and the soft rustle of the wind bring a calming beauty that soothes the soul. Discover a sanctuary in nature's tender grace, inviting you to pause, reflect, and renew.</p>
            <button className='self-center sm:self-start text-sm lg:text-md font-semibold w-20 bg-green-600 text-white p-1 rounded-md'>Embrace</button>
          </div>
        </div>
    
      </div> 
      <div>

      </div>
    </div>
  )
}

export default Body
