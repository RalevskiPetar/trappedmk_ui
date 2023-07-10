import React, { useState } from 'react'
import { BsCircle, BsCircleFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { create_Store } from '../../Redux/Store/Actions'
import { createClothes, setClothesState } from '../../Redux/Clothes/Actions'
import { AiOutlineAppstoreAdd, AiOutlineCiCircle, AiOutlineFilter, AiTwotoneFilter } from 'react-icons/ai'
import { BiRadioCircle, BiRadioCircleMarked } from 'react-icons/bi'
import DoubleBubble from '../BarLoader'
import Modal from '../Modals/Modal'

const Magacin = () => {
  const sizes = [
    {
      id: 1,
      name: "SMALL"
    },
    {
      id: 2,
      name: "MEDIUM",
    },
    {
      id: 3,
      name: "LARGE"
    },
    {
      id: 4,
      name: "EXTRA-LARGE"
    }
  ]
  const dispatch = useDispatch()
  const [expanded, setExpanded] = useState(false)
  const [clicked, setClicked] = useState(1)
  const [filterProducts, setFilterProducts] = useState(1)
  const product_data = useSelector(state => state.clothes.clothes.data)
  const _product_data = useSelector(state => state.clothes.clothes)
  const clothesState = useSelector(state => state.clothes)
  const sstore = useSelector(state => state.store.store.data.stores)
  const _store = useSelector(state => state.store.store)
  const categories = useSelector(state => state.clothes.categories.data)
  const _orders = useSelector(state => state.orders.order.data)
  const reg_class = "border-[0.1rem] border-slate-200 p-1 pl-2 pr-2 font-poppins text-slate-400"
  const clicked_class = "border-[0.1rem] bg-slate-400 border-slate-200 p-1 pl-2 pr-2 font-poppins text-white"
  const [newProductQuantity, setNewProductQuantity] = useState("")
  const [submittedProduct, setSubmittedProduct] = useState(false)
  const [submittedQuantity, setSubmittedQuantity] = useState(false)
  const [newProduct, setNewProduct] = useState("")
  const [category_clicked, setCategoryClicked] = useState(1)
  const [gender, setGender] = useState(null)
  

  const handleCreateQuantity = e => {
    e.preventDefault()
    setSubmittedQuantity(true)
    const form = new FormData()
    form.append("product_id", clicked)
    form.append("quantity", newProductQuantity["quantity"])
    form.append("size", newProductQuantity["size"])
    dispatch(create_Store(form))

  }
  const handleChange = e => {
    setNewProductQuantity({ ...newProductQuantity, [e.target.name]: e.target.value })
    setSubmittedQuantity(false)
  }

  const handleCreateProduct = e => {
    setSubmittedProduct(true)
    e.preventDefault()
    const form = new FormData()
    form.append("name", newProduct["name"])
    form.append("description", newProduct["description"])
    form.append("price", newProduct["price"])
    form.append("category_id", category_clicked)
    form.append("gender", gender)
    dispatch(createClothes(form))
  }
  const handleChangeProduct = e => {
    setSubmittedProduct(false)
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
  }

  console.log(submittedProduct)

  const get_store_quantities = (store, orders) => {
   
    let pending_items = 0
    let sold_items = 0
    for (const o of orders) {
      if (o.product_id !== store.id)
        continue
      if (o.order_id_stat === 7) {
        pending_items += o.quantity
      }
      else if (o.order_id_stat === 1) {
        sold_items += o.quantity
      }
    }

    return {
      "pending": pending_items,
      "sold": sold_items,
      "available": store.quantity - (pending_items + sold_items)
    }
 
  }
  return (
    <div>
      <div className='flex flex-row gap-1 justify-center items-center'>
      <AiOutlineAppstoreAdd size={20}/>
      <h1 onClick={e => setExpanded(1)} className='font-poppins text-center font-bold p-2 cursor-pointer'> CREATE PRODUCT QUANTITY</h1>
      </div>
      {expanded== 1 ? 
      <form onSubmit={e => handleCreateQuantity(e)} className='flex flex-col items-center gap-2 p-2 w-screen justify-center' >
      <ul>
        {product_data?.map(pd => pd === null ? null : <li onClick={e => setClicked(pd.id)} className='flex flex-row gap-2 items-center lg:justify-center'>
          {clicked === pd.id ? <BiRadioCircleMarked size={20} color='gray' /> : <BiRadioCircle size={20} color='gray' />}
          <h1 className='font-poppins text-slate-500'>{pd.name}</h1>
        </li>)}

      </ul>
      <input onChange={e => handleChange(e)} name="size" className='font-poppins border-[0.1rem] outline-none border-slate-100 p-2 text-center w-1/4' type="text" placeholder="SIZE" />
      <p className='font-poppins text-slate-300'>( 1 = small , 2 = large  , 3 = extra-large)</p>
      <input onChange={e => handleChange(e)} name="quantity" className='font-poppins border-[0.1rem] outline-none border-slate-100 p-2 text-center w-1/4' type="text" placeholder="QUANTITY" />
      <button onClick={e => handleCreateQuantity(e)} className='font-poppins bg-black text-white  pl-4 pr-4 p-2 rounded-sm transition-all hover:scale-105'>CREATE PRODUCT QUANTITY</button>
    </form> : null }  
      <div className='flex flex-row gap-1 justify-center items-center'>
      <AiOutlineAppstoreAdd size={20}/>
      <h1 onClick={e => setExpanded(2)} className='font-poppins text-center font-bold p-2 cursor-pointer'> CREATE PRODUCT</h1>
      </div>
      
      {expanded == 2 ?
          
          <form onClick={e => handleChangeProduct(e)} className='flex flex-col justify-center items-center gap-2 p-2 w-screen'>
            <input onChange={e => handleChangeProduct(e)} name="name" className='font-poppins border-[0.1rem] outline-none border-slate-100 p-2 text-center w-1/4' type="text" placeholder="NAME" />
            <input onChange={e => handleChangeProduct(e)} name="description" className='font-poppins border-[0.1rem] outline-none border-slate-100 p-2 text-center w-1/4' type="text" placeholder="DESCRIPTION" />
            <input onChange={e => handleChangeProduct(e)} name="price" className='font-poppins border-[0.1rem] outline-none border-slate-100 p-2 text-center w-1/4' type="text" placeholder="PRICE" />
            <div className='flex flex-row gap-1'>
              {categories.map(c =>
                <h1 onClick={e => setCategoryClicked(c.id)} name="category_id" className={category_clicked === c.id ? clicked_class : reg_class}>{c.name}</h1>
              )}

            </div>
            <h1 className='font-poppins text-slate-300'>* SELECT CATEGORY</h1>
            <div className='flex flex-col gap-1'>
              <div onClick={e => setGender(1)} className='flex flex-row gap-1 items-center'>
                {gender === 1 ? <BiRadioCircleMarked size={20} color='gray' /> : <BiRadioCircle color='gray' size={20} />}
                <h1 className='font-poppins text-slate-500'>Man</h1>
              </div>
              <div onClick={e => setGender(2)} className='flex flex-row gap-1 items-center'>
                {gender === 2 ? <BiRadioCircleMarked size={20} color='gray' /> : <BiRadioCircle size={20} color='gray' />}
                <h1 className='font-poppins text-slate-500'>Woman</h1>
              </div>
              <div onClick={e => setGender(3)} className='flex flex-row gap-1 items-center'>
                {gender === 3 ? <BiRadioCircleMarked size={20} color='gray' /> : <BiRadioCircle size={20} color='gray' />}
                <h1 className='font-poppins text-slate-500'>Unisex</h1>
              </div>
            </div>
            <h1 className='font-poppins text-slate-300'>* SELECT SEX</h1>

            <button type='button' onClick={e => handleCreateProduct(e)} className='font-poppins bg-black text-white  pl-4 pr-4 p-2 rounded-sm transition-all hover:scale-105'>CREATE PRODUCT</button>
          </form>
      
        : null}
      <div className='flex flex-row gap-1 items-center justify-center mb-10'>
      {expanded === 3 ? <AiOutlineFilter size={20} /> : <AiTwotoneFilter size={20}/> }
      <h1 onClick={e => setExpanded(3)} className='font-poppins cursor-pointer text-center font-bold p-2 '> FILTER </h1>
      </div>  
      {expanded == 3 ?
        <div >
          <ul className='font-poppins p-4 animate-fade-in-down '>
            {product_data?.map(pd => <li onClick={e => setFilterProducts(pd.id)} className='flex flex-row gap-2 items-center lg:justify-center'>
              {filterProducts === pd.id ? <BsCircleFill size={10} /> : <BsCircle size={10} />}
              <h1>{pd.name}</h1>
            </li>)}



          </ul>
        </div>
        : null}
      {sstore.sort((a, b) => a.id > b.id ? 1 : -1).filter(s => s.product_id === filterProducts).map(ss => <div className=' p-6 flex flex-col border-b-[0.1rem] border-b-slate-200 justify-center items-center'>
        <img src='http://localhost:3000/img/bluzadva.png' className='w-20 lg:w-40' />
        <h1 className='font-poppins text-red-400 font-bold '>SIZE : {sizes?.find(size => size.id == ss.size)?.name}</h1>
        <div className='flex flex-row gap-1 w-screen justify-center m-1'>
          <h1 className='font-poppins bg-emerald-400 rounded-lg pl-4 pr-4 p-1 font-bold w-1/12 text-center '>Available</h1>
          <h1 className='font-poppins bg-emerald-400 rounded-lg pl-4 pr-4 p-1 font-bold w-1/12 text-center'>{get_store_quantities(ss, _orders)["available"]}</h1>
        </div>
        <div className='flex flex-row gap-1 w-screen justify-center m-1'>
          <h1 className='font-poppins bg-blue-400 rounded-lg pl-4 pr-4 p-1 font-bold w-1/12 text-center '>Already Sold</h1>
          <h1 className='font-poppins bg-blue-400 rounded-lg pl-4 pr-4 p-1 font-bold w-1/12 text-center'>{get_store_quantities(ss, _orders)["sold"]}</h1>
        </div>
        <div className='flex flex-row gap-1 w-screen justify-center m-1'>
          <h1 className='font-poppins bg-orange-400 rounded-lg pl-4 pr-4 p-1 font-bold w-1/12 text-center '>Pending</h1>
          <h1 className='font-poppins bg-orange-400 rounded-lg pl-4 pr-4 p-1 font-bold w-1/12 text-center'>{get_store_quantities(ss, _orders)["pending"]}</h1>
        </div>
      </div>)

      }
      {_product_data.createStatus === "Success" && submittedProduct === true ? <Modal message={"Успешно креиравте нов продукт."} /> : null}
      {_store.createStatus === "Success" && submittedQuantity === true ? <Modal message={"Успешно додадовте количина за продуктот."}/> : null}


    </div>
  )
}

export default Magacin