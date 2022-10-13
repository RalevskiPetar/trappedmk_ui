import React, { useState } from 'react'
import { BsCircle, BsCircleFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { create_Store } from '../../Redux/Store/Actions'
import { createClothes } from '../../Redux/Clothes/Actions'

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
  const [expanded, setExpanded] = useState(false)
  const [createProduct, setCreateProduct] = useState(false)
  const [clicked, setClicked] = useState(1)
  const [filterProducts, setFilterProducts] = useState(1)
  const product_data = useSelector(state => state.clothes.clothes.data)
  const sstore = useSelector(state => state.store.store.data.stores)
  const categories = useSelector(state => state.clothes.categories.data)
  const _orders = useSelector(state => state.orders.order.data)

  // const product_quantities = group_products(_store)
  // console.log(product_quantities)
  const [newProductQuantity, setNewProductQuantity] = useState("")
  const dispatch = useDispatch()
  const handleCreateQuantity = e => {
    e.preventDefault()
    const form = new FormData()
    form.append("product_id", clicked)
    form.append("quantity", newProductQuantity["quantity"])
    form.append("size", newProductQuantity["size"])
    dispatch(create_Store(form))

  }
  const handleChange = e => {
    setNewProductQuantity({ ...newProductQuantity, [e.target.name]: e.target.value })
  }
  const [newProduct, setNewProduct] = useState("")
  const [category_clicked, setCategoryClicked] = useState()

  const handleCreateProduct = e => {
    e.preventDefault()
    const form = new FormData()
    form.append("name", newProduct["name"])
    form.append("description", newProduct["description"])
    form.append("price", newProduct["price"])
    form.append("category_id", newProduct["category_id"])
    dispatch(createClothes(form))
  }
  const handleChangeProduct = e => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
  }

  console.log(_orders)

  const get_store_quantities = (store, orders) => {
    console.log(store, orders)
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
      <h1 onClick={e => setCreateProduct(!createProduct)} className='font-poppins text-center font-bold p-2 cursor-pointer'>• CREATE PRODUCT QUANTITY • CREATE PRODUCT •</h1>
      {createProduct == true ?
        <div className='flex flex-row w-screen'>
          <form onSubmit={e => handleCreateQuantity(e)} className='flex flex-col items-center gap-2 p-2 w-1/2'>
            <ul>
              {product_data?.map(pd => pd === null ? null : <li onClick={e => setClicked(pd.id)} className='flex flex-row gap-2 items-center lg:justify-center'>
                {clicked === pd.id ? <BsCircleFill size={10} /> : <BsCircle size={10} />}
                <h1>{pd.name}</h1>
              </li>)}

            </ul>
            <input onChange={e => handleChange(e)} name="size" className='font-poppins border-[0.1rem] outline-none border-slate-100 p-2 text-center w-1/4' type="text" placeholder="SIZE" />
            <p className='font-poppins text-slate-300'>( 1 = small , 2 = large  , 3 = extra-large)</p>
            <input onChange={e => handleChange(e)} name="quantity" className='font-poppins border-[0.1rem] outline-none border-slate-100 p-2 text-center w-1/4' type="text" placeholder="QUANTITY" />
            <button onClick={e => handleCreateQuantity(e)} className='font-poppins bg-black text-white  pl-4 pr-4 p-2 rounded-sm'>CREATE PRODUCT QUANTITY</button>
          </form>
          <form onClick={e => handleChangeProduct(e)} className='flex flex-col items-center gap-2 p-2 w-1/2'>
            <input onChange={e => handleChangeProduct(e)} name="name" className='font-poppins border-[0.1rem] outline-none border-slate-100 p-2 text-center w-1/4' type="text" placeholder="NAME" />
            <input onChange={e => handleChangeProduct(e)} name="description" className='font-poppins border-[0.1rem] outline-none border-slate-100 p-2 text-center w-1/4' type="text" placeholder="DESCRIPTION" />
            <input onChange={e => handleChangeProduct(e)} name="price" className='font-poppins border-[0.1rem] outline-none border-slate-100 p-2 text-center w-1/4' type="text" placeholder="PRICE" />
            <input name="category_id" className='font-poppins border-[0.1rem] outline-none border-slate-100 p-2 text-center w-1/4' type="text" placeholder="Category" />
            <div className='flex flex-row gap-1'>
              {categories.map(c =>
                <h1 onClick={e => setCategoryClicked(c.id)} name="category_id" className='border-[0.1rem] border-slate-200 p-1 pl-2 pr-2 font-poppins text-slate-400'>{c.name}</h1>
              )}

            </div>
            <h1 className='font-poppins text-slate-300'>* SELECT CATEGORY</h1>
            <button type='button' onClick={e => handleCreateProduct(e)} className='font-poppins bg-black text-white  pl-4 pr-4 p-2 rounded-sm'>CREATE PRODUCT</button>
          </form>
        </div>
        : null}
      <h1 onClick={e => setExpanded(!expanded)} className='font-poppins border-t-[0.1rem] border-b-[0.1rem] cursor-pointer text-center font-bold p-2'>• FILTER •</h1>
      {expanded == true ?
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




    </div>
  )
}

export default Magacin