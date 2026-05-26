import React from 'react'
import { BiError } from "react-icons/bi";
const Liked = () => {
  return (
    <div className='w-full md:w-[calc(100%-10rem)] min-h-screen bg-black text-white md:ml-40 flex items-center justify-center md:h-screen md:overflow-auto overflow-x-hidden'>
      <div className='flex items-center flex-col'>
        <BiError className='w-30 h-30' />
      <h1 className='text-3xl font-medium'>😅 I am working on it</h1>
      </div>
    </div>
  )
}

export default Liked