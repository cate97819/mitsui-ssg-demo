'use client'
import React from 'react'

const MainVisual = () => {
  return (
    // <div className='min-h-[600px] w-full bg-slate-200 text-white flex flex-col items-center justify-center'>
    //   <img src="/images/logo.png" alt="" className='w-full max-w-[800px] px-4'/>
    // </div>
    <div className='relative w-full'>
      <div className='bg-slate-300 min-h-[650px] flex flex-row items-center justify-center'>
        {/* <img src="/images/logo.png" alt="" className='max-w-[800px] drop-shadow-xl'/> */}
      </div>
      {/* <div className='absolute flex flex-row items-center justify-center top-0 left-0 bg-white/50 w-full h-full z-10'>
        <img src="/images/logo.png" alt="" className='max-w-[800px] drop-shadow-xl'/>
      </div> */}
      {/* <Splide data-splide='{"type":"loop","autoplay":"true"}' aria-label="お気に入りの写真" className='w-full max-h-[650px] object-cover overflow-clip '>
        <SplideSlide>
          <img src="/images/image1.jpg" alt="" className='blur-sm'/>
        </SplideSlide>
        <SplideSlide>
          <img src="/images/image2.jpg" alt="" className='blur-sm'/>
        </SplideSlide>
        <SplideSlide>
          <img src="/images/image3.jpg" alt="" className='blur-sm'/>
        </SplideSlide>
        <SplideSlide>
          <img src="/images/image4.jpeg" alt="" className='blur-sm'/>
        </SplideSlide>
      </Splide> */}
    </div>
  )
}

export default MainVisual