import React, { useState } from 'react'
import { FiMenu, FiLogIn } from 'react-icons/fi'
import { AiOutlineHeart, AiOutlineUser, AiOutlineClose } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { BsCart } from 'react-icons/bs'
import NavMenu from './NavMenu'
import { Link, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const user = useSelector(state => state.user)
  const wishlistItems = useSelector(state => state.orders.wishlist.data)
  const [expanded, setExpanded] = useState(false)
  const regular_class = "relative -top-2"
  const active_class = "relative -top-0"
  const wishlistTotal = wishlistItems.filter(w => w.user_id === user.user.data?.user.id ).length
  return (
    <div className='fixed bg-zinc-900 flex flex-row items-center justify-between p-2 lg:z-20 w-screen'>
      {expanded == false ? <FiMenu onClick={e => setExpanded(!expanded)} color='white' size={20} className="w-[5rem] lg:w-[8rem] lg:hidden" /> :
        <IoMdClose onClick={e => setExpanded(!expanded)} color='white' size={20} className="w-[5rem] lg:w-[8rem] lg:hidden" />}
      {expanded == true ? <NavMenu /> : null}
      <div className='lg:flex lg:flex-row lg:gap-4 lg:font-poppins lg:text-white lg:pl-5 lg:w-1/6 hidden '>
        <Link to="/novo" className='lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1 lg:hover:scale-110'><h1>NEW</h1></Link>
        <Link to="/siteproizvodi" className='lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1 lg:hover:scale-110'><h1>ALL PRODUCTS</h1></Link>
        <Link to="/maski" className='lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1 lg:hover:scale-110'><h1>MAN</h1></Link>
        <Link to="/zenski" className='lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1 lg:hover:scale-110'><h1>WOMAN</h1></Link>
      </div>
      <Link className='w-1/6' to="/">
        <div className='flex flex-col items-center '>
          <img src='http://localhost:3000/img/logo.png' className='w-[5rem]' />
          <h1 className='text-white font-poppins text-[0.6rem]'>since 2018</h1>
        </div>
      </Link>
      <div className='flex flex-row w-[5rem] lg:w-1/6 gap-3 items-center lg:flex lg:flex-row lg:justify-end lg:pr-2'>
        <BsCart className='' color='white' size={22} />

        <div>
        {wishlistTotal === 0 ? null : <span className=' relative -top-0 items-center z-10 -right-4 bg-red-500 w-4 h-4 flex justify-center text-white font-poppins align-middle text-[0.8rem] font-bold rounded-full'>{wishlistTotal}</span>}
        <AiOutlineHeart className={wishlistTotal === 0 ? active_class : regular_class } color="white" size={22} />
        </div>
        {user.user.createStatus == "Success" ? <Link to="/profile"><AiOutlineUser color='white' size={21} /></Link> : <Link to="/login"><AiOutlineUser color='white' size={21} /></Link>}
      </div>

    </div>
  )
}

export default Header