import React, { useState } from 'react'
import Header from './Header'
import { BsCart } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const WProducts = () => {
    const clicked_class = "p-4 bg-slate-200 w-1/3"
    const reg_class = "p-4 bg-white w-1/3"
    const [clicked, setClicked] = useState(false)
    const category = useSelector(state => state.clothes.categories.data)
    return (
      <div>
        <Header />
        <div className='flex flex-row justify-between font-poppins w-screen pt-14 overflow-x-scroll lg:overflow-x-hidden'>
          {category.map(c => <h1 className='p-4  text-sm'>{c.name}</h1>)}
  
        </div>
  
        <h1 className='font-poppins text-slate-300 text-sm text-center p-2'>- повлечи од десно на лево -</h1>
  
        <div className='flex flex-row  gap-2 text-red-500 font-poppins justify-center p-4 '>
        <h1 className='font-bold'>-</h1>
        <h1>НЕМА ДОСТАПНИ ПРОИЗВОДИ НАСКОРО</h1>
        <h1 className='font-bold'>-</h1>
        </div>
  
      
       
      </div>
  )
}

export default WProducts