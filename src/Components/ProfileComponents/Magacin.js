import React, { useState } from 'react'
import { BsCircle, BsCircleFill } from 'react-icons/bs'

const Magacin = () => {
  const [ expanded , setExpanded] = useState(false)
  const [ createProduct , setCreateProduct ] = useState(false)
  const [ clicked , setClicked ] = useState(3)
  return (
    <div>
      <h1 onClick={e=> setCreateProduct(!createProduct)} className='font-poppins text-center font-bold p-2 cursor-pointer'>• CREATE PRODUCT •</h1>
      {createProduct == true ? 
      <div className='flex flex-col items-center gap-2 p-2'>
       <input className='font-poppins border-[0.1rem] outline-none border-slate-100 p-2 text-center w-1/4' type="text" placeholder="NAME"/>
       <input className='font-poppins border-[0.1rem] outline-none border-slate-100 p-2 text-center w-1/4' type="text" placeholder="DESCRIPTION"/>
       <input className='font-poppins border-[0.1rem] outline-none border-slate-100 p-2 text-center w-1/4' type="text" placeholder="PRICE"/>
       <input className='font-poppins border-[0.1rem] outline-none border-slate-100 p-2 text-center w-1/4' type="text" placeholder="SIZE"/>
       <input className='font-poppins border-[0.1rem] outline-none border-slate-100 p-2 text-center w-1/4' type="text" placeholder="NUMBER OF PRODUCTS"/>
       <button className='font-poppins bg-black text-white  pl-4 pr-4 p-2 rounded-sm'>CREATE PRODUCT</button>
      </div> 
      : null}
      <h1 onClick={e => setExpanded(!expanded)} className='font-poppins border-t-[0.1rem] border-b-[0.1rem] cursor-pointer text-center font-bold p-2'>• FILTER •</h1>
         {expanded == true ? 
         <div >
          <ul className='font-poppins p-4 animate-fade-in-down '>
            <li onClick={e => setClicked(1)} className='flex flex-row gap-2 items-center lg:justify-center'>
              {clicked == 1 ? <BsCircleFill /> : <BsCircle />}
              <h1>" WHO LET THE DOGS OUT? "</h1>
            </li>
            <li onClick={e => setClicked(2)} className='flex flex-row gap-2 items-center lg:justify-center'>
            {clicked == 2 ? <BsCircleFill /> : <BsCircle />}
              <h1>"  LOS ANGELES  "</h1>
            </li>
            <li onClick={e => setClicked(3)} className='flex flex-row gap-2 items-center lg:justify-center'>
            {clicked == 3 ? <BsCircleFill /> : <BsCircle />}
              <h1>"  NO FACE , NO CASE  "</h1>
            </li>
            <li onClick={e => setClicked(4)} className='flex flex-row gap-2 items-center lg:justify-center'>
            {clicked == 4 ? <BsCircleFill /> : <BsCircle />}
              <h1>" DRAGONS"</h1>
            </li>
            <li onClick={e => setClicked(5)} className='flex flex-row gap-2 items-center lg:justify-center'>
            {clicked == 5 ? <BsCircleFill /> : <BsCircle />}
              <h1>" MAKE MONEY NOT FRIENDS "</h1>
            </li>
           
        
    
          </ul>
         </div> 
         : null}
       <div className=' p-6 overflow-x-scroll flex flex-col border-b-[0.1rem] border-b-slate-200 justify-center items-center'>
           <img  src='http://localhost:3000/img/bluzadva.png' className='w-20 lg:w-40' />
           <h1 className='font-poppins lg:font-bold'>"No Face , No Case"</h1>
           <h1 className='font-poppins text-red-400 font-bold '>SMALL</h1>
           <h1 className='font-poppins'>Available[ 48 ]</h1>
           <h1 className='font-poppins'>Already Sold[ 13 ]</h1>
           <h1 className='font-poppins'>Pending[ 23 ]</h1>
        </div>
        <div className=' p-6 overflow-x-scroll flex flex-col border-b-[0.1rem] border-b-slate-200 justify-center items-center'>
           <img  src='http://localhost:3000/img/bluzadva.png' className='w-20 lg:w-40' />
           <h1 className='font-poppins  lg:font-bold'>"No Face , No Case"</h1>
           <h1 className='font-poppins text-red-400 font-bold '>MEDIUM</h1>
           <h1 className='font-poppins'>Available [ 32 ]</h1>
           <h1 className='font-poppins'>Already Sold [ 28 ]</h1>
           <h1 className='font-poppins'>Pending [ 2 ]</h1>
        </div>
        <div className=' p-6 overflow-x-scroll flex flex-col border-b-[0.1rem] border-b-slate-200 justify-center items-center'>
           <img  src='http://localhost:3000/img/bluzadva.png' className='w-20 lg:w-40' />
           <h1 className='font-poppins lg:font-bold '>"No Face , No Case"</h1>
           <h1 className='font-poppins text-red-400 font-bold '>LARGE</h1>
           <h1 className='font-poppins'>Available[ 12 ]</h1>
           <h1 className='font-poppins'>Already Sold[ 38 ]</h1>
           <h1 className='font-poppins'>Pending[ 10 ]</h1>
        </div>
        <div className=' p-6 overflow-x-scroll flex flex-col border-b-[0.1rem] border-b-slate-200 justify-center items-center'>
           <img  src='http://localhost:3000/img/bluzadva.png' className='w-20 lg:w-40' />
           <h1 className='font-poppins lg:font-bold '>"No Face , No Case"</h1>
           <h1 className='font-poppins text-red-400 font-bold '>EXTRA-LARGE</h1>
           <h1 className='font-poppins'>Available[ 10 ]</h1>
           <h1 className='font-poppins'>Already Sold[ 3 ]</h1>
           <h1 className='font-poppins'>Pending[ 1 ]</h1>
        </div>
        
    </div>
  )
}

export default Magacin