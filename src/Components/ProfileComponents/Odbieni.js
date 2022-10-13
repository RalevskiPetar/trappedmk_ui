import React from 'react'
import { useSelector } from 'react-redux'
import OdbienaNaracka from './OdbienaNaracka'

const Odbieni = () => {
  const _orders = useSelector(state => state.orders.order.data)
  const stores = useSelector(state => state.store.store.data.stores)
  const clothes = useSelector(state => state.clothes.clothes.data)

  return (
    <div className='overflow-y-scroll h-2/12 lg:grid lg:grid-cols-4'>
      {_orders.filter(o => o.order_id_stat == 6).map(or =>
        <OdbienaNaracka
          order={or}
          stores={stores}
          clothes={clothes}
        />
      )}

    </div>
  )
}

export default Odbieni