import React from 'react'

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className=" max-h-[500px] relative">
        {/* overlay  */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <div className="flex flex-col items-center justify-center text-center whitespace-nowrap">
            <h1 className="p-4 text-2xl sm:text-4xl md:5xl lg:text-6xl font-bold">
              Chakula
              <span className="text-orange-600"> Tamu</span>
            </h1>
            <h1 className="p-4 text-2xl sm:text-4xl md:5xl lg:text-6xl font-bold text-block">
              Delivered{' '}
              <span className="text-orange-600 font-normal">
                right at your{' '}  
              </span>
              Door
            </h1>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="food"
          className='w-full max-h-[500px] object-cover'
        />
      </div>
    </div>
  )
}

export default Hero
