import React from 'react'

const Cards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card  */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute rounded-xl w-full h-full bg-black/50 text-white">
          <p className="font-bold text-xl px-2 pt-4">
            Sun's Out, Buy One Get One
          </p>
          <p className="px-2">Through 14/01</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className='w-full max-h-[160px] md:max-h-[200px] object-cover rounded-xl'
          src="https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="food"
        />
      </div>
        {/* card  */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute rounded-xl w-full h-full bg-black/50 text-white">
          <p className="font-bold text-xl px-2 pt-4">
            New Restaurants
          </p>
          <p className="px-2">Ensuring you have the whole variety</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className='w-full max-h-[160px] md:max-h-[200px] object-cover rounded-xl'
          src="https://images.unsplash.com/photo-1430931071372-38127bd472b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
          alt="food"
        />
      </div>
        {/* card  */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute rounded-xl w-full h-full bg-black/50 text-white">
          <p className="font-bold text-xl px-2 pt-4">
            We Deliver Desserts 
          </p>
          <p className="px-2">Don't miss your tasty treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className='w-full max-h-[160px] md:max-h-[200px] object-cover rounded-xl'
          src="https://images.unsplash.com/photo-1481391319762-47dff72954d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
          alt="food"
        />
      </div>
    </div>
  )
}

export default Cards
