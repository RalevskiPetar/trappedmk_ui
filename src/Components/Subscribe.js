import React from 'react'
import { AiOutlineFacebook , AiOutlineInstagram  } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'

const Subscribe = () => {
  return (
    <div className='flex flex-col items-center gap-4 mt-8'>
        <div className='flex flex-row justify-center '>
        <input type="text" placeholder="email" className='outline-none border-2 border-gray-200 font-poppins p-1 rounded-l-sm bg-slate-50' />
        <button className='font-poppins bg-zinc-900 text-white p-1 text-sm rounded-r-sm'>SUBSCRIBE</button>

    </div>
    <div className='flex flex-row gap-4 items-center mb-10 p-2'>
            <a className='border-[0.1rem] lg:hover:bg-black lg:hover:text-white border-black rounded-full p-2 text-black lg:text-2xl  lg:border-white lg:hover:border-black lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1 lg:hover:scale-110' href='https://www.instagram.com/trappedmk/?hl=en'> <AiOutlineFacebook  className='lg:text-white lg:p-[0.16rem]'/> </a>
                <a className='border-[0.1rem] lg:hover:bg-black lg:hover:text-white border-black rounded-full p-2 lg:text-2xl text-black lg:border-white lg:hover:border-black lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1 lg:hover:scale-110' href='https://www.instagram.com/trappedmk/?hl=en'><AiOutlineInstagram className='lg:text-white lg:p-[0.16rem]'   /></a>
                <a className='border-[0.1rem] lg:hover:bg-black lg:hover:text-white border-black rounded-full p-2 text-black lg:text-2xl lg:border-white lg:hover:border-black lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1 lg:hover:scale-110' href='https://www.instagram.com/trappedmk/?hl=en'>   <FiTwitter className='lg:text-white lg:p-[0.16rem]'   /></a>
            </div>
    </div>
  )
}

export default Subscribe