import React from 'react'

const IsporacanProduct = ({
    order,
    clothes,
    stores,
    user
}) => {

    const ordered_item = stores.find(s => s.id === order.product_id)
    const ordered_product = clothes.find(c => c.id === ordered_item.product_id)
    const current_user = user.user.data.users?.find(u => u.id === order.user_id)

    return (
        <div className=' p-6  flex flex-col border-b-[0.1rem]  border-b-slate-200 lg:border-r-[0.1rem]  lg:border-r-slate-200 justify-center items-center'>
            <img src='http://localhost:3000/img/bluza.png' className='w-40' />
            <h1 className='font-poppins '>ИМЕ : "{ordered_product.name}"</h1>
            <h1 className='font-poppins '>ЦЕНА : {ordered_product.price}ден</h1>
            <h1 className='font-poppins text-green-500 font-bold'>СТАТУС : испорачана</h1>

            {user.user.data.user.usertype_id == 1 ?
                <div className='flex flex-col p-4 justify-center'>

                    <h1 className='font-poppins '>name: {current_user.name} {current_user.surname} </h1>
                    <h1 className='font-poppins '>phone: {current_user.phone}</h1>
                    <h1 className='font-poppins'>city: Bitola</h1>
                    <h1 className='font-poppins '>address: {current_user.address}</h1>
                    <h1 className='font-poppins'> date: 13:45 12/12/2022</h1>

                </div>
                : null}


        </div>
    )
}

export default IsporacanProduct