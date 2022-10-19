import React , { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsCircle, BsCircleFill } from 'react-icons/bs'
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md'
import { useSelector } from 'react-redux'
import UploadImage from '../UploadImage'
const Sliki = () => {
  const [ clicked , setClicked ] = useState(0)
  const [search , setSearch] = useState("")
  const clothes = useSelector(state => state.clothes.clothes.data)
  const inputHandler = (e) => {
    var lowercase = e.target.value.toLowerCase();
    setSearch(lowercase)
  }
  console.log(clicked)
  const filteredClothes = clothes.filter((c) => {
    if(search === '') {
      return c.name
    }
    else {
      return c.name.toString().toLowerCase().includes(search)
    }
  })
  return (
    <div className='flex flex-col items-center  '>
      <div className='flex flex-row w-screen items-center justify-center'>
      <input onChange={inputHandler}  className=' border-t-[0.1rem] border-b-[0.1rem] border-l-[0.1rem]    border-l-slate-300 border-t-slate-300  border-b-slate-300   p-2 w-2/4 shadow-sm text-center mt-4 mb-4 outline-none font-poppins rounded-l-full' placeholder='search'/>
      <AiOutlineSearch className='border-r-slate-300 border-r border-t-slate-300 border-t border-b-slate-300 border-b text-[2.71rem]  p-2 rounded-r-full' color='darkgray' />
      </div>
      <div  className='w-screen grid grid-cols-4 items-center  overflow-x-hidden'>
         {filteredClothes.map(c => 
          <div onClick={e => setClicked(c.id)} className='flex items-center bg-slate-50 justify-between p-4 border-[0.1rem] border-slate-150'>
          { c.id === clicked ? <MdOutlineCheckBox size={22}  /> : <MdOutlineCheckBoxOutlineBlank size={22} />}
          <h1 className='font-poppins text-slate-400'>"{c.name}"</h1>
          <img src='http://localhost:3000/img/bluza.png' className='w-[6rem]' />
         </div>
          )}
         
    </div>
        <UploadImage />
    </div>
  )
}

export default Sliki