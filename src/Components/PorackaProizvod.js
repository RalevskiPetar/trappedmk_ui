import React from 'react'
import Footer from '../Footer'
import Header from './Header'
import { RiArrowLeftSLine , RiArrowRightSLine } from 'react-icons/ri'
import { AiFillPlusCircle, AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BiCart } from 'react-icons/bi'
 
const PorackaProizvod = () => {
  return (
    <div>
        <Header />
        
        <div className=' p-6 overflow-x-hidden flex flex-col gap-1  justify-center items-center  pt-20  '  >
          <div className='lg:flex lg:flex-row lg:items-center'>
            <RiArrowLeftSLine size={50} color="gray" className='lg:border-[0.1rem] lg:rounded-full lg:bg-slate-200'/>
          <img src='http://localhost:3000/img/bluza.png' className='w-[14rem] lg:w-[25rem]' />
          <RiArrowRightSLine size={50} color="gray" className='lg:border-[0.1rem] lg:rounded-full lg:bg-slate-200 '/>
          </div>
          <div className='lg:flex lg:flex-row '>
          <img src='http://localhost:3000/img/bluza.png' className='lg:border-slate-100 lg:border-[0.1rem] lg:w-[5rem] lg:opacity-40' />
          <img src='http://localhost:3000/img/bluza.png' className='lg:border-slate-100 lg:border-[0.1rem] lg:w-[5rem] ' />
          <img src='http://localhost:3000/img/bluza.png' className='lg:border-slate-100 lg:border-[0.1rem] lg:w-[5rem] lg:opacity-40' />
          </div>
          
          <h1 className='font-poppins text-2xl'>"No Face , No Case"</h1>
          <h1 className='font-poppins '>1299.00 den</h1>
           <h1 className='font-poppins'>size</h1>
           <div className='lg:flex lg:flex-row'>
            <h1 className='font-poppins lg:border-[0.1rem] lg:border-slate-200 lg:p-4'>S</h1>
            <h1 className='font-poppins lg:border-[0.1rem] lg:border-slate-200 lg:p-4'>M</h1>
            <h1 className='font-poppins lg:border-[0.1rem] lg:border-slate-200 lg:p-4'>L</h1>
            <h1 className='font-poppins lg:border-[0.1rem] lg:border-slate-200 lg:p-4'>XL</h1>
            </div>
            <h1 className='font-poppins lg:p-2'>quantity</h1>
            <div className='lg:flex lg:flex-row lg:items-center lg:gap-2'>
                <AiOutlineMinus />
                <h1 className='lg:border-[0.1rem] lg:border-slate-200 lg:p-4 lg:rounded-sm'>23</h1>
                <AiOutlinePlus />
                                </div>
        </div>
        <div className='lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-10'>
        <AiOutlineHeart  className='lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1  lg:hover:text-black lg:hover:scale-110' size={30} />
        <h1 className='lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1 lg:hover:bg-black lg:hover:text-white lg:hover:scale-110 lg:text-center lg:border-[0.1rem] lg:border-zinc-900 lg:w-1/12 p-2 lg:rounded-sm font-poppins'>Buy NOW</h1>
        <BiCart  className='lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1  lg:hover:text-black lg:hover:scale-110' size={30}/>
        </div>
        <Footer />
    </div>
  )
}

export default PorackaProizvod