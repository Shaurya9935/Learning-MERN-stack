"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';

const Generate = () => {

  const searchParams = useSearchParams();

  // const [link, setlink] = useState("")
  // const [linktext, setlinktext] = useState("")
  const [links, setLinks] = useState([{ link: "", linktext: "" }])
  const [handle, sethandle] = useState(searchParams.get("handle"))
  const [pic, setpic] = useState("")
  const [desc, setdesc] = useState("")

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks)=>{
      return initialLinks.map((item, i)=>{
        if(i==index){
          return {link, linktext}
        }
        else{
          return item;
        }
      })
    })
  }

  const addLink = () => {
    setLinks(links.concat([{link:"", linktext:""}]))
  }
  

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "links": links,
      "handle": handle,
      "pic": pic,
      "desc": desc
    });

    console.log(raw)

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const r = await fetch("http://localhost:3000/api/add", requestOptions)
    const result = await r.json()
    if(result.success){
    toast.success(result.message)
    setLinks([{ link: "", linktext: "" }])
    setpic("")
    sethandle("")
    setdesc("")
    }
    else{
      toast.error(result.message)
    }
  }
  return (
    <div className='bg-[#E9C0E9] min-h-screen grid grid-cols-2 '>

      <div className="col1 flex items-center justify-center flex-col gap-4 text-gray-900">
        <div className='flex flex-col gap-5'>
          <h1 className='font-bold text-4xl'>Create Your Bittree</h1>
          <div className="item">
            <h2 className='font-semibold text-2xl'>Step 1: Claim your handles</h2>
            <div className='mx-4'>
              <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} type="text" className='bg-white rounded-full py-2 px-4 focus:outline-pink-500 w-56' placeholder='Choose a Handle' />
            </div>
          </div>
          <div className="item flex flex-col gap-2 ">
            <h2 className='font-semibold text-2xl'>Step 2: Add your links</h2>
            {links && links.map((item, index) => {
              return <div key={index} className='mx-4 flex gap-2'>
                <input value={item.linktext || ""} onChange={e => { handleChange(index, item.link, e.target.value) }} type="text" className='bg-white rounded-full py-2 px-4 focus:outline-pink-500 w-56' placeholder='Enter Link Text' />
                <input value={item.link || ""} onChange={e => { handleChange( index, e.target.value, item.linktext) }} type="text" className='bg-white rounded-full py-2 px-4 focus:outline-pink-500 w-56' placeholder='Enter Link' />
              </div>
            })
            }
            <button onClick={() => { addLink() }} className='px-5 py-2 mx-2 bg-slate-900 text-white rounded-full font-semibold w-fit'>+ Add Link</button>
          </div>
          <div className="item">
            <h2 className='font-semibold text-2xl'>Step 3: Add picture and finalize</h2>
            <div className='mx-4 flex flex-col '>
              <input value={pic || ""} onChange={e => { setpic(e.target.value) }} type="text" className='bg-white rounded-full py-2 px-4 mx-2 my-2 focus:outline-pink-500' placeholder='Enter Link to your picture' />
              <input value={desc || ""} onChange={e => { setdesc(e.target.value) }} type="text" className='bg-white rounded-full py-2 px-4 mx-2 my-2 focus:outline-pink-500' placeholder='Enter Description' />
              <button disabled={pic == "" || handle == "" || links[0].linktext == ""} onClick={()=>{submitLinks()}} className=' disabled:bg-slate-500 px-5 py-2 mx-2 w-fit my-5 bg-slate-900 text-white rounded-full font-semibold'>Create your BitLink</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col2 w-full h-screen bg-[#E9C0E9]">
        <img className='h-full object-contain' src="/generate.png" alt="Generate your links" />
      </div>
      <ToastContainer />
    </div>
  )
}

export default Generate
