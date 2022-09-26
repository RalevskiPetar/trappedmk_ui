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
  console.log(category)
  return (
    <div className='w-screen'>
      <Header />
      <div className='flex flex-row justify-around font-poppins w-screen pt-14 overflow-x-scroll lg:overflow-x-hidden'>
       
         {category.map(c => <h1 className='p-4  text-sm '>{c.name}</h1>)}
       

      </div>

      <h1 className='font-poppins text-slate-300 text-sm text-center p-2'>- повлечи од десно на лево -</h1>

      <div className='lg:grid lg:grid-cols-4 lg:w-screen  '>
       
        

        
       


      </div>
        <Footer />
    </div>
  )
}

export default MProducts