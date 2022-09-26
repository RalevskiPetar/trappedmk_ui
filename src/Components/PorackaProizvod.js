import React from 'react'
import Footer from '../Footer'
import Header from './Header'
import { RiArrowLeftSLine , RiArrowRightSLine } from 'react-icons/ri'
import { AiFillPlusCircle, AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BiCart } from 'react-icons/bi'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
 
const PorackaProizvod = () => {
  const { name} = useParams()
  const product_data = useSelector(state => state.clothes.clothes.data)
  const store_available = useSelector(state => state.store.store.data.stores)
 
  const getSize = (option) => {
    if (option == 1) return "S"
    else if (option == 2) return "M"
    else if (option == 3) return "L"
  }
 console.log(uniqueId)
  return (
    <div>
        <Header />
        
        <div className=' p-6 overflow-x-hidden flex flex-row gap-1  justify-center items-center  pt-20  '  >
          <div className='flex flex-col items-center w-1/2'>
          <div className='lg:flex lg:flex-row lg:items-center'>
            <RiArrowLeftSLine size={50} color="gray" className='lg:border-[0.1rem] lg:rounded-full lg:bg-slate-200'/>
          <img src='http://localhost:3000/img/bluza.png' className='w-[14rem] lg:w-[38rem]' />
          <RiArrowRightSLine size={50} color="gray" className='lg:border-[0.1rem] lg:rounded-full lg:bg-slate-200 '/>
          </div>
          <div className='lg:flex lg:flex-row '>
          <img src='http://localhost:3000/img/bluza.png' className='lg:border-slate-100 lg:border-[0.1rem] lg:w-[5rem] lg:opacity-40' />
          <img src='http://localhost:3000/img/bluza.png' className='lg:border-slate-100 lg:border-[0.1rem] lg:w-[5rem] ' />
          <img src='http://localhost:3000/img/bluza.png' className='lg:border-slate-100 lg:border-[0.1rem] lg:w-[5rem] lg:opacity-40' />
          </div>
          </div>
          
         <div className='lg:flex lg:flex-col lg:w-1/2 lg:items-center lg:gap-6'>
         <div className='flex flex-col items-center justify-center'>
          <div className='border-[0.1rem] border-red-200 p-4  '>
            <h1 className='font-poppins text-red-400 font-bold '>Make 3 orders get 20% off</h1>
          </div>
          <h1 className='font-poppins text-3xl p-4'>{name}</h1>
          <h1 className='font-poppins text-2xl'></h1>
          <h1 className='font-poppins text-xl '>{product_data["All Products"].find(p => p.name == name).price} den</h1>
           <h1 className='font-poppins text-xl'>available sizes</h1>
           <div className='lg:flex lg:flex-row'>
           {
            store_available.filter(sa => sa.product_id == product_data["All Products"].find(pd => pd.name == name).id).map(sa =>
              <h1 className='font-poppins lg:border-[0.1rem] lg:border-slate-200 lg:p-6'>{getSize(sa.size)}</h1>
              )
           }
            
            </div>
            <h1 className='font-poppins lg:p-2 lg:text-lg lg:font-bold'>quantity</h1>
            <div className='lg:flex lg:flex-row lg:items-center lg:gap-2'>
                <AiOutlineMinus />
                <h1 className='lg:border-[0.1rem] lg:border-slate-200 lg:p-4 lg:rounded-sm'>23</h1>
                <AiOutlinePlus />
                                </div>
        </div>
        <div className='lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-10 lg:w-1/2'>
        <AiOutlineHeart  className='lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1  lg:hover:text-black lg:hover:scale-110' size={35} />
        <h1 className='lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1 lg:hover:bg-black lg:hover:text-white lg:hover:scale-110 lg:text-center lg:border-[0.1rem] lg:border-zinc-900 lg:w-1/3 p-2 lg:rounded-sm font-poppins'>Buy NOW</h1>
        <BiCart  className='lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1  lg:hover:text-black lg:hover:scale-110' size={30}/>
            </div>
         </div>
         
        </div>
        <p className='font-poppins text-center'>• 100% cotton • Macedonian Product • TrappedMK • Clothing • Brand • T-Shirt • Gang •</p>
        <p className='font-poppins text-center'>• 100% cotton • Macedonian Product • TrappedMK • Clothing • Gang •</p>
        <p className='font-poppins text-center'>• 100% cotton • Republic of Macedonia • TrappedMK • Clothing • Brand • T-Shirt • Gang •</p>
        <Footer />
    </div>
  )
}

export default PorackaProizvod