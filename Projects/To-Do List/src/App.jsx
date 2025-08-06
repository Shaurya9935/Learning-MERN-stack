import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [search, setSearch] = useState("Search")

  const handlechange = (e) => {
    setName(e.target.value)
  }
  return (
    <>
      <div className="container flex mx-auto">
        <div className="first w-1/5 bg-[#f5f5f5] p-4 rounded-lg m-5 h-[94vh]">
          <div className="menu flex justify-between relative">
            <h1 className='text-3xl font-bold text-gray-700'>Menu</h1>
            <i className="material-icons">dehaze</i>
          </div>
          <div className="search flex p-5 text-gray-600">
            <i className="material-icons font-bold">search</i>
            <input className="bg-[#f5f5f5]" type="text" value={search} onChange={handlechange} />
          </div>
          <div className="sidebar">
            <h1 className='text-xl text-gray-600 font-semibold'>Tasks</h1>
            <div className="tasks text-gray-600 mx-3 p-3 space-y-3">
              <div className="upcoming flex gap-2">
                <i className="material-icons">double_arrow</i>
                <span>Upcoming</span>
              </div>
              <div className="today flex gap-2">
                <i className="material-icons">checklist</i>
                <span>Today</span>
              </div>
              <div className="calender flex gap-2">
                <i className="material-icons">calendar_month</i>
                <span>Calendar</span>
              </div>
              <div className="sticky flex gap-2">
                <i className="material-icons">sticky_note_2</i>
                <span>Sticky Wall</span>
              </div>
            </div>
            <h1 className='text-xl text-gray-600 font-semibold'>Lists</h1>
            <div className="lists text-gray-600 mx-3 p-3 space-y-3">
              <div className="personal flex gap-2 items-center">
                <div className='bg-red-500 w-4 h-4 rounded-sm'></div>
                <span>Personal</span>
              </div>
              <div className="work flex gap-2 items-center">
                <div className='bg-blue-500 w-4 h-4 rounded-sm'></div>
                <span>work</span>
              </div>
              <div className="personal flex gap-2 items-center">
                <div className='bg-yellow-500 w-4 h-4 rounded-sm'></div>
                <span>List 1</span>
              </div>
              <div className="newlist flex items-center">
                <i className="material-icons">add</i>
                <span>Add New List</span>
              </div>
            </div>
            <h1 className='text-xl text-gray-600 font-semibold'>Tags</h1>
            <div className="tags flex mx-3 p-3 gap-3 ">
              <div className="tag1 bg-red-300 rounded-md flex justify-center px-2 py-1">Tag 1</div>
              <div className="tag2  bg-blue-300 rounded-md flex justify-center px-2 py-1">Tag 2</div>
              <div className="addtag justify-center  bg-gray-300 rounded-md flex items-center px-2 py-1">
                <i className="material-icons">add</i>
                <span>Add Tag</span>
              </div>
            </div>
            {/* <div className="footer text-gray-600 space-y-2 absolute bottom-6 ">
              <div className='flex items-center gap-2'><i className="material-icons">settings</i><span>Settings</span></div>
              <div className='flex items-center gap-2'><i className="material-icons">logout</i><span>Sign Out</span></div>
            </div> */}
          </div>
        </div>
        <div className="second w-1/2 p-4 ">
        <div className="detail flex items-center gap-14">
        <h1 className='text-6xl font-bold'>Today</h1>
          <span className='text-6xl font-bold border-4 w-fit px-4'>5</span>
        </div>
        <div className="maintasks p-4 space-y-3 relative">
          <hr />
              <div className="task1 flex items-center gap-8 text-xl">
                <i className="material-icons text-gray-500">check_box_outline_blank</i>
                <span>Task 1</span>
                <i className="material-icons text-gray-500 right-5 absolute">arrow_right</i>
              </div>
            <hr />
              <div className="task2 flex items-center gap-8 text-xl">
                <i className="material-icons text-gray-500">check_box_outline_blank</i>
                <span>Task 2</span>
                <i className="material-icons text-gray-500 right-5 absolute">arrow_right</i>
              </div>
            <hr />
              <div className="task3 flex items-center gap-8 text-xl">
                <i className="material-icons text-gray-500">check_box_outline_blank</i>
                <span>Task 3</span>
                <i className="material-icons text-gray-500 right-5 absolute">arrow_right</i>
              </div>
            <hr />
              <div className="task4 flex items-center gap-8 text-xl">
                <i className="material-icons text-gray-500">check_box_outline_blank</i>
                <span>Task 4</span>
                <i className="material-icons text-gray-500 right-5 absolute">arrow_right</i>
              </div>
            <hr />
              
        </div>
        </div>
        <div className="third w-1/4 bg-[#f5f5f5] p-4 rounded-lg m-5">
            <h1 className='text-3xl text-gray-700 font-bold'>Task:</h1>
          <div className="task p-4 m-4 text-gray-600 space-y-4">
            <div className="taskName">
              Task 1
            </div>
            <hr/>
            <div className="desc h-32">
              Description
            </div>
            <div className="list flex items-center gap-20">
              <span>List</span>
              <div className="catagory flex items-center">
              <span>Personal</span>
              <i className="material-icons">arrow_drop_down</i>
              </div>
            </div>
            <div className="dueDate flex items-center gap-11">
              Due Date
              <div className="date flex items-center">
                11-03-25
                <i className="material-icons">arrow_drop_down</i>
              </div>
            </div>
            <div className="tag">
              Tags
            </div>
          </div>
          <h1 className='text-3xl text-gray-700 font-bold'>Subtasks:</h1>
          <div className="subtasks m-3 p-3 text-gray-600 space-y-3">
            <div className="newSubtask flex items-center gap-4">
              <i className="material-icons font-bold">add</i>
              <span>Add New Subtask</span>
            </div>
            <div className="subtask flex items-center gap-4">
              <i className="material-icons">check_box_outline_blank</i>
              <span>Subtask</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
