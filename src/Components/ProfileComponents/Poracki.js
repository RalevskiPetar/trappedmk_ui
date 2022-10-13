import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BsCircle, BsCircleFill } from 'react-icons/bs'
import { update_Order } from '../../Redux/Orders/Actions'
import PorackaCard from './PorackaCard'

const Poracki = (props) => {
  const user = useSelector(state => state?.user)
  const [expanded, setExpanded] = useState(false)
  const [selected, setSelected] = useState(false)
  const orders_all = useSelector(state => state.orders.order.data)
  const allusers = useSelector(state => state.user.user.data.users)
  const clothes = useSelector(state => state.clothes.clothes.data)
  const order_statuses = useSelector(state => state.orders.order_status.data.all_order_statuses)

  return (
    <div className='lg:bg-opacity-40 lg:bg-white lg:bg-backdrop-blur-md lg:drop-shadow-lg'>
      <h1 onClick={e => setExpanded(!expanded)} className='font-poppins text-slate-400 text-center border-[0.1rem] p-2 font-bold'>- FILTER -</h1>
      {expanded == true ?
        <div >
          <ul className='font-poppins p-4 animate-fade-in-down '>
            <li onClick={e => setSelected(1)} className='flex flex-row gap-2 items-center lg:justify-center '>
              {selected == 1 ? <BsCircleFill /> : <BsCircle />}
              <h1> NEWEST</h1>
            </li>
            <li onClick={e => setSelected(2)} className='flex flex-row gap-2 items-center lg:justify-center'>
              {selected == 2 ? <BsCircleFill /> : <BsCircle />}
              <h1>  LATEST</h1>
            </li>
            <li onClick={e => setSelected(4)} className='flex flex-row gap-2 items-center lg:justify-center'>
              {selected == 4 ? <BsCircleFill /> : <BsCircle />}
              <h1> A - W </h1>
            </li>

          </ul>
        </div>
        : null}
      <div className=' h-2/12 lg:grid lg:grid-cols-4'>
        {orders_all.filter(o => o?.order_id_stat === 7).map(oa => <PorackaCard 
          key={oa.id}
          order={oa}
          clothes={clothes}
          allusers={allusers}
          user={user}
          order_statuses={order_statuses}
        />)}
      </div>
    </div>
  )
}

export default Poracki