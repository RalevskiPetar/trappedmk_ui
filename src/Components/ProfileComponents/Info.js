import React , { useState } from 'react'

const Info = () => {
  const [ expanded , setExpanded ] = useState(false)
  return (
    <div>
 
      <div onClick={e => setExpanded(!expanded)} className='flex flex-col border-[0.1rem] border-slate-200 p-4'>
      <h1 className='font-poppins text-lg text-center text-red-500 font-bold'>NEW SHIRT </h1>
      <h1 className='text-center text-xl font-bold text-slate-400 font-poppins'>" YOU ONLY LIVE ONCE "</h1>
      <h1 className='text-end text-sm font-bold text-red-500 font-poppins'>DROP DATE</h1>
      <h1 className='text-end font-bold text-slate-400 font-poppins'>20/07/2001</h1>
      {expanded == true ? 
      <div className='flex flex-col justify-center items-center animate-fade-in-down'>
      <h1 className='font-poppins '>name: "YOU ONLY LIVE ONCE"</h1>
      <h1 className='font-poppins '>price: 1299den</h1>
      <h1 className='font-poppins '>description: "Info info info info ..."</h1>
      <h1 className='font-poppins '>date: 12/03/2022</h1>
      <h1 className='font-poppins '>available: 50 </h1>
      <h1 className='font-poppins '>edition: Limited Edition</h1>
      </div> : null}
      </div>
      
      <div className='flex flex-col border-[0.1rem] border-slate-200 p-4'>
      <h1 className='font-poppins text-center text-red-500 font-bold'>NEW SHIRT</h1>
      <h1 className='text-center text-xl font-bold text-slate-400 font-poppins'>" NO FACE , NO CASE "</h1>
      <h1 className='text-end text-sm font-bold text-red-500 font-poppins'>DROP DATE</h1>
      <h1 className='text-end font-bold text-slate-400 font-poppins'>20/07/2001</h1>
      </div>
      <div className='flex flex-col border-[0.1rem] border-slate-200 p-4'>
      <h1 className='font-poppins text-center text-red-500 font-bold'>NEW SHIRT</h1>
      <h1 className='text-center text-xl font-bold text-slate-400 font-poppins'>" MAKE MONEY NOT FRIENDS "</h1>
      <h1 className='text-end text-sm font-bold text-red-500 font-poppins'>DROP DATE</h1>
      <h1 className='text-end font-bold text-slate-400 font-poppins'>20/07/2001</h1>
      </div>
      <div className='flex flex-col border-[0.1rem] border-slate-200 p-4'>
      <h1 className='font-poppins text-center text-red-500 font-bold'>NEW SHIRT</h1>
      <h1 className='text-center text-xl font-bold text-slate-400 font-poppins'>" LOS ANGELES "</h1>
      <h1 className='text-end text-sm font-bold text-red-500 font-poppins'>DROP DATE</h1>
      <h1 className='text-end font-bold text-slate-400 font-poppins'>20/07/2001</h1>
      </div>
      <div className='flex flex-col border-[0.1rem] border-slate-200 p-4'>
      <h1 className='font-poppins text-center text-red-500 font-bold'>NEW SHIRT</h1>
      <h1 className='text-center text-xl font-bold text-slate-400 font-poppins'>" NEW YORK "</h1>
      <h1 className='text-end text-sm font-bold text-red-500 font-poppins'>DROP DATE</h1>
      <h1 className='text-end font-bold text-slate-400 font-poppins'>20/07/2001</h1>
      </div>
      <div className='flex flex-col border-[0.1rem] border-slate-200 p-4'>
      <h1 className='font-poppins text-center text-red-500 font-bold'>NEW SHIRT</h1>
      <h1 className='text-center text-xl font-bold text-slate-400 font-poppins'>" DRAGONS "</h1>
      <h1 className='text-end text-sm font-bold text-red-500 font-poppins'>DROP DATE</h1>
      <h1 className='text-end font-bold text-slate-400 font-poppins'>20/07/2001</h1>
      </div>
      <div className='flex flex-col border-[0.1rem] border-slate-200 p-4'>
      <h1 className='font-poppins text-center text-red-500 font-bold'>NEW SHIRT</h1>
      <h1 className='text-center text-xl2 font-bold text-slate-400 font-poppins'>" WHO LET THE DOGS OUT? "</h1>
      <h1 className='text-end text-sm font-bold text-red-500 font-poppins'>DROP DATE</h1>
      <h1 className='text-end font-bold text-slate-400 font-poppins'>20/07/2001</h1>
      </div>
    </div>
  )
}

export default Info