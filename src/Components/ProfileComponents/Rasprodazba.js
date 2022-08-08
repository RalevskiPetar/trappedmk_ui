import React , { useState } from 'react'
import { BsCircle, BsCircleFill } from 'react-icons/bs'
const Rasprodazba = () => {
  const [ clicked , setClicked ] = useState(0)
  return (
    <div className='w-screen flex flex-col items-center mb-10'>
      <h1 className='font-poppins text-sm text-slate-400 text-center p-2'>- Одбери продукт -</h1>
      <div >
          <ul className='font-poppins p-4 animate-fade-in-down'>
            <li onClick={e => setClicked(1)} className='flex flex-row gap-2 items-center'>
              {clicked == 1 ? <BsCircleFill /> : <BsCircle />}
              <h1>" WHO LET THE DOGS OUT? "</h1>
            </li>
            <li onClick={e => setClicked(2)} className='flex flex-row gap-2 items-center'>
            {clicked == 2 ? <BsCircleFill /> : <BsCircle />}
              <h1>"  LOS ANGELES  "</h1>
            </li>
            <li onClick={e => setClicked(3)} className='flex flex-row gap-2 items-center'>
            {clicked == 3 ? <BsCircleFill /> : <BsCircle />}
              <h1>"  NO FACE , NO CASE  "</h1>
            </li>
            <li onClick={e => setClicked(4)} className='flex flex-row gap-2 items-center'>
            {clicked == 4 ? <BsCircleFill /> : <BsCircle />}
              <h1>" DRAGONS"</h1>
            </li>
            <li onClick={e => setClicked(5)} className='flex flex-row gap-2 items-center'>
            {clicked == 5 ? <BsCircleFill /> : <BsCircle />}
              <h1>" MAKE MONEY NOT FRIENDS "</h1>
            </li>
           
        
    
          </ul>
          <h1 className='font-poppins text-sm text-slate-400 text-center p-2'>- Постави попуст на веќе избраниот продукт -</h1>
         </div> 
          <div className='flex flex-col gap-2 items-center w-screen'>
          <input className='font-poppins bg-slate-100 w-2/3 p-2  ' type="text" placeholder="процент" />
          <button className='font-poppins bg-zinc-900 text-white p-2 pl-4 pr-4 rounded-md '>add</button>
          </div>
          <h1 className='font-poppins p-4 text-sm text-slate-400 '> - Постави продукт на попуст во даден опсег - </h1>
          <h1>Од количина на блуза</h1>
          <input type="text" className="font-poppins bg-slate-100 w-2/3 p-2 " placeholder="број" />
          <h1>До количина на блуза</h1>
          <input type="text" className="font-poppins bg-slate-100 w-2/3 p-2 " placeholder="број" />
          <h1>процент</h1>
         <div className='flex flex-col gap-2 items-center w-screen'>
         <input type="text" className="font-poppins bg-slate-100 w-2/3 p-2" placeholder="процент" />
          <button className='font-poppins bg-zinc-900 text-white p-2 pl-4 pr-4 rounded-md '>add</button>
         </div>
    </div>
  )
}

export default Rasprodazba