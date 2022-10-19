import React , { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsCircle, BsCircleFill } from 'react-icons/bs'
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md'
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
      <input onChange={inputHandler}  className=' border-[0.1rem]  border-slate-300 p-2 w-2/4 shadow-sm text-center mt-4 mb-4 outline-none font-poppins rounded-l-lg' placeholder='search'/>
      <AiOutlineSearch className='bg-slate-900 text-[2.71rem] p-2 rounded-r-lg' color='white' />
      </div>
      <div className='w-screen grid grid-cols-4 items-center  overflow-x-hidden'>
         {filteredClothes.map(c => 
          <div className='flex items-center bg-slate-50 justify-between p-4 border-[0.1rem] border-slate-150'>
          <MdOutlineCheckBoxOutlineBlank />
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