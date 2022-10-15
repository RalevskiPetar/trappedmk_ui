import React from 'react'
import { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../Footer'
import { WishlistActions } from '../Redux/Orders/Actions'
import Header from './Header'


const WishList = () => {
    const wishlistItems = useSelector(state => state.orders.wishlist.data)
    const user = useSelector(state => state.user.user.data?.user)
    const store = useSelector(state => state.store.store.data.stores)
    const clothes = useSelector(state => state.clothes.clothes.data)
    
    const dispatch = useDispatch()

     
    return (
        <div>
            <Header />
            <div className='w-screen pt-14 grid grid-cols-4'>
              {wishlistItems.filter(w => w.user_id === user.id ).map(it => 
                <div className=' p-6  flex flex-col border-b-[0.1rem] border-b-slate-200 border-r-[0.1rem] border-r-slate-200 justify-center items-center'>
                <img  src='http://localhost:3000/img/bluzadva.png' className='w-40' />
                <h1 className='font-poppins '>ИМЕ : "{clothes.find(c => c.id === store.find(s => s.id === it.store_id).product_id).name}"</h1>
                <h1 className='font-poppins '>ЦЕНА :{clothes.find(c => c.id === store.find(s => s.id === it.store_id).product_id).price}ден</h1>
                <AiFillHeart onClick={e => dispatch(WishlistActions.delete(it.id))} color='violet' size={30}/>
         
         
             </div>)}
            </div>
            <Footer />
        </div>
    )
}

export default WishList