const OdbienaNaracka = ({
    order,
    stores,
    clothes
}) => {
    const current_store = stores.find(s => s.id === order.product_id)
    const current_clothing = clothes.find(c => c.id === current_store.product_id)

    return (
        <div className=' p-6 flex flex-col border-b-[0.1rem] lg:border-r-[0.1rem]  lg:border-r-slate-200 border-b-slate-200 justify-center items-center'>
            <img src='http://localhost:3000/img/bluza.png' className='w-40' />
            <h1 className='font-poppins '>ИМЕ : "{current_clothing?.name}"</h1>
            <h1 className='font-poppins text-red-400 font-bold '>СТАТУС : BLOCKED</h1>
            <h1 className='font-poppins pt-2'>ЗАБЕЛЕШКА</h1>
            <h1 className='font-poppins '>"{order.zabeleska}"</h1>
        </div>
    )
}

export default OdbienaNaracka