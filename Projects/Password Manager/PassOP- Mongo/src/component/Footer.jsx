import React from 'react'

const footer = () => {
    return (
        <>
            <footer className='bg-slate-800 text-white flex flex-col items-center justify-center w-full'>
                <div className="logo font-bold text-2xl">
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>OP/&gt;</span>
                </div>
                <div className='flex justify-center items-center'>
                    Created with <img className='w-7 mx-2' src="icons/heart.png" alt="" /> By Shaurya
                </div>
            </footer>
        </>
    )
}

export default footer
