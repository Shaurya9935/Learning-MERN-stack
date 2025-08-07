import React from 'react'

const navbar = () => {
  return (
    <nav className='flex justify-between bg-violet-900 text-white py-2'>
      <div className="logo">
        <span className='font-bold text-xl mx-9'>iTask</span>
      </div>
      <div className="flex gap-8 mx-9 ">
        <div className='home'>
          <a href="#" className="hover:cursor-pointer  relative group">Home
            <span className='absolute left-1/2 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0'></span>
            </a>
          </div>
          
        <div className="yourTask">
          <a href="#" className="hover:cursor-pointer  relative group">Your Task
            <span className='absolute left-1/2 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0'></span>
            </a>
        </div>
      </div>
    </nav>
  )
}

export default navbar
