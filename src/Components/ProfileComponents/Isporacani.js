import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IsporacanProduct from './IsporacanProduct'

const Isporacani = () => {
  const orders = useSelector(state => state.orders.order.data)
  const user = useSelector(state => state?.user)
  const clothes = useSelector(state => state.clothes.clothes.data)
  const stores = useSelector(state => state.store.store.data.stores)
  return (
    <div className=' h-2/12 lg:grid lg:grid-cols-4'>
      {orders?.map(o => o?.order_id_stat === 1 ? null : <IsporacanProduct 
        order={o}
        clothes={clothes}
        stores={stores}
        user={user}
      />)}
    </div>
  )
}

export default Isporacani