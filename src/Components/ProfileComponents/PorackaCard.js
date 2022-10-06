import { useState } from "react"
import { BsCircle, BsCircleFill } from "react-icons/bs"
import { useDispatch } from "react-redux"
import { update_Order } from "../../Redux/Orders/Actions"

const PorackaCard = ({
    order,
    clothes,
    allusers,
    user,
    order_statuses
}) => {
    const dispatch = useDispatch()
  const [clicked, setClicked] = useState(1)
  const [updatedOrder, setUpdatedOrder] = useState("")

    const handleUpdate = (e, o) => {
        e.preventDefault()
        const form = new FormData()
        form.append("id", o.id)
        form.append("quantity", o.quantity)
        form.append("order_id_stat", clicked)
        dispatch(update_Order(form))
      }

    return (
        <form onSubmit={e => handleUpdate(e, order)} className=' p-6 flex flex-col border-b-[0.1rem] border-b-slate-200 lg:border-r-[0.1rem] lg:border-r-slate-200 justify-center  items-center'>
            {user.user.data.user.usertype_id == 1 ? <h1 className='font-poppins'>ORDER NUMBER - [{order.order_num}]</h1> : null}
            <img src='http://localhost:3000/img/bluza.png' className='w-40' />
            <h1 className='font-poppins '>ИМЕ : "{clothes.find(c => (c.id === order.product_id)).name}"</h1>
            <h1 className='font-poppins '>ЦЕНА : {clothes.find(c => (c.id === order.product_id)).price}ден</h1>
            <h1 className='font-poppins text-yellow-500 font-bold'>СТАТУС</h1>
            {user.user.data.user.usertype_id == 1 ?
                <ul className='font-poppins p-4 animate-fade-in-down'>
                    {order_statuses.map(os => <li onClick={e => setClicked(os.id)} className='flex flex-row gap-2 items-center'>
                        {clicked == os.id ? <BsCircleFill /> : <BsCircle />}
                        <h1>" {os.name}"</h1>
                    </li>)}
                </ul> : <h1 className='font-poppins'>" ВО ТЕК "</h1>}
            {user.user.data.user.usertype_id == 2 ? <h1 className='font-poppins'>13:45 12/12/2022</h1> : null}

            {user.user.data.user.usertype_id == 1 ?
                <div className='flex flex-col justify-center'>
                    <h1 className='font-poppins text-center text-lg'>INFO</h1>
                    <h1 className='font-poppins '>name: {allusers?.find(u => u.id === order.user_id).name + " " + allusers?.find(u => u.id === order.user_id).surname}</h1>
                    <h1 className='font-poppins '>phone: {allusers?.find(u => u.id === order.user_id).phone}</h1>
                    <h1 className='font-poppins'>city: {allusers?.find(u => u.id === order.user_id).address}</h1>
                    <h1 className='font-poppins '>address: Dimitar Todoro br9.</h1>
                    <h1 className='font-poppins'>date: 13:45 12/12/2022</h1>
                    <div className='flex flex-row gap-2'>
                        <h1 className='font-poppins'>quantity : </h1>
                        <h1 className='font-poppins' name="quantity">{order.quantity}</h1>
                    </div>
                    <input type="text" placeholder="zabeleska" className='font-poppins bg-slate-50 p-1' />
                    <button onClick={e => handleUpdate(e, order)} className='font-poppins border-[0.1rem] border-yellow-400 p-2 font-bold text-white bg-yellow-400 rounded-xl m-4  pr-4 pl-4'>SAVE</button>
                </div>
                : null}
        </form>
    )
}

export default PorackaCard