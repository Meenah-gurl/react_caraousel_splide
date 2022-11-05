import React from 'react'

export const App = () => {
  return (
   <div className='py-10'>
      <div className=' text-white font-serif max-w-6xl mx-auto py-2'>
         <div className='grid md:grid-cols-2 gap-20 grid-cols-1'>
          {/* first grid */}

          <div className='p-4 '>
              <div >
                  <img src="/src/assets/black_hoodie_front.webp" alt="no image" />
              </div>
          </div>

          {/* second grid */}

          <div className=''>
              <div className='flex md:flex-col flex-col space-y-7 justify-center'>
                <div className='text-black space-y-3'>
                  <h2 className='font-bold text-xl text-black'>Medusa Hoodie</h2>
                  <p className='text-sm'>Reimagine the feeling of a classic hoodie. With our cotton hoodie, everyday essentials no longer have to be ordinary.</p>
                </div>

                <div className='space-y-3'>
                  <div className='font-bold text-md text-black'>Select Size</div>
                  <div className='flex flex-row gap-4'>
                      <div className='border-2 border-gray-100  flex justify-center py-3 px-5'>
                          <span className=' text-black text-sm'>S</span>
                      </div>

                      <div className='border-2 border-gray-100  flex justify-center py-3 px-5'>
                          <span className=' text-black text-sm'>M</span>
                      </div>

                      <div className='border-2 border-gray-100  flex justify-center py-3 px-5'>
                          <span className=' text-black text-sm'>L</span>
                      </div>

                      <div className='border-2 border-gray-100  flex justify-center py-3 px-5'>
                          <span className=' text-black text-sm'>XL</span>
                      </div>
                  </div>
                </div>


                <div>
                  <div className='flex flex-col space-y-3'>
                    <div>
                      <span className='text-gray-700 text-2xl font-san'>&euro; 36.50</span>
                    </div>

                    <div className='bg-gray-900 text-white w-full text-sm font-semibold py-3 flex justify-center cursor pointer hover:bg-white hover:border hover:border-gray-900 hover:text-black '>
                        ADD TO CART
                    </div>
                  </div>
                </div>

                <div className='space-y-4'>
                  <div className='flex flex-row gap-4'>
                    <div className='text-black text-sm border-b border-black cursor-pointer'>
                      PRODUCT INFORMATION
                    </div>
                    <div className='text-black text-sm  cursor-pointer'>
                      SHIPPING & RETURNS
                    </div>
                  </div>

                  <div className='grid grid-cols-2 gap-8 text-black'>
                    <div className='flex flex-col space-y-3'>
                      <div className='space-y-1'>
                        <h3 className='text-sm text-black'>Material</h3>
                        <p className='text-sm'>--</p>
                      </div>

                      <div className='space-y-1'>
                        <h3 className='text-sm text-black'>Country of Origin</h3>
                        <p className='text-sm'>--</p>
                      </div>

                      <div className='space-y-1'>
                        <h3 className='text-sm text-black'>Type</h3>
                        <p className='text-sm'>--</p>
                      </div>
                    </div>

                    <div className='flex flex-col space-y-3'>
                      <div className='space-y-1'>
                        <h3 className='text-sm text-black'>Weight</h3>
                        <p className='text-sm'>450 g</p>
                      </div>

                      <div className='space-y-1'>
                        <h3 className='text-sm text-black'>Dimension</h3>
                        <p>--</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
          </div>
         </div>
      </div>
   </div>

  )
}

export default App
