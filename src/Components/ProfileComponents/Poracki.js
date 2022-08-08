import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { BsCircle, BsCircleFill } from 'react-icons/bs'

const Poracki = (props) => {
   const user = useSelector(state => state?.user)
   const [ expanded , setExpanded ] = useState(false)
   const [ selected , setSelected ] = useState(false)
   const [ clicked , setClicked ] = useState(1)
  return (
   <div className='lg:bg-opacity-40 lg:bg-white lg:bg-backdrop-blur-md lg:drop-shadow-lg'>
    <h1 onClick={e => setExpanded(!expanded)} className='font-poppins text-slate-400 text-center border-[0.1rem] p-2 font-bold'>- FILTER -</h1>
         {expanded == true ? 
         <div >
          <ul className='font-poppins p-4 animate-fade-in-down '>
            <li onClick={e => setSelected(1)} className='flex flex-row gap-2 items-center lg:justify-center '>
              {selected == 1 ? <BsCircleFill /> : <BsCircle />}
              <h1> NEWEST</h1>
            </li>
            <li onClick={e => setSelected(2)} className='flex flex-row gap-2 items-center lg:justify-center'>
            {selected == 2 ? <BsCircleFill /> : <BsCircle />}
              <h1>  LATEST</h1>
            </li>
            <li onClick={e => setSelected(4)} className='flex flex-row gap-2 items-center lg:justify-center'>
            {selected == 4 ? <BsCircleFill /> : <BsCircle />}
              <h1> A - W </h1>
            </li>
    
          </ul>
         </div> 
         : null}
     <div className='overflow-y-scroll h-2/12 lg:grid lg:grid-cols-4'>
      
        {props.numPoracki == 0 ? <h1 className='font-poppins text-red-400 text-center font-bold p-2'>- во моментот нема порачки -</h1> :
        <div className=' p-6 overflow-y-scroll flex flex-col border-b-[0.1rem] border-b-slate-200 lg:border-r-[0.1rem] lg:border-r-slate-200 justify-center  items-center'>
        {user.user.data.user.usertype_id == 1 ? <h1 className='font-poppins'>ORDER NUMBER - [2023]</h1> : null}
           <img  src='http://localhost:3000/img/bluza.png' className='w-40' />
           <h1 className='font-poppins '>ИМЕ : "No Face , No Case"</h1>
           <h1 className='font-poppins '>ЦЕНА : 1299.00 ден</h1>
           <h1 className='font-poppins text-yellow-500 font-bold'>СТАТУС</h1>
           {user.user.data.user.usertype_id == 1 ? 
           <ul className='font-poppins p-4 animate-fade-in-down'>
           <li onClick={e => setClicked(1)} className='flex flex-row gap-2 items-center'>
             {clicked == 1 ? <BsCircleFill /> : <BsCircle />}
             <h1>" ВО ТЕК"</h1>
           </li>
           <li onClick={e => setClicked(2)} className='flex flex-row gap-2 items-center'>
           {clicked == 2 ? <BsCircleFill /> : <BsCircle />}
             <h1>"  ИСПОРАЧАН  "</h1>
           </li>
           <li onClick={e => setClicked(3)} className='flex flex-row gap-2 items-center'>
           {clicked == 3 ? <BsCircleFill /> : <BsCircle />}
             <h1 className=''>"  ОДБИЕН  "</h1>
           </li>
         </ul> : <h1 className='font-poppins'>" ВО ТЕК "</h1>}
           {user.user.data.user.usertype_id == 2 ? <h1 className='font-poppins'>13:45 12/12/2022</h1> : null}
           
           {user.user.data.user.usertype_id == 1 ? 
           <div className='flex flex-col justify-center'>
            <h1 className='font-poppins text-center text-lg'>INFO</h1>
            <h1 className='font-poppins '>name: Aleksandar Janchevski</h1>
            <h1 className='font-poppins '>phone: +38977924944</h1>
            <h1 className='font-poppins'>city: Bitola</h1>
            <h1 className='font-poppins '>address: Dimitar Todoro br9.</h1>
            <h1 className='font-poppins'> date: 13:45 12/12/2022</h1>
            <input type="text" placeholder="zabeleska" className='font-poppins bg-slate-50 p-1' />
            <button className='font-poppins border-[0.1rem] border-yellow-400 p-2 font-bold text-white bg-yellow-400 rounded-xl m-4  pr-4 pl-4'>SAVE</button>
            </div>
           : null}
        </div> }
        <div className=' p-6 overflow-y-scroll flex flex-col border-b-[0.1rem] border-b-slate-200 lg:border-r-[0.1rem] lg:border-r-slate-200 justify-center  items-center'>
        {user.user.data.user.usertype_id == 1 ? <h1 className='font-poppins'>ORDER NUMBER - [2023]</h1> : null}
           <img  src='http://localhost:3000/img/bluza.png' className='w-40' />
           <h1 className='font-poppins '>ИМЕ : "No Face , No Case"</h1>
           <h1 className='font-poppins '>ЦЕНА : 1299.00 ден</h1>
           <h1 className='font-poppins text-yellow-500 font-bold'>СТАТУС</h1>
           {user.user.data.user.usertype_id == 1 ? 
           <ul className='font-poppins p-4 animate-fade-in-down'>
           <li onClick={e => setClicked(1)} className='flex flex-row gap-2 items-center'>
             {clicked == 1 ? <BsCircleFill /> : <BsCircle />}
             <h1>" ВО ТЕК"</h1>
           </li>
           <li onClick={e => setClicked(2)} className='flex flex-row gap-2 items-center'>
           {clicked == 2 ? <BsCircleFill /> : <BsCircle />}
             <h1>"  ИСПОРАЧАН  "</h1>
           </li>
           <li onClick={e => setClicked(3)} className='flex flex-row gap-2 items-center'>
           {clicked == 3 ? <BsCircleFill /> : <BsCircle />}
             <h1 className=''>"  ОДБИЕН  "</h1>
           </li>
         </ul> : <h1 className='font-poppins'>" ВО ТЕК "</h1>}
           {user.user.data.user.usertype_id == 2 ? <h1 className='font-poppins'>13:45 12/12/2022</h1> : null}
           
           {user.user.data.user.usertype_id == 1 ? 
           <div className='flex flex-col justify-center'>
            <h1 className='font-poppins text-center text-lg'>INFO</h1>
            <h1 className='font-poppins '>name: Aleksandar Janchevski</h1>
            <h1 className='font-poppins '>phone: +38977924944</h1>
            <h1 className='font-poppins'>city: Bitola</h1>
            <h1 className='font-poppins '>address: Dimitar Todoro br9.</h1>
            <h1 className='font-poppins'> date: 13:45 12/12/2022</h1>
            <input type="text" placeholder="zabeleska" className='font-poppins bg-slate-50 p-1' />
            <button className='font-poppins border-[0.1rem] border-yellow-400 p-2 font-bold text-white bg-yellow-400 rounded-xl m-4  pr-4 pl-4'>SAVE</button>
            </div>
           : null}
        </div> 
        <div className=' p-6 overflow-y-scroll flex flex-col border-b-[0.1rem] border-b-slate-200 lg:border-r-[0.1rem] lg:border-r-slate-200 justify-center  items-center'>
        {user.user.data.user.usertype_id == 1 ? <h1 className='font-poppins'>ORDER NUMBER - [2023]</h1> : null}
           <img  src='http://localhost:3000/img/bluza.png' className='w-40' />
           <h1 className='font-poppins '>ИМЕ : "No Face , No Case"</h1>
           <h1 className='font-poppins '>ЦЕНА : 1299.00 ден</h1>
           <h1 className='font-poppins text-yellow-500 font-bold'>СТАТУС</h1>
           {user.user.data.user.usertype_id == 1 ? 
           <ul className='font-poppins p-4 animate-fade-in-down'>
           <li onClick={e => setClicked(1)} className='flex flex-row gap-2 items-center'>
             {clicked == 1 ? <BsCircleFill /> : <BsCircle />}
             <h1>" ВО ТЕК"</h1>
           </li>
           <li onClick={e => setClicked(2)} className='flex flex-row gap-2 items-center'>
           {clicked == 2 ? <BsCircleFill /> : <BsCircle />}
             <h1>"  ИСПОРАЧАН  "</h1>
           </li>
           <li onClick={e => setClicked(3)} className='flex flex-row gap-2 items-center'>
           {clicked == 3 ? <BsCircleFill /> : <BsCircle />}
             <h1 className=''>"  ОДБИЕН  "</h1>
           </li>
         </ul> : <h1 className='font-poppins'>" ВО ТЕК "</h1>}
           {user.user.data.user.usertype_id == 2 ? <h1 className='font-poppins'>13:45 12/12/2022</h1> : null}
           
           {user.user.data.user.usertype_id == 1 ? 
           <div className='flex flex-col justify-center'>
            <h1 className='font-poppins text-center text-lg'>INFO</h1>
            <h1 className='font-poppins '>name: Aleksandar Janchevski</h1>
            <h1 className='font-poppins '>phone: +38977924944</h1>
            <h1 className='font-poppins'>city: Bitola</h1>
            <h1 className='font-poppins '>address: Dimitar Todoro br9.</h1>
            <h1 className='font-poppins'> date: 13:45 12/12/2022</h1>
            <input type="text" placeholder="zabeleska" className='font-poppins bg-slate-50 p-1' />
            <button className='font-poppins border-[0.1rem] border-yellow-400 p-2 font-bold text-white bg-yellow-400 rounded-xl m-4  pr-4 pl-4'>SAVE</button>
            </div>
           : null}
        </div>
        <div className=' p-6 overflow-y-scroll flex flex-col border-b-[0.1rem] border-b-slate-200 lg:border-r-[0.1rem] lg:border-r-slate-200 justify-center  items-center'>
        {user.user.data.user.usertype_id == 1 ? <h1 className='font-poppins'>ORDER NUMBER - [2023]</h1> : null}
           <img  src='http://localhost:3000/img/bluza.png' className='w-40' />
           <h1 className='font-poppins '>ИМЕ : "No Face , No Case"</h1>
           <h1 className='font-poppins '>ЦЕНА : 1299.00 ден</h1>
           <h1 className='font-poppins text-yellow-500 font-bold'>СТАТУС</h1>
           {user.user.data.user.usertype_id == 1 ? 
           <ul className='font-poppins p-4 animate-fade-in-down'>
           <li onClick={e => setClicked(1)} className='flex flex-row gap-2 items-center'>
             {clicked == 1 ? <BsCircleFill /> : <BsCircle />}
             <h1>" ВО ТЕК"</h1>
           </li>
           <li onClick={e => setClicked(2)} className='flex flex-row gap-2 items-center'>
           {clicked == 2 ? <BsCircleFill /> : <BsCircle />}
             <h1>"  ИСПОРАЧАН  "</h1>
           </li>
           <li onClick={e => setClicked(3)} className='flex flex-row gap-2 items-center'>
           {clicked == 3 ? <BsCircleFill /> : <BsCircle />}
             <h1 className=''>"  ОДБИЕН  "</h1>
           </li>
         </ul> : <h1 className='font-poppins'>" ВО ТЕК "</h1>}
           {user.user.data.user.usertype_id == 2 ? <h1 className='font-poppins'>13:45 12/12/2022</h1> : null}
           
           {user.user.data.user.usertype_id == 1 ? 
           <div className='flex flex-col justify-center'>
            <h1 className='font-poppins text-center text-lg'>INFO</h1>
            <h1 className='font-poppins '>name: Aleksandar Janchevski</h1>
            <h1 className='font-poppins '>phone: +38977924944</h1>
            <h1 className='font-poppins'>city: Bitola</h1>
            <h1 className='font-poppins '>address: Dimitar Todoro br9.</h1>
            <h1 className='font-poppins'> date: 13:45 12/12/2022</h1>
            <input type="text" placeholder="zabeleska" className='font-poppins bg-slate-50 p-1' />
            <button className='font-poppins border-[0.1rem] border-yellow-400 p-2 font-bold text-white bg-yellow-400 rounded-xl m-4  pr-4 pl-4'>SAVE</button>
            </div>
           : null}
        </div>
        <div className=' p-6 overflow-y-scroll flex flex-col border-b-[0.1rem] border-b-slate-200 lg:border-r-[0.1rem] lg:border-r-slate-200 justify-center  items-center'>
        {user.user.data.user.usertype_id == 1 ? <h1 className='font-poppins'>ORDER NUMBER - [2023]</h1> : null}
           <img  src='http://localhost:3000/img/bluza.png' className='w-40' />
           <h1 className='font-poppins '>ИМЕ : "No Face , No Case"</h1>
           <h1 className='font-poppins '>ЦЕНА : 1299.00 ден</h1>
           <h1 className='font-poppins text-yellow-500 font-bold'>СТАТУС</h1>
           {user.user.data.user.usertype_id == 1 ? 
           <ul className='font-poppins p-4 animate-fade-in-down'>
           <li onClick={e => setClicked(1)} className='flex flex-row gap-2 items-center'>
             {clicked == 1 ? <BsCircleFill /> : <BsCircle />}
             <h1>" ВО ТЕК"</h1>
           </li>
           <li onClick={e => setClicked(2)} className='flex flex-row gap-2 items-center'>
           {clicked == 2 ? <BsCircleFill /> : <BsCircle />}
             <h1>"  ИСПОРАЧАН  "</h1>
           </li>
           <li onClick={e => setClicked(3)} className='flex flex-row gap-2 items-center'>
           {clicked == 3 ? <BsCircleFill /> : <BsCircle />}
             <h1 className=''>"  ОДБИЕН  "</h1>
           </li>
         </ul> : <h1 className='font-poppins'>" ВО ТЕК "</h1>}
           {user.user.data.user.usertype_id == 2 ? <h1 className='font-poppins'>13:45 12/12/2022</h1> : null}
           
           {user.user.data.user.usertype_id == 1 ? 
           <div className='flex flex-col justify-center'>
            <h1 className='font-poppins text-center text-lg'>INFO</h1>
            <h1 className='font-poppins '>name: Aleksandar Janchevski</h1>
            <h1 className='font-poppins '>phone: +38977924944</h1>
            <h1 className='font-poppins'>city: Bitola</h1>
            <h1 className='font-poppins '>address: Dimitar Todoro br9.</h1>
            <h1 className='font-poppins'> date: 13:45 12/12/2022</h1>
            <input type="text" placeholder="zabeleska" className='font-poppins bg-slate-50 p-1' />
            <button className='font-poppins border-[0.1rem] border-yellow-400 p-2 font-bold text-white bg-yellow-400 rounded-xl m-4  pr-4 pl-4'>SAVE</button>
            </div>
           : null}
        </div>
        <div className=' p-6 overflow-y-scroll flex flex-col border-b-[0.1rem] border-b-slate-200 lg:border-r-[0.1rem] lg:border-r-slate-200 justify-center  items-center'>
        {user.user.data.user.usertype_id == 1 ? <h1 className='font-poppins'>ORDER NUMBER - [2023]</h1> : null}
           <img  src='http://localhost:3000/img/bluza.png' className='w-40' />
           <h1 className='font-poppins '>ИМЕ : "No Face , No Case"</h1>
           <h1 className='font-poppins '>ЦЕНА : 1299.00 ден</h1>
           <h1 className='font-poppins text-yellow-500 font-bold'>СТАТУС</h1>
           {user.user.data.user.usertype_id == 1 ? 
           <ul className='font-poppins p-4 animate-fade-in-down'>
           <li onClick={e => setClicked(1)} className='flex flex-row gap-2 items-center'>
             {clicked == 1 ? <BsCircleFill /> : <BsCircle />}
             <h1>" ВО ТЕК"</h1>
           </li>
           <li onClick={e => setClicked(2)} className='flex flex-row gap-2 items-center'>
           {clicked == 2 ? <BsCircleFill /> : <BsCircle />}
             <h1>"  ИСПОРАЧАН  "</h1>
           </li>
           <li onClick={e => setClicked(3)} className='flex flex-row gap-2 items-center'>
           {clicked == 3 ? <BsCircleFill /> : <BsCircle />}
             <h1 className=''>"  ОДБИЕН  "</h1>
           </li>
         </ul> : <h1 className='font-poppins'>" ВО ТЕК "</h1>}
           {user.user.data.user.usertype_id == 2 ? <h1 className='font-poppins'>13:45 12/12/2022</h1> : null}
           
           {user.user.data.user.usertype_id == 1 ? 
           <div className='flex flex-col justify-center'>
            <h1 className='font-poppins text-center text-lg'>INFO</h1>
            <h1 className='font-poppins '>name: Aleksandar Janchevski</h1>
            <h1 className='font-poppins '>phone: +38977924944</h1>
            <h1 className='font-poppins'>city: Bitola</h1>
            <h1 className='font-poppins '>address: Dimitar Todoro br9.</h1>
            <h1 className='font-poppins'> date: 13:45 12/12/2022</h1>
            <input type="text" placeholder="zabeleska" className='font-poppins bg-slate-50 p-1' />
            <button className='font-poppins border-[0.1rem] border-yellow-400 p-2 font-bold text-white bg-yellow-400 rounded-xl m-4  pr-4 pl-4'>SAVE</button>
            </div>
           : null}
        </div>
        <div className=' p-6 overflow-y-scroll flex flex-col border-b-[0.1rem] border-b-slate-200 lg:border-r-[0.1rem] lg:border-r-slate-200 justify-center  items-center'>
        {user.user.data.user.usertype_id == 1 ? <h1 className='font-poppins'>ORDER NUMBER - [2023]</h1> : null}
           <img  src='http://localhost:3000/img/bluza.png' className='w-40' />
           <h1 className='font-poppins '>ИМЕ : "No Face , No Case"</h1>
           <h1 className='font-poppins '>ЦЕНА : 1299.00 ден</h1>
           <h1 className='font-poppins text-yellow-500 font-bold'>СТАТУС</h1>
           {user.user.data.user.usertype_id == 1 ? 
           <ul className='font-poppins p-4 animate-fade-in-down'>
           <li onClick={e => setClicked(1)} className='flex flex-row gap-2 items-center'>
             {clicked == 1 ? <BsCircleFill /> : <BsCircle />}
             <h1>" ВО ТЕК"</h1>
           </li>
           <li onClick={e => setClicked(2)} className='flex flex-row gap-2 items-center'>
           {clicked == 2 ? <BsCircleFill /> : <BsCircle />}
             <h1>"  ИСПОРАЧАН  "</h1>
           </li>
           <li onClick={e => setClicked(3)} className='flex flex-row gap-2 items-center'>
           {clicked == 3 ? <BsCircleFill /> : <BsCircle />}
             <h1 className=''>"  ОДБИЕН  "</h1>
           </li>
         </ul> : <h1 className='font-poppins'>" ВО ТЕК "</h1>}
           {user.user.data.user.usertype_id == 2 ? <h1 className='font-poppins'>13:45 12/12/2022</h1> : null}
           
           {user.user.data.user.usertype_id == 1 ? 
           <div className='flex flex-col justify-center'>
            <h1 className='font-poppins text-center text-lg'>INFO</h1>
            <h1 className='font-poppins '>name: Aleksandar Janchevski</h1>
            <h1 className='font-poppins '>phone: +38977924944</h1>
            <h1 className='font-poppins'>city: Bitola</h1>
            <h1 className='font-poppins '>address: Dimitar Todoro br9.</h1>
            <h1 className='font-poppins'> date: 13:45 12/12/2022</h1>
            <input type="text" placeholder="zabeleska" className='font-poppins bg-slate-50 p-1' />
            <button className='font-poppins border-[0.1rem] border-yellow-400 p-2 font-bold text-white bg-yellow-400 rounded-xl m-4  pr-4 pl-4'>SAVE</button>
            </div>
           : null}
        </div>
        <div className=' p-6 overflow-y-scroll flex flex-col border-b-[0.1rem] border-b-slate-200 lg:border-r-[0.1rem] lg:border-r-slate-200 justify-center  items-center'>
        {user.user.data.user.usertype_id == 1 ? <h1 className='font-poppins'>ORDER NUMBER - [2023]</h1> : null}
           <img  src='http://localhost:3000/img/bluza.png' className='w-40' />
           <h1 className='font-poppins '>ИМЕ : "No Face , No Case"</h1>
           <h1 className='font-poppins '>ЦЕНА : 1299.00 ден</h1>
           <h1 className='font-poppins text-yellow-500 font-bold'>СТАТУС</h1>
           {user.user.data.user.usertype_id == 1 ? 
           <ul className='font-poppins p-4 animate-fade-in-down'>
           <li onClick={e => setClicked(1)} className='flex flex-row gap-2 items-center'>
             {clicked == 1 ? <BsCircleFill /> : <BsCircle />}
             <h1>" ВО ТЕК"</h1>
           </li>
           <li onClick={e => setClicked(2)} className='flex flex-row gap-2 items-center'>
           {clicked == 2 ? <BsCircleFill /> : <BsCircle />}
             <h1>"  ИСПОРАЧАН  "</h1>
           </li>
           <li onClick={e => setClicked(3)} className='flex flex-row gap-2 items-center'>
           {clicked == 3 ? <BsCircleFill /> : <BsCircle />}
             <h1 className=''>"  ОДБИЕН  "</h1>
           </li>
         </ul> : <h1 className='font-poppins'>" ВО ТЕК "</h1>}
           {user.user.data.user.usertype_id == 2 ? <h1 className='font-poppins'>13:45 12/12/2022</h1> : null}
           
           {user.user.data.user.usertype_id == 1 ? 
           <div className='flex flex-col justify-center'>
            <h1 className='font-poppins text-center text-lg'>INFO</h1>
            <h1 className='font-poppins '>name: Aleksandar Janchevski</h1>
            <h1 className='font-poppins '>phone: +38977924944</h1>
            <h1 className='font-poppins'>city: Bitola</h1>
            <h1 className='font-poppins '>address: Dimitar Todoro br9.</h1>
            <h1 className='font-poppins'> date: 13:45 12/12/2022</h1>
            <input type="text" placeholder="zabeleska" className='font-poppins bg-slate-50 p-1' />
            <button className='font-poppins border-[0.1rem] border-yellow-400 p-2 font-bold text-white bg-yellow-400 rounded-xl m-4  pr-4 pl-4'>SAVE</button>
            </div>
           : null}
        </div>

        
        
        
        
        </div>
   </div>
  )
}

export default Poracki