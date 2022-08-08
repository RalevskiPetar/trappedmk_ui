import React from 'react'
import { useSelector } from 'react-redux'

const Isporacani = () => {
   const user = useSelector(state => state?.user)
  return (
    <div className='overflow-y-scroll h-2/12 lg:grid lg:grid-cols-4'>
    <div className=' p-6 overflow-y-scroll flex flex-col border-b-[0.1rem]  border-b-slate-200 lg:border-r-[0.1rem]  lg:border-r-slate-200 justify-center items-center'>
       <img  src='http://localhost:3000/img/bluza.png' className='w-40' />
       <h1 className='font-poppins '>ИМЕ : "No Face , No Case"</h1>
       <h1 className='font-poppins '>ЦЕНА : 1299.00 ден</h1>
       <h1 className='font-poppins text-green-500 font-bold'>СТАТУС : испорачана</h1>
 
       {user.user.data.user.usertype_id == 1 ? 
           <div className='flex flex-col p-4 justify-center'>
            
            <h1 className='font-poppins '>name: Aleksandar Janchevski</h1>
            <h1 className='font-poppins '>phone: +38977924944</h1>
            <h1 className='font-poppins'>city: Bitola</h1>
            <h1 className='font-poppins '>address: Dimitar Todoro br9.</h1>
            <h1 className='font-poppins'> date: 13:45 12/12/2022</h1>

            </div>
           : null}


    </div>
    <div className=' p-6 overflow-y-scroll flex flex-col border-b-[0.1rem] border-b-slate-200 lg:border-r-[0.1rem]  lg:border-r-slate-200 justify-center items-center'>
       <img  src='http://localhost:3000/img/bluzadva.png' className='w-40' />
       <h1 className='font-poppins '>ИМЕ : "No Face , No Case"</h1>
       <h1 className='font-poppins '>ЦЕНА : 1299.00 ден</h1>
       <h1 className='font-poppins text-green-500 font-bold '>СТАТУС : испорачана</h1>

       {user.user.data.user.usertype_id == 1 ? 
           <div className='flex flex-col p-4 justify-center'>
            
            <h1 className='font-poppins '>name: Aleksandar Janchevski</h1>
            <h1 className='font-poppins '>phone: +38977924944</h1>
            <h1 className='font-poppins'>city: Bitola</h1>
            <h1 className='font-poppins '>address: Dimitar Todoro br9.</h1>
            <h1 className='font-poppins'> date: 13:45 12/12/2022</h1>
            </div>
           : null}


    </div>
    <div className=' p-6 overflow-y-scroll flex flex-col border-b-[0.1rem] border-b-slate-200 lg:border-r-[0.1rem]  lg:border-r-slate-200 justify-center items-center'>
       <img  src='http://localhost:3000/img/bluza.png' className='w-40' />
       <h1 className='font-poppins '>ИМЕ : "No Face , No Case"</h1>
       <h1 className='font-poppins '>ЦЕНА : 1299.00 ден</h1>
       <h1 className='font-poppins text-green-500 font-bold'>СТАТУС : испорачана</h1>
     
       {user.user.data.user.usertype_id == 1 ? 
           <div className='flex flex-col p-4 justify-center'>
            
            <h1 className='font-poppins '>name: Aleksandar Janchevski</h1>
            <h1 className='font-poppins '>phone: +38977924944</h1>
            <h1 className='font-poppins'>city: Bitola</h1>
            <h1 className='font-poppins '>address: Dimitar Todoro br9.</h1>
            <h1 className='font-poppins'> date: 13:45 12/12/2022</h1>
            </div>
           : null}


    </div>
    <div className=' p-6 overflow-y-scroll flex flex-col border-b-[0.1rem] border-b-slate-200 lg:border-r-[0.1rem]  lg:border-r-slate-200 justify-center items-center'>
       <img  src='http://localhost:3000/img/bluzadva.png' className='w-40' />
       <h1 className='font-poppins '>ИМЕ : "No Face , No Case"</h1>
       <h1 className='font-poppins '>ЦЕНА : 1299.00 ден</h1>
       <h1 className='font-poppins text-green-500 font-bold '>СТАТУС : испорачана</h1>
 
       {user.user.data.user.usertype_id == 1 ? 
           <div className='flex flex-col p-4 justify-center'>
            
            <h1 className='font-poppins '>name: Aleksandar Janchevski</h1>
            <h1 className='font-poppins '>phone: +38977924944</h1>
            <h1 className='font-poppins'>city: Bitola</h1>
            <h1 className='font-poppins '>address: Dimitar Todoro br9.</h1>
            <h1 className='font-poppins'> date: 13:45 12/12/2022</h1>
            </div>
           : null}


    </div>
    <div className=' p-6 overflow-y-scroll flex flex-col border-b-[0.1rem]  border-b-slate-200 lg:border-r-[0.1rem]  lg:border-r-slate-200 justify-center items-center'>
       <img  src='http://localhost:3000/img/bluza.png' className='w-40' />
       <h1 className='font-poppins '>ИМЕ : "No Face , No Case"</h1>
       <h1 className='font-poppins '>ЦЕНА : 1299.00 ден</h1>
       <h1 className='font-poppins text-green-500 font-bold'>СТАТУС : испорачана</h1>

       {user.user.data.user.usertype_id == 1 ? 
           <div className='flex flex-col p-4 justify-center'>
            
            <h1 className='font-poppins '>name: Aleksandar Janchevski</h1>
            <h1 className='font-poppins '>phone: +38977924944</h1>
            <h1 className='font-poppins'>city: Bitola</h1>
            <h1 className='font-poppins '>address: Dimitar Todoro br9.</h1>
            <h1 className='font-poppins'> date: 13:45 12/12/2022</h1>
            </div>
           : null}


    </div>
    <div className=' p-6 overflow-y-scroll flex flex-col border-b-[0.1rem] border-b-slate-200 lg:border-r-[0.1rem]  lg:border-r-slate-200 justify-center items-center'>
       <img  src='http://localhost:3000/img/bluzadva.png' className='w-40' />
       <h1 className='font-poppins '>ИМЕ : "No Face , No Case"</h1>
       <h1 className='font-poppins '>ЦЕНА : 1299.00 ден</h1>
       <h1 className='font-poppins text-green-500 font-bold '>СТАТУС : испорачана</h1>
     
       {user.user.data.user.usertype_id == 1 ? 
           <div className='flex flex-col p-4 justify-center'>
            
            <h1 className='font-poppins '>name: Aleksandar Janchevski</h1>
            <h1 className='font-poppins '>phone: +38977924944</h1>
            <h1 className='font-poppins'>city: Bitola</h1>
            <h1 className='font-poppins '>address: Dimitar Todoro br9.</h1>
            <h1 className='font-poppins'> date: 13:45 12/12/2022</h1>
            </div>
           : null}


    </div>
    <div className=' p-6 overflow-y-scroll flex flex-col border-b-[0.1rem]  border-b-slate-200 lg:border-r-[0.1rem]  lg:border-r-slate-200 justify-center items-center'>
       <img  src='http://localhost:3000/img/bluza.png' className='w-40' />
       <h1 className='font-poppins '>ИМЕ : "No Face , No Case"</h1>
       <h1 className='font-poppins '>ЦЕНА : 1299.00 ден</h1>
       <h1 className='font-poppins text-green-500 font-bold'>СТАТУС : испорачана</h1>
       {user.user.data.user.usertype_id == 1 ? 
           <div className='flex flex-col p-4 justify-center'>
            
            <h1 className='font-poppins '>name: Aleksandar Janchevski</h1>
            <h1 className='font-poppins '>phone: +38977924944</h1>
            <h1 className='font-poppins'>city: Bitola</h1>
            <h1 className='font-poppins '>address: Dimitar Todoro br9.</h1>
            <h1 className='font-poppins'> date: 13:45 12/12/2022</h1>
            </div>
           : null}


    </div>
    <div className=' p-6 overflow-y-scroll flex flex-col border-b-[0.1rem] border-b-slate-200 lg:border-r-[0.1rem]  lg:border-r-slate-200 justify-center items-center'>
       <img  src='http://localhost:3000/img/bluzadva.png' className='w-40' />
       <h1 className='font-poppins '>ИМЕ : "No Face , No Case"</h1>
       <h1 className='font-poppins '>ЦЕНА : 1299.00 ден</h1>
       <h1 className='font-poppins text-green-500 font-bold '>СТАТУС : испорачана</h1>
       {user.user.data.user.usertype_id == 1 ? 
           <div className='flex flex-col p-4 justify-center'>
            
            <h1 className='font-poppins '>name: Aleksandar Janchevski</h1>
            <h1 className='font-poppins '>phone: +38977924944</h1>
            <h1 className='font-poppins'>city: Bitola</h1>
            <h1 className='font-poppins '>address: Dimitar Todoro br9.</h1>
            <h1 className='font-poppins'> date: 13:45 12/12/2022</h1>
            </div>
           : null}


    </div>
    </div>
  )
}

export default Isporacani