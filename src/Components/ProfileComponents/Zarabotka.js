import { m } from 'framer-motion'
import React, { useState } from 'react'
import { GiClothesline } from 'react-icons/gi'
import { useSelector } from 'react-redux'
import DoubleBubble from '../BarLoader'
import DodajSuma from './DodajSuma'
import Meseci from './Meseci'

const Zarabotka = () => {
  const months = [
    {
      id: 1,
      "month": "Jan"
    },
    {
      id: 2,
      "month": "Feb"
    },
    {
      id: 3,
      "month": "Mar"
    },
    {
      id: 4,
      "month": "Apr"
    },
    {
      id: 5,
      "month": "May"
    },
    {
      id: 6,
      "month": "Jun"
    },
    {
      id: 7,
      "month": "Jul"
    },
    {
      id: 8,
      "month": "Aug"
    },
    {
      id: 9,
      "month": "Sep"
    },
    {
      id: 10,
      "month": "Oct"
    },
    {
      id: 11,
      "month": "Nov"
    },
    {
      id: 12,
      "month": "Dec"
    },

  ]
  const [expanded, setExpanded] = useState(false)
  const [calendar, setCalendar] = useState(false)
  const [mesec, setMesec] = useState(7)
  const money_logs = useSelector(state => state.money.money_tracker.data)
  const money_logs_messages = useSelector(state => state.money.money_tracker)
  const orders = useSelector(state => state.orders.order.data)
  const products = useSelector(state => state.clothes.clothes.data)
  const store = useSelector(state => state.store.store.data.stores)
  const filteredOrders = orders.filter(o => o.order_id_stat === 1 &&  o.date.slice(8, 11) === months.find(me => me.id === mesec).month ) 
  console.log(orders)
  let odliv_suma = 0;
  let priliv_suma = 0;
  let clothes_priliv_suma = 0 ;
  filteredOrders.map(fo => clothes_priliv_suma += products.find(p => p.id === store.find(s => s.id === fo.product_id).product_id).price)
  money_logs?.filter(m => m.type_id == 2 && m.date.slice(8, 11) === months.find(me => me.id === mesec).month).map(ml => odliv_suma += ml.ammount)
  money_logs?.filter(m => m.type_id == 1 && m.date.slice(8, 11) === months.find(me => me.id === mesec).month).map(ml => priliv_suma += ml.ammount)
  console.log(clothes_priliv_suma)
  if (money_logs_messages.createStatus === "Pending") return <DoubleBubble speed={1} message="Loading.." />

  return (
    <div className='flex flex-col'>
      <h1 onClick={e => setCalendar(true)} className='font-poppins text-center p-2 bg-slate-100 shadow-md cursor-pointer'>IZBERI MESEC</h1>
      {calendar == true ? <Meseci setMesec={setMesec} setCalendar={setCalendar} /> : null}
      <div className='flex flex-row  '>
        <div className='h-1/2 w-1/2 border-r-[0.0rem] border-slate-200'>
          <h1 className='font-poppins text-center text-red-500 lg:text-2xl border-[0.1rem] border-2-slate-200 font-bold p-4'>ODLIV</h1>
          <div className='flex flex-col justify-center '>
            {money_logs?.filter(m => m.type_id === 2 && m.date.slice(8, 11) === months.find(me => me.id === mesec).month).map(m =>
              <div className='flex flex-row justify-between border-b-[0.03rem] border-r-[0.03rem] border-r-slate-200 border-b-slate-200 p-2'>
                <h1 className='font-poppins text-red-400 font-bold'>{m.ammount} DEN.</h1>

                <h1 className='font-poppins'>{m.date}</h1>
                <h1 className='font-poppins'>{m.pricina}</h1>
              </div>)}


          </div>

        </div>
        <div className='h-1/2 w-1/2 border-r-[0.03rem] border-slate-200'>
          <h1 className='font-poppins text-center text-green-400 font-bold lg:text-2xl p-4 border-[0.1rem] border-2-slate-200'>PRILIV</h1>
          <div className='flex flex-col justify-center '>

            {money_logs?.filter(m => m.type_id === 1 && m.date.slice(8, 11) === months.find(m => m.id === mesec).month).map(m =>
              <div className='flex flex-row justify-between border-b-[0.03rem] border-r-[0.03rem] border-r-slate-200 border-b-slate-200 p-2'>
                <h1 className='font-poppins text-green-400 font-bold'>{m.ammount} DEN.</h1>
                <h1 className='font-poppins'>{m.date}</h1>
                <h1 className='font-poppins'>{m.pricina}</h1>
              </div>)}
            {filteredOrders.map(or => (
              <div className='flex flex-row justify-between border-b-[0.03rem] border-r-[0.03rem] border-r-slate-200 border-b-slate-200 p-2'>
                <h1 className='font-poppins text-green-400 font-bold'>{products.find(p => p.id === store.find(s => s.id === or.product_id).product_id).price} DEN.</h1>
                <h1 className='font-poppins'>{or.date}</h1>
               <h1 className='font-poppins'>{products.find(p => p.id === store.find(s => s.id === or.product_id).product_id).name}</h1> 
              </div>)
            )}




          </div>

        </div>

      </div>
      <button className='font-poppins bg-slate-50 p-2 shadow-md ' onClick={e => setExpanded(!expanded)}>DODAJ SUMA</button>
      {expanded == true ? <DodajSuma setExpanded={setExpanded} /> : null}
      <div className='p-4 flex flex-row'>
        <div className='w-1/2'>
          <h1 className='font-poppins border-b-[0.1rem] border-slate-200 p-2'>ODLIV</h1>
          <h1 className='font-poppins border-b-[0.1rem] border-slate-200 p-2'>PRILIV</h1>
          <h1 className='font-poppins border-b-[0.1rem] border-slate-200 p-2'>ZARABOTKA</h1>
          <h1 className='font-poppins border-b-[0.1rem] border-slate-200 p-2'>MESEC</h1>

        </div>
        <div className='w-1/2'>
          <h1 className='border-b-[0.1rem] border-slate-200 p-2 text-end font-poppins text-red-500'>{odliv_suma} DEN.</h1>
          <h1 className='border-b-[0.1rem] border-slate-200 p-2 text-end font-poppins text-green-400'>{priliv_suma + clothes_priliv_suma} DEN.</h1>
          <h1 className='border-b-[0.1rem] border-slate-200 p-2 text-end font-poppins'>{(priliv_suma + clothes_priliv_suma) - odliv_suma} DEN.</h1>
          <h1 className='border-b-[0.1rem] border-slate-200 p-2 text-end font-poppins'>{months.find(m => m.id === mesec).month}</h1>
        </div>
      </div>
    </div>
  )
}

export default Zarabotka

/*
<h1 className="font-poppins text-center">ODLIV - [ 41.000 DEN. ]</h1>
    <h1 className="font-poppins text-center">PRILIV - [ 78.000 DEN. ]</h1>
    <h1 className="font-poppins text-center">ZARABOTKA - [ 37.000 DEN. ]</h1>
    <h1 className="font-poppins text-center">MESEC - [ JUNI ]</h1> */