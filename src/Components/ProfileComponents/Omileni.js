import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { WishlistActions } from '../../Redux/Orders/Actions'

const Omileni = () => {
   const wishlistItems = useSelector(state => state.orders.wishlist.data)
    const user = useSelector(state => state.user.user.data?.user)
    const store = useSelector(state => state.store.store.data.stores)
    const clothes = useSelector(state => state.clothes.clothes.data)
    const dispatch = useDispatch()
  return (
    <div className=' h-2/12 lg:grid lg:grid-cols-4'>
   
   {wishlistItems.filter(w => w.user_id === user.id ).map(it =>  <div className=' p-6 flex flex-col border-b-[0.1rem] border-b-slate-200 border-r-[0.1rem] border-r-slate-200 justify-center items-center'>
       <img  src='http://localhost:3000/img/bluza.png' className='w-40' />
       <h1 className='font-poppins '>ИМЕ : "{clothes.find(c => c.id === store.find(s => s.id === it.store_id).product_id).name}"</h1>
       <h1 className='font-poppins '>ЦЕНА : {clothes.find(c => c.id === store.find(s => s.id === it.store_id).product_id).price} ден</h1>
       <AiFillHeart onClick={e => dispatch(WishlistActions.delete(it.id))} color='violet' size={30}/>


    </div>)}
      
    
    </div>
  )
}

export default Omileni