import React from 'react'
import { useSelector } from 'react-redux'

const Odbieni = () => {
  const _orders = useSelector(state => state.orders.order.data)
  const clothes = useSelector(state => state.clothes.clothes.data)
  return (
    <div className='overflow-y-scroll h-2/12 lg:grid lg:grid-cols-4'>
       {_orders.filter(o => o.order_id_stat == 6).map(or => 
         <div className=' p-6 flex flex-col border-b-[0.1rem] lg:border-r-[0.1rem]  lg:border-r-slate-200 border-b-slate-200 justify-center items-center'>
         <img  src='http://localhost:3000/img/bluza.png' className='w-40' />
         <h1 className='font-poppins '>ИМЕ : "{clothes.find(c => c.id === or.product_id)?.name}"</h1>
         <h1 className='font-poppins text-red-400 font-bold '>СТАТУС : BLOCKED</h1>
         <h1 className='font-poppins pt-2'>ЗАБЕЛЕШКА</h1>
         <h1 className='font-poppins '>"{or.zabeleska}"</h1>
        


      </div>
        )}
        
        </div>
  )
}

export default Odbieni