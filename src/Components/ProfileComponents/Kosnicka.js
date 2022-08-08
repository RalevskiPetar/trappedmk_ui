import React from 'react'

const Kosnicka = () => {
  return (
    <div className='overflow-y-scroll h-2/12'>
    <div className=' p-6 overflow-y-scroll flex flex-col border-b-[0.1rem] border-b-slate-200 justify-center items-center'>
       <img  src='http://localhost:3000/img/bluza.png' className='w-40' />
       <h1 className='font-poppins '>ИМЕ : "No Face , No Case"</h1>
       <h1 className='font-poppins '>ЦЕНА : 1299.00 ден</h1>
       <h1 className='font-poppins text-blue-400 font-bold'>СТАТУС : кошничка</h1>
       <h1 className='font-bold font-poppins border-[0.1rem] p-1 rounded-xl pl-4 pr-4'>ORDER NOW</h1>



    </div>
    <div className=' p-6 overflow-y-scroll flex flex-col border-b-[0.1rem] border-b-slate-200 justify-center items-center'>
       <img  src='http://localhost:3000/img/bluzadva.png' className='w-40' />
       <h1 className='font-poppins '>ИМЕ : "No Face , No Case"</h1>
       <h1 className='font-poppins '>ЦЕНА : 1299.00 ден</h1>
       <h1 className='font-poppins text-blue-400 font-bold'>СТАТУС : кошничка</h1>
       <h1 className='font-bold font-poppins border-[0.1rem] p-1 rounded-xl pl-4 pr-4'>ORDER NOW</h1>


    </div>
    </div>
  )
}

export default Kosnicka