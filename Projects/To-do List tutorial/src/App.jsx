import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className="w-full max-w-7xl mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addtodo my-5">
          <h2 className='font-bold text-lg'>Add a Todo</h2>
          <input type="text" className='w-1/2'/>
          <button className='bg-violet-800 hover:bg-violet-950 p-2 py-1 rounded-md mx-6 text-sm font-bold text-white'>Add</button>
        </div>
        <h2 className='text-lg font-bold'>Your Todo</h2>
        <div className="todos">
          <div className="todo flex">
            <div className="text"> Lorem ipsum, dolor sit amet consectetur adipisicing.</div>
            <div className="buttons">
              <button className='bg-violet-800 hover:bg-violet-950 p-2 py-1 rounded-md mx-1 text-sm font-bold text-white'>Edit</button>
              <button className='bg-violet-800 hover:bg-violet-950 p-2 py-1 rounded-md mx-1 text-sm font-bold text-white'>Delete</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
