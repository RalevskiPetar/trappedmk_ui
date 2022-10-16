import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import { BsCart } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import Footer from '../Footer'

const MProducts = () => {
  const category = useSelector(state => state.clothes.categories.data)
  const user = useSelector(state => state.user)
  const clothes = useSelector(state => state.clothes.clothes.data)
  console.log(clothes.filter(c => c.gender === 1))
  return (
    <div className='w-screen'>
      <Header />
      <div className='flex flex-row justify-around font-poppins w-screen pt-14 overflow-x-scroll lg:overflow-x-hidden'>
       
         {category.map(c => <h1 className='p-4  text-sm '>{c.name}</h1>)}
       

      </div>

      <h1 className='font-poppins text-slate-300 text-sm text-center p-2'>- повлечи од десно на лево -</h1>
      {clothes?.filter(c => c.gender === 1)?.map(p => <Link to={`/maski/${p.name}`}>
        <div  className=' p-6 overflow-x-hidden flex flex-col border-b-[0.1rem] gap-1 border-b-slate-200 justify-center items-center lg:border-r-zinc-200 lg:border-r lg:hover:opacity-80  '>
          <img src='http://localhost:3000/img/bluza.png' className='w-[14rem] lg:w-[18rem]' />
          <h1 className='font-poppins text-lg'>" {p.name} "</h1>
          <h1 className='font-poppins '>{p.price} den</h1>
          <h1 className='font-poppins '>{p.description}</h1>
        </div>
       </Link>)}
      <div className='lg:grid lg:grid-cols-4 lg:w-screen  '>
       
        

        
       


      </div>
        <Footer />
    </div>
  )
}

export default MProducts