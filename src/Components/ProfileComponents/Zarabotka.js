import React, { useState } from 'react'
import DodajSuma from './DodajSuma'
import Meseci from './Meseci'

const Zarabotka = () => {
  const [ expanded , setExpanded ] = useState(false)
  const [ calendar , setCalendar ] = useState(false)
  return (
<div className='flex flex-col'>
  <h1 onClick={e => setCalendar(true)} className='font-poppins text-center p-2 bg-slate-100 shadow-md cursor-pointer'>IZBERI MESEC</h1>
  {calendar == true ? <Meseci setCalendar={setCalendar} /> : null}
<div className='flex flex-row  '>
      <div className='h-1/2 w-1/2 border-r-[0.0rem] border-slate-200'>
        <h1 className='font-poppins text-center text-red-500 lg:text-2xl border-[0.1rem] border-2-slate-200 font-bold p-4'>ODLIV</h1>
        <div className='flex flex-col justify-center '>

          <div className='flex flex-row justify-between border-b-[0.03rem] border-r-[0.03rem] border-r-slate-200 border-b-slate-200 p-2'>
            <h1 className='font-poppins text-red-400 font-bold'>340 DEN.</h1>
            <h1 className='font-poppins'>21/06/2021</h1>
            <h1 className='font-poppins'>poster</h1>
          </div>
          <div className='flex flex-row justify-between border-[0.03rem] border-slate-200 p-2'>
            <h1 className='font-poppins text-red-400 font-bold'>340 DEN.</h1>
            <h1 className='font-poppins hidden'>21/06/2021</h1>
            <h1 className='font-poppins'>poster</h1>
          </div>
          <div className='flex flex-row justify-between border-[0.03rem] border-slate-200 p-2'>
            <h1 className='font-poppins text-red-400 font-bold'>340 DEN.</h1>
            <h1 className='font-poppins'>21/06/2021</h1>
            <h1 className='font-poppins'>poster</h1>
          </div>
          <div className='flex flex-row justify-between border-[0.03rem] border-slate-200 p-2'>
            <h1 className='font-poppins text-red-400 font-bold'>340 DEN.</h1>
            <h1 className='font-poppins'>21/06/2021</h1>
            <h1 className='font-poppins'>poster</h1>
          </div>
          <div className='flex flex-row justify-between border-[0.03rem] border-slate-200 p-2'>
            <h1 className='font-poppins text-red-400 font-bold'>340 DEN.</h1>
            <h1 className='font-poppins'>21/06/2021</h1>
            <h1 className='font-poppins'>poster</h1>
          </div>
          <div className='flex flex-row justify-between border-[0.03rem] border-slate-200 p-2'>
            <h1 className='font-poppins text-red-400 font-bold'>340 DEN.</h1>
            <h1 className='font-poppins'>21/06/2021</h1>
            <h1 className='font-poppins'>poster</h1>
          </div>
          <div className='flex flex-row justify-between border-[0.03rem] border-slate-200 p-2'>
            <h1 className='font-poppins text-red-400 font-bold'>340 DEN.</h1>
            <h1 className='font-poppins'>21/06/2021</h1>
            <h1 className='font-poppins'>poster</h1>
          </div>
          <div className='flex flex-row justify-between border-[0.03rem] border-slate-200 p-2'>
            <h1 className='font-poppins text-red-400 font-bold'>340 DEN.</h1>
            <h1 className='font-poppins'>21/06/2021</h1>
            <h1 className='font-poppins'>poster</h1>
          </div>
          <div className='flex flex-row justify-between border-[0.03rem] border-slate-200 p-2'>
            <h1 className='font-poppins text-red-400 font-bold'>340 DEN.</h1>
            <h1 className='font-poppins'>21/06/2021</h1>
            <h1 className='font-poppins'>poster</h1>
          </div>
          <div className='flex flex-row justify-between border-[0.03rem] border-slate-200 p-2'>
            <h1 className='font-poppins text-red-400 font-bold'>340 DEN.</h1>
            <h1 className='font-poppins'>21/06/2021</h1>
            <h1 className='font-poppins'>poster</h1>
          </div>
          <div className='flex flex-row justify-between border-[0.03rem] border-slate-200 p-2'>
            <h1 className='font-poppins text-red-400 font-bold'>340 DEN.</h1>
            <h1 className='font-poppins'>21/06/2021</h1>
            <h1 className='font-poppins'>poster</h1>
          </div>
        </div>

      </div>
      <div className='h-1/2 w-1/2 border-r-[0.03rem] border-slate-200'>
        <h1 className='font-poppins text-center text-green-400 font-bold lg:text-2xl p-4 border-[0.1rem] border-2-slate-200'>PRILIV</h1>
        <div className='flex flex-col justify-center '>

          <div className='flex flex-row justify-between border-b-[0.03rem] border-l-[0.03rem] border-l-slate-200 border-b-slate-200 p-2'>
            <h1 className='font-poppins text-green-400 font-bold'>340 DEN.</h1>
            <h1 className='font-poppins'>21/06/2021</h1>
            <h1 className='font-poppins'>poster</h1>
          </div>
          <div className='flex flex-row justify-between border-[0.03rem] border-slate-200 p-2'>
            <h1 className='font-poppins text-green-400 font-bold'>340 DEN.</h1>
            <h1 className='font-poppins'>21/06/2021</h1>
            <h1 className='font-poppins'>poster</h1>
          </div>
          <div className='flex flex-row justify-between border-[0.03rem] border-slate-200 p-2'>
            <h1 className='font-poppins text-green-400 font-bold'>340 DEN.</h1>
            <h1 className='font-poppins'>21/06/2021</h1>
            <h1 className='font-poppins'>poster</h1>
          </div>
          <div className='flex flex-row justify-between border-[0.03rem] border-slate-200 p-2'>
            <h1 className='font-poppins text-green-400 font-bold'>340 DEN.</h1>
            <h1 className='font-poppins'>21/06/2021</h1>
            <h1 className='font-poppins'>poster</h1>
          </div>
          <div className='flex flex-row justify-between border-[0.03rem] border-slate-200 p-2'>
            <h1 className='font-poppins text-green-400 font-bold'>340 DEN.</h1>
            <h1 className='font-poppins'>21/06/2021</h1>
            <h1 className='font-poppins'>poster</h1>
          </div>
          <div className='flex flex-row justify-between border-[0.03rem] border-slate-200 p-2'>
            <h1 className='font-poppins text-green-400 font-bold'>340 DEN.</h1>
            <h1 className='font-poppins'>21/06/2021</h1>
            <h1 className='font-poppins'>poster</h1>
          </div>
          <div className='flex flex-row justify-between border-[0.03rem] border-slate-200 p-2'>
            <h1 className='font-poppins text-green-400 font-bold'>340 DEN.</h1>
            <h1 className='font-poppins'>21/06/2021</h1>
            <h1 className='font-poppins'>poster</h1>
          </div>
          <div className='flex flex-row justify-between border-[0.03rem] border-slate-200 p-2'>
            <h1 className='font-poppins text-green-400 font-bold'>340 DEN.</h1>
            <h1 className='font-poppins'>21/06/2021</h1>
            <h1 className='font-poppins'>poster</h1>
          </div>
          <div className='flex flex-row justify-between border-[0.03rem] border-slate-200 p-2'>
            <h1 className='font-poppins text-green-400 font-bold'>340 DEN.</h1>
            <h1 className='font-poppins'>21/06/2021</h1>
            <h1 className='font-poppins'>poster</h1>
          </div>
          <div className='flex flex-row justify-between border-[0.03rem] border-slate-200 p-2'>
            <h1 className='font-poppins text-green-400 font-bold'>340 DEN.</h1>
            <h1 className='font-poppins'>21/06/2021</h1>
            <h1 className='font-poppins'>poster</h1>
          </div>
          <div className='flex flex-row justify-between border-[0.03rem] border-slate-200 p-2'>
            <h1 className='font-poppins text-green-400 font-bold'>340 DEN.</h1>
            <h1 className='font-poppins'>21/06/2021</h1>
            <h1 className='font-poppins'>poster</h1>
          </div>
          
          
        </div>

      </div>
      
    </div>
    <button className='font-poppins bg-slate-50 p-2 shadow-md ' onClick={e => setExpanded(!expanded)}>DODAJ SUMA</button>
    {expanded == true ? <DodajSuma  setExpanded={setExpanded}/> : null}
    <div className='p-4 flex flex-row'>
     <div className='w-1/2'>
       <h1 className='font-poppins border-b-[0.1rem] border-slate-200 p-2'>ODLIV</h1>
       <h1 className='font-poppins border-b-[0.1rem] border-slate-200 p-2'>PRILIV</h1>
       <h1 className='font-poppins border-b-[0.1rem] border-slate-200 p-2'>ZARABOTKA</h1>
       <h1 className='font-poppins border-b-[0.1rem] border-slate-200 p-2'>MESEC</h1>

     </div>
     <div className='w-1/2'>
       <h1 className='border-b-[0.1rem] border-slate-200 p-2 text-end font-poppins text-red-500'>41.000 DEN.</h1>
       <h1 className='border-b-[0.1rem] border-slate-200 p-2 text-end font-poppins text-green-400'>78.000 DEN.</h1>
       <h1 className='border-b-[0.1rem] border-slate-200 p-2 text-end font-poppins'>37.000 DEN.</h1>
       <h1 className='border-b-[0.1rem] border-slate-200 p-2 text-end font-poppins'>JUNI</h1>
     </div>
  </div>
</div>
  )
}

export default Zarabotka

/*
<h1 className="font-poppins text-center">ODLIV - [ 41.000 DEN. ]</h1>
    <h1 className="font-poppins text-center">PRILIV - [ 78.000 DEN. ]</h1>
    <h1 className="font-poppins text-center">ZARABOTKA - [ 37.000 DEN. ]</h1>
    <h1 className="font-poppins text-center">MESEC - [ JUNI ]</h1> */