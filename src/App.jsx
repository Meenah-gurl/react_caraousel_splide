import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import "@splidejs/splide/dist/css/splide.min.css";

export const App = () => {
  return (
    <div className='max-w-2xl mx-auto py-10 space-y-3'>
      <div className='text-center text-lg'>Building Slider with Splide js Library</div>
      <div className='py-10 bg-purple-500 flex justify-center items-center rounded-lg'>
        <Splide options={{
          type: 'loop',
          rewind:true, 
          autoplay: true,
          perMove: 1,
          perPage: 2, 
          gap: '2rem',
          arrows: false,
          pagination: false,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            speed: 2
          },
        }}
        extensions={{ AutoScroll }}>
        <SplideSlide>
          <div className=' h-72 flex justify-center items-center'>
             <img src="/src/assets/nature1.jpg" className='w-96 h-full' alt="" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className=' h-72 flex justify-center items-center '>
              <img src="/src/assets/nature2.jpg" className='w-96 h-full' alt="" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className=' h-72 flex justify-center items-center '>
              <img src="/src/assets/nature3.jpg" className='w-96 h-full' alt="" />
          </div>
        </SplideSlide>
        </Splide>
      </div>
    </div>

  )
}

export default App
