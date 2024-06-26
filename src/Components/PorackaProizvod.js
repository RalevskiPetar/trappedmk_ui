import React, { useEffect } from 'react'
import Footer from '../Footer'
import Header from './Header'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { AiFillHeart, AiFillPlusCircle, AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BiCart } from 'react-icons/bi'
import { FaShoppingCart } from "react-icons/fa"
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { CartActions, create_Order, WishlistActions } from '../Redux/Orders/Actions'
import { BsEmojiSmile } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
import DoubleBubble from './BarLoader'
import { FiShoppingCart } from 'react-icons/fi'
import {useWindowSize} from '../useWindowSize.ts'
const sizes = ["", "S", "M", "L", "XL"]
const PorackaProizvod = () => {
  const dispatch = useDispatch()
  const { name } = useParams()
  const size = useWindowSize()
  const product_data = useSelector(state => state.clothes.clothes.data)
  const store_available = useSelector(state => state.store.store.data.stores)
  const order_stat = useSelector(state => state.orders.order.createStatus)
  const user = useSelector(state => state?.user)
  const wishlistItems = useSelector(state => state.orders.wishlist.data)
  const cartReducer = useSelector(state => state.orders.cart)

  const [selectedSize, setSelectedSize] = useState(1)
  const [quantity, setQuantity] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => dispatch(CartActions.read()), [])

  const selected_class = "font-poppins border-[0.1rem] border-slate-200  m-auto p-2 lg:p-6 w-10  lg:w-20 text-center bg-slate-800 text-white"
  const regular_class = "font-poppins  border-[0.1rem] border-slate-200 m-auto p-2 lg:p-6 w-10  lg:w-20 text-center transition-all "


  const current_prod = product_data.find(pd => pd.name == name)
  const productId = store_available?.find(sa => sa.product_id == current_prod.id)?.id
  const handleCreateWishListItem = e => {
    const current_prod = product_data.find(pd => pd.name == name)
    const productId = store_available.find(sa => sa.product_id == current_prod.id)?.id
    e.preventDefault()
    const form = new FormData()
    form.append("user_id", user.user.data.user.id)
    form.append("store_id", productId)
    dispatch(WishlistActions.create(form))
  }

  const handleCreateOrder = (e) => {
    e.preventDefault()
    const current_prod = product_data.find(pd => pd.name == name)
    const productId = store_available.find(sa => sa.product_id == current_prod.id && sa.size === selectedSize)?.id
    const form = new FormData()
    form.append("user_id", user.user.data.user.id)
    form.append("product_id", productId)
    form.append("quantity", quantity)
    form.append("order_id_stat", 7)
    setSubmitted(true)
    dispatch(create_Order(form))
  }
  const filteredSizes = store_available?.filter(sa => sa.product_id == product_data.find(pd => pd.name == name).id).sort((a, b) => a.size > b.size ? 1 : -1).map(sa =>
    <h1 onClick={e => setSelectedSize(sa.size)} className={selectedSize == sa.size ? selected_class : regular_class}>{sizes[sa.size]}</h1>
  )


  if (cartReducer.loadStatus === "pending") return <DoubleBubble speed={1} message="Loading product information... Please wait." />
  const currentStore = store_available.find(s => s.size === selectedSize && s.product_id === current_prod.id)
  const itemInCart = cartReducer.data.find(item => item.user_id === user.user.data.user.id && item.store_id === currentStore.id)

  console.log(size[0])

  const toggleCart = e => {
    e.preventDefault()
    if (itemInCart === undefined) {
      const form = new FormData()
      form.append("user_id", user.user.data.user.id)
      form.append("store_id", currentStore.id)
      form.append("quantity", quantity)
      dispatch(CartActions.create(form))
    } else dispatch(CartActions.delete(itemInCart.id))
  }

  return (
    <div>
      <Header />

      <form className=' p-6 overflow-x-hidden flex flex-row gap-1  justify-center items-center  pt-20  '  >
        {size[0].width < 900 ? <div className=''>
          <div className='flex flex-row items-center'>
          <RiArrowLeftSLine size={50} color="gray" className='lg:border-[0.1rem] lg:rounded-full lg:bg-slate-200' />
          <img src='http://localhost:3000/img/bluza.png' className='w-[14rem] lg:w-[38rem]' />
          <RiArrowRightSLine size={50} color="gray" className='lg:border-[0.1rem] lg:rounded-full lg:bg-slate-200 ' />
        </div>
        <div className='flex flex-row justify-center '>
          <img src='http://localhost:3000/img/bluza.png' className='border-slate-100 border-[0.1rem] w-[3rem] opacity-40 ' />
          <img src='http://localhost:3000/img/bluza.png' className='border-slate-100 border-[0.1rem] w-[3rem]  ' />
          <img src='http://localhost:3000/img/bluza.png' className='border-slate-100 border-[0.1rem] w-[3rem] opacity-40 ' />
        </div>
        <div className='flex flex-col items-center justify-center'>
            {/* <div className='border-[0.1rem] border-red-200 p-4  '>
              <h1 className='font-poppins  font-bold '>Make 3 orders get 20% off</h1>
            </div> */}
            <h1 className='font-poppins text-3xl p-4 '>{name}</h1>
            <h1 className='font-poppins text-2xl'></h1>
            <h1 className='font-poppins text-xl  '>{product_data.find(p => p.name == name).price} den</h1>
            <h1 className='font-poppins text-xl '>available sizes</h1>
            <div className='flex flex-row'>
              {filteredSizes.length === 0 ? <h1 className='font-poppins text-red-600 font-bold text-3xl animate-cursor'>SOLD OUT</h1> :
                filteredSizes}

            </div>
            <h1 className='font-poppins lg:p-2 lg:text-lg lg:font-bold mt-5 '>quantity</h1>
            {filteredSizes.length === 0 ?
              <div className='lg:flex lg:flex-row lg:items-center lg:gap-2 '>
                {quantity < 1 ?
                  <span className='w-4'></span>
                  :
                  <AiOutlineMinus className='cursor-not-allowed' />}
                <h1 className='lg:border-[0.1rem] lg:border-slate-200 lg:p-4 lg:rounded-sm '>0</h1>
                <AiOutlinePlus className='cursor-not-allowed' />
              </div> :
              <div className='flex flex-row items-center gap-2'>
                {quantity < 1 ?
                  <span className='w-4'></span>
                  :
                  <AiOutlineMinus onClick={e => setQuantity(quantity - 1)} />}
                <h1 className='lg:border-[0.1rem] lg:border-slate-200 lg:p-4 lg:rounded-sm'>{quantity}</h1>
                <AiOutlinePlus onClick={e => setQuantity(quantity + 1)} />
              </div>}
          </div>
          <h1 className='font-poppins  font-bold text-center '>total price: <span className='font-poppins text-red-400 font-bold'> {quantity * product_data.find(p => p.name == name).price}</span> den.</h1>
          {filteredSizes.length === 0 ?
            <div className='flex flex-row justify-center items-center gap-10  w-1/2'>
              <AiOutlineHeart className='cursor-not-allowed  text-slate-400' size={35} />

              <button className=' cursor-not-allowed  lg:text-center lg:border-[0.1rem] lg:border-slate-400 lg:w-1/3 p-2 lg:rounded-sm font-poppins bg-black text-white'>Buy NOW</button>
              <BiCart className='text-slate-400 cursor-not-allowed  ' size={30} />
            </div> :
            <div className='flex flex-row justify-center items-center gap-10  mt-5'>
              {wishlistItems.find(it => it.store_id == productId && it.user_id === user.user.data.user.id) ?
                <AiFillHeart onClick={e => dispatch(WishlistActions.delete(wishlistItems.find(it => it.store_id == productId && it.user_id === user.user.data.user.id).id))} className=' lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1  lg:hover:text-black lg:hover:scale-110' size={35} /> :
                <AiOutlineHeart onClick={e => handleCreateWishListItem(e)} className=' lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1  lg:hover:text-black lg:hover:scale-110' size={35} />}

              {order_stat === "Wait.." ?
                <DoubleBubble /> : null}
              {order_stat === "Success" && submitted === true ?
                <div className='flex flex-row gap-1 items-center'>
                  <h1 className='font-poppins  text-sm'>Thank you for purchase</h1>
                  <BsEmojiSmile />
                </div> :
                user.user.logout === false ? <button onClick={e => handleCreateOrder(e)} className='lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1 lg:hover:bg-black lg:hover:text-white lg:hover:scale-110 lg:text-center lg:border-[0.1rem] lg:border-zinc-900 lg:w-1/3 p-2 lg:rounded-sm font-poppins'>Buy NOW</button> :
                  <NavLink to='/login' className='lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1 lg:hover:bg-black lg:hover:text-white lg:hover:scale-110 lg:text-center pl-4 pr-4 border-[0.1rem] border-zinc-900 lg:w-1/3 p-2 lg:rounded-sm font-poppins'><button >Buy NOW</button></NavLink>}
              {itemInCart === undefined ?
                <FiShoppingCart onClick={e => toggleCart(e)} className='cursor-pointer lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1  lg:hover:text-black lg:hover:scale-110' size={30} /> :
                <FaShoppingCart onClick={e => toggleCart(e)} className='cursor-pointer lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1  lg:hover:text-black lg:hover:scale-110' size={30} />
              }
            </div>}
          
        </div> : 
        <div className='flex flex-col items-center w-1/2'>
        <div className='lg:flex lg:flex-row lg:items-center'>
          <RiArrowLeftSLine size={50} color="gray" className='lg:border-[0.1rem] lg:rounded-full lg:bg-slate-200' />
          <img src='http://localhost:3000/img/bluza.png' className='w-[14rem] lg:w-[38rem]' />
          <RiArrowRightSLine size={50} color="gray" className='lg:border-[0.1rem] lg:rounded-full lg:bg-slate-200 ' />
        </div>
        <div className='lg:flex lg:flex-row '>
          <img src='http://localhost:3000/img/bluza.png' className='lg:border-slate-100 lg:border-[0.1rem] lg:w-[5rem] lg:opacity-40 w-1/2' />
          <img src='http://localhost:3000/img/bluza.png' className='lg:border-slate-100 lg:border-[0.1rem] lg:w-[5rem] w-1/2 ' />
          <img src='http://localhost:3000/img/bluza.png' className='lg:border-slate-100 lg:border-[0.1rem] lg:w-[5rem] lg:opacity-40 w-1/2' />
        </div>
      </div>}

        {size[0].width < 900 ? null : <div className='lg:flex lg:flex-col lg:w-1/2 lg:items-center lg:gap-6'>
          <div className='flex flex-col items-center justify-center'>
            {/* <div className='border-[0.1rem] border-red-200 p-4  '>
              <h1 className='font-poppins  font-bold '>Make 3 orders get 20% off</h1>
            </div> */}
            <h1 className='font-poppins text-3xl p-4 '>{name}</h1>
            <h1 className='font-poppins text-2xl'></h1>
            <h1 className='font-poppins text-xl  '>{product_data.find(p => p.name == name).price} den</h1>
            <h1 className='font-poppins text-xl '>available sizes</h1>
            <div className='lg:flex lg:flex-row'>
              {filteredSizes.length === 0 ? <h1 className='font-poppins text-red-600 font-bold text-3xl animate-cursor'>SOLD OUT</h1> :
                filteredSizes}

            </div>
            <h1 className='font-poppins lg:p-2 lg:text-lg lg:font-bold '>quantity</h1>
            {filteredSizes.length === 0 ?
              <div className='lg:flex lg:flex-row lg:items-center lg:gap-2'>
                {quantity < 1 ?
                  <span className='w-4'></span>
                  :
                  <AiOutlineMinus className='cursor-not-allowed' />}
                <h1 className='lg:border-[0.1rem] lg:border-slate-200 lg:p-4 lg:rounded-sm '>0</h1>
                <AiOutlinePlus className='cursor-not-allowed' />
              </div> :
              <div className='lg:flex lg:flex-row lg:items-center lg:gap-2'>
                {quantity < 1 ?
                  <span className='w-4'></span>
                  :
                  <AiOutlineMinus onClick={e => setQuantity(quantity - 1)} />}
                <h1 className='lg:border-[0.1rem] lg:border-slate-200 lg:p-4 lg:rounded-sm'>{quantity}</h1>
                <AiOutlinePlus onClick={e => setQuantity(quantity + 1)} />
              </div>}
          </div>
          <h1 className='font-poppins  font-bold '>total price: <span className='font-poppins text-red-400 font-bold'> {quantity * product_data.find(p => p.name == name).price}</span> den.</h1>
          {filteredSizes.length === 0 ?
            <div className='lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-10 lg:w-1/2'>
              <AiOutlineHeart className='cursor-not-allowed  text-slate-400' size={35} />

              <button className='text-slate-400 cursor-not-allowed  lg:text-center lg:border-[0.1rem] lg:border-slate-400 lg:w-1/3 p-2 lg:rounded-sm font-poppins'>Buy NOW</button>
              <BiCart className='text-slate-400 cursor-not-allowed  ' size={30} />
            </div> :
            <div className='lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-10 lg:w-1/2'>
              {wishlistItems.find(it => it.store_id == productId && it.user_id === user.user.data.user.id) ?
                <AiFillHeart onClick={e => dispatch(WishlistActions.delete(wishlistItems.find(it => it.store_id == productId && it.user_id === user.user.data.user.id).id))} className=' lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1  lg:hover:text-black lg:hover:scale-110' size={35} /> :
                <AiOutlineHeart onClick={e => handleCreateWishListItem(e)} className=' lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1  lg:hover:text-black lg:hover:scale-110' size={35} />}

              {order_stat === "Wait.." ?
                <DoubleBubble /> : null}
              {order_stat === "Success" && submitted === true ?
                <div className='flex flex-row gap-1 items-center'>
                  <h1 className='font-poppins  text-sm'>Thank you for purchase</h1>
                  <BsEmojiSmile />
                </div> :
                user.user.logout === false ? <button onClick={e => handleCreateOrder(e)} className='lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1 lg:hover:bg-black lg:hover:text-white lg:hover:scale-110 lg:text-center lg:border-[0.1rem] lg:border-zinc-900 lg:w-1/3 p-2 lg:rounded-sm font-poppins'>Buy NOW</button> :
                  <NavLink to='/login' className='lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1 lg:hover:bg-black lg:hover:text-white lg:hover:scale-110 lg:text-center lg:border-[0.1rem] lg:border-zinc-900 lg:w-1/3 p-2 lg:rounded-sm font-poppins'><button >Buy NOW</button></NavLink>}
              {itemInCart === undefined ?
                <FiShoppingCart onClick={e => toggleCart(e)} className='cursor-pointer lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1  lg:hover:text-black lg:hover:scale-110' size={30} /> :
                <FaShoppingCart onClick={e => toggleCart(e)} className='cursor-pointer lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1  lg:hover:text-black lg:hover:scale-110' size={30} />
              }
            </div>}
        </div>
}
      </form>
      <p className='font-poppins text-center'>• 100% cotton • Macedonian Product • TrappedMK • Clothing • Brand • T-Shirt • Gang •</p>
      <p className='font-poppins text-center'>• 100% cotton • Macedonian Product • TrappedMK • Clothing • Gang •</p>
      <p className='font-poppins text-center'>• 100% cotton • Republic of Macedonia • TrappedMK • Clothing • Brand • T-Shirt • Gang •</p>
      <Footer />
    </div>
  )
}

export default PorackaProizvod