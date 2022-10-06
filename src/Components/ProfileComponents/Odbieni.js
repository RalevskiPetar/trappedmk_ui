import React from 'react'

const Odbieni = () => {
  return (
    <div className='overflow-y-scroll h-2/12 lg:grid lg:grid-cols-4'>
        <div className=' p-6 flex flex-col border-b-[0.1rem] lg:border-r-[0.1rem]  lg:border-r-slate-200 border-b-slate-200 justify-center items-center'>
           <img  src='http://localhost:3000/img/bluza.png' className='w-40' />
           <h1 className='font-poppins '>ИМЕ : "No Face , No Case"</h1>
           <h1 className='font-poppins text-red-400 font-bold '>СТАТУС : OUT OF STOCK</h1>
           <h1 className='font-poppins pt-2'>ЗАБЕЛЕШКА</h1>
           <h1 className='font-poppins '>"Во моментот не работиме обидете се подоцна"</h1>
          


        </div>
        
        </div>
  )
}

export default Odbieni