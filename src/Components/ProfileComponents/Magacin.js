import React, { useState } from 'react'
import { BsCircle, BsCircleFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { create_Store } from '../../Redux/Store/Api'

const Magacin = () => {
  const sizes = [
    {
      id : 1,
      name: "SMALL"
    },
    {
      id : 2,
      name: "LARGE"
    },
    {
      id : 3,
      name: "EXTRA-LARGE"
    }
  ]
  const [ expanded , setExpanded] = useState(false)
  const [ createProduct , setCreateProduct ] = useState(false)
  const [ clicked , setClicked ] = useState(1)
  const [filterProducts , setFilterProducts] = useState(1)
  const product_data = useSelector(state => state.clothes.clothes.data)
  const _store = useSelector(state => state.store.store.data.stores)
  const [ newProductQuantity , setNewProductQuantity] = useState("")
  const dispatch = useDispatch()
  const handleCreateQuantity = e => {
    e.preventDefault()
    const form = new FormData()
    form.append("color" , newProductQuantity["color"])
    form.append("product_id" , clicked)
    form.append("quantity" , newProductQuantity["quantity"])
    form.append("size" , newProductQuantity["size"])
    dispatch(create_Store(form))

  }
  const handleChange = e => {
    setNewProductQuantity({...newProductQuantity , [e.target.name] : e.target.value})
  }
  // const final_store = _store.reduce((prev, { id , quantity }) => {
  //   prev[id] == prev[id] ? prev[id] + quantity : quantity;
  //   return prev;
  // }, {});
   console.log(_store)
  return (
    <div>
      <h1 onClick={e=> setCreateProduct(!createProduct)} className='font-poppins text-center font-bold p-2 cursor-pointer'>• CREATE PRODUCT QUANTITY • CREATE PRODUCT •</h1>
      {createProduct == true ? 
      <div className='flex flex-row w-screen'>
        <form onSubmit={e => handleCreateQuantity(e)} className='flex flex-col items-center gap-2 p-2 w-1/2'>
       <ul>
       {product_data["All Products"].map(pd => <li onClick={e => setClicked(pd.id)} className='flex flex-row gap-2 items-center lg:justify-center'>
       {clicked === pd.id ? <BsCircleFill size={10} /> : <BsCircle size={10} />}
              <h1>{pd.name}</h1>
            </li>)}
            
       </ul>
       <input onChange={e => handleChange(e)} name="size" className='font-poppins border-[0.1rem] outline-none border-slate-100 p-2 text-center w-1/4' type="text" placeholder="SIZE"/>
       <p className='font-poppins text-slate-300'>( 1 = small , 2 = large  , 3 = extra-large)</p>
       <input onChange={e => handleChange(e)}  value={newProductQuantity["quantity"]} className='font-poppins border-[0.1rem] outline-none border-slate-100 p-2 text-center w-1/4' type="text" placeholder="QUANTITY"/>
       <input onChange={e => handleChange(e)} name="color"  className='font-poppins border-[0.1rem] outline-none border-slate-100 p-2 text-center w-1/4' type="text" placeholder="COLOR"/>
       <button onClick={e => handleCreateQuantity(e)} className='font-poppins bg-black text-white  pl-4 pr-4 p-2 rounded-sm'>CREATE PRODUCT QUANTITY</button>
      </form> 
      <div className='flex flex-col items-center gap-2 p-2 w-1/2'>
      <input className='font-poppins border-[0.1rem] outline-none border-slate-100 p-2 text-center w-1/4' type="text" placeholder="NAME"/>
      <input className='font-poppins border-[0.1rem] outline-none border-slate-100 p-2 text-center w-1/4' type="text" placeholder="DESCRIPTION"/>
      <input className='font-poppins border-[0.1rem] outline-none border-slate-100 p-2 text-center w-1/4' type="text" placeholder="PRICE"/>
      <input className='font-poppins border-[0.1rem] outline-none border-slate-100 p-2 text-center w-1/4' type="text" placeholder="SIZE"/>
      <button className='font-poppins bg-black text-white  pl-4 pr-4 p-2 rounded-sm'>CREATE PRODUCT</button>
     </div> 
      </div>
      : null}
      <h1 onClick={e => setExpanded(!expanded)} className='font-poppins border-t-[0.1rem] border-b-[0.1rem] cursor-pointer text-center font-bold p-2'>• FILTER •</h1>
         {expanded == true ? 
         <div >
          <ul className='font-poppins p-4 animate-fade-in-down '>
          {product_data["All Products"].map(pd => <li onClick={e => setFilterProducts(pd.id) }  className='flex flex-row gap-2 items-center lg:justify-center'>
               {filterProducts === pd.id ? <BsCircleFill size={10} /> : <BsCircle size={10} />}
              <h1>{pd.name}</h1>
            </li>)}
           
        
    
          </ul>
         </div> 
         : null}
       {_store.filter(s => s.product_id === filterProducts).map(ss => <div className=' p-6 flex flex-col border-b-[0.1rem] border-b-slate-200 justify-center items-center'>
        <img  src='http://localhost:3000/img/bluzadva.png' className='w-20 lg:w-40' />
        <h1 className='font-poppins lg:font-bold'>" {product_data["All Products"]?.find(ap => ap.id == ss.id)?.name} "</h1>
        <h1 className='font-poppins text-red-400 font-bold '>{sizes?.find(size => size.id == ss.size)?.name}</h1>
        <div className='flex flex-row gap-1 w-screen justify-center m-1'>
        <h1 className='font-poppins bg-emerald-400 rounded-lg pl-4 pr-4 p-1 font-bold w-1/12 text-center '>Available</h1>
        <h1 className='font-poppins bg-emerald-400 rounded-lg pl-4 pr-4 p-1 font-bold w-1/12 text-center'>{ss.quantity}</h1>
        </div>
        <div className='flex flex-row gap-1 w-screen justify-center m-1'>
        <h1 className='font-poppins bg-blue-400 rounded-lg pl-4 pr-4 p-1 font-bold w-1/12 text-center '>Already Sold</h1>
        <h1 className='font-poppins bg-blue-400 rounded-lg pl-4 pr-4 p-1 font-bold w-1/12 text-center'>{0}</h1>
        </div>
        <div className='flex flex-row gap-1 w-screen justify-center m-1'>
        <h1 className='font-poppins bg-orange-400 rounded-lg pl-4 pr-4 p-1 font-bold w-1/12 text-center '>Pending</h1>
        <h1 className='font-poppins bg-orange-400 rounded-lg pl-4 pr-4 p-1 font-bold w-1/12 text-center'>{0}</h1>
        </div>
     </div>)
        
        }
        
        
        
        
    </div>
  )
}

export default Magacin