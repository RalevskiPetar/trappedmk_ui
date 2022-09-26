import React, { useState } from 'react'
import Header from './Header'
import { BsCart } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../Footer'

const AllProducts = () => {
  const clicked_class = "p-4 bg-slate-200 "
  const reg_class = "p-4 bg-white w-1/3"
  const [clicked, setClicked] = useState(false)
  const category = useSelector(state => state.clothes.categories.data)
  const product = useSelector(state => state.clothes.clothes.data)
  const user = useSelector(state => state.user)
 
  return (
    <div className='w-screen'>
      <Header />
      <div className='flex flex-row justify-around font-poppins w-screen pt-14 overflow-x-scroll lg:overflow-x-hidden'>
       
         {category.map(c => <h1 className='p-4  text-sm '>{c.name}</h1>)}
       

      </div>

      <h1 className='font-poppins text-slate-300 text-sm text-center p-2'>- повлечи од десно на лево -</h1>

      <div className='lg:grid lg:grid-cols-4 lg:w-screen '>
       {product["All Products"].map(p => <Link to={`/siteproizvodi/${p.name}`}>
        <div  className=' p-6 overflow-x-hidden flex flex-col border-b-[0.1rem] gap-1 border-b-slate-200 justify-center items-center lg:border-r-zinc-200 lg:border-r lg:hover:opacity-80  '>
          <img src='http://localhost:3000/img/bluza.png' className='w-[14rem] lg:w-[18rem]' />
          <h1 className='font-poppins text-lg'>" {p.name} "</h1>
          <h1 className='font-poppins '>{p.price} den</h1>
          <h1 className='font-poppins '>{p.description}</h1>
        </div>
       </Link>)}
        {/* {product["All Products"].map(p => {user.user.createStatus == "Success" ? <Link to="/nfnc">
        <div className=' p-6 overflow-x-hidden flex flex-col border-b-[0.1rem] gap-1 border-b-slate-200 justify-center items-center lg:border-r-zinc-200 lg:border-r lg:hover:opacity-80  '>
          <img src='http://localhost:3000/img/bluza.png' className='w-[14rem] lg:w-[18rem]' />
          <h1 className='font-poppins text-lg'>"{p.name}"</h1>
          <h1 className='font-poppins '>{p.price} den</h1>
          <h1 className='font-poppins '>{p.description}</h1>
        </div>
        </Link> :<Link to="/login">
        <div className=' p-6 overflow-x-hidden flex flex-col border-b-[0.1rem] gap-1 border-b-slate-200 justify-center items-center lg:border-r-zinc-200 lg:border-r lg:hover:opacity-80  '>
          <img src='http://localhost:3000/img/bluza.png' className='w-[14rem] lg:w-[18rem]' />
          <h1 className='font-poppins text-lg'>" {p.price} "</h1>
          <h1 className='font-poppins '>{p.price} den</h1>
          <h1 className='font-poppins '>{p.description}</h1>
        </div>
        </Link> })} */}
         {/* <div className=' p-6 overflow-x-hidden flex flex-col border-b-[0.1rem] gap-1 border-b-slate-200 justify-center items-center  lg:border-r-zinc-200 lg:border-r  lg:hover:opacity-80'>
          <img src='http://localhost:3000/img/bluza.png' className='w-[14rem] lg:w-[18rem]' />
          <h1 className='font-poppins text-lg'>"TEST TEST"</h1>
          <h1 className='font-poppins '>TEST</h1>
          <h1 className='font-poppins '>TEST</h1>
        </div> */}
      </div>
  <Footer />
    </div>
  )
}

export default AllProducts