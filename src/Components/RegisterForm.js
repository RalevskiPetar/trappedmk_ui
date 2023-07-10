import React , { useState } from 'react'
import { BiLockAlt } from 'react-icons/bi'
import { FiMail , FiUser } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { AiOutlinePhone } from 'react-icons/ai'
import { BsFileEarmarkPerson } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser, createUser } from '../Redux/Users/Actions'
import { Navigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
    const [ newUser , setNewUser] = useState("")
    const user = useSelector(state => state?.user)
    const [ submitted , setSubmitted] = useState(false)
    const dispatch = useDispatch()
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData()
        form.append("name" , newUser["name"])
        form.append("surname" , newUser["surname"])
        form.append("address" , newUser["address"])
        form.append("email" , newUser["email"])
        form.append("phone" , newUser["phone"])
        form.append("password" , newUser["password"])
        form.append("usertype_id" , 2)
        setSubmitted(true)
        dispatch(createUser(form))

    }
    const handleChange = e => {
        setNewUser({...newUser , [e.target.name] : e.target.value})
    }
   
  return (
    <form onSubmit={e => handleRegister(e)}  className=' justify-center h-full w-screen flex flex-col gap-4  items-center mb-6 lg:z-10 lg:bg-opacity-40 lg:bg-white lg:placeholder:text-white lg:bg-backdrop-blur-md lg:w-1/3 lg:drop-shadow-lg lg:h-[95vh] lg:rounded-md'>
    <div className='lg:flex lg:flex-col lg:items-center lg:p-4  hidden lg:mb-12'>
                <img src='http://localhost:3000/img/logo.png ' className=' lg:w-[14rem]' />
                <h1 className='font-poppins text-[0.7rem] text-black font-bold lg:text-[1rem] hidden'>since 2018</h1>
            </div>
        <div  className='flex flex-row justify-center items-center w-screen lg:w-full  '>
        <FiUser  className='border-b-2 border-b-zinc-300 w-1/6 p-1 mb-[0.2rem] text-zinc-600 lg:text-white'  size={30}/>
        <input value={newUser["name"]} onChange={e => handleChange(e)}  name="name" className='border-b-2 border-b-zinc-300 w-2/4 font-poppins outline-none lg:placeholder:text-white lg:w-1/2 lg:text-white lg:bg-transparent' type="text" placeholder="name" />
        </div>
        <div  className='flex flex-row justify-center items-center w-screen lg:w-full '>
        <BsFileEarmarkPerson  className='border-b-2 border-b-zinc-300 w-1/6 p-1 mb-[0.2rem] text-zinc-600 lg:text-white'  size={30}/>
        <input onChange={e => handleChange(e)}   name="surname" className='border-b-2 border-b-zinc-300 w-2/4 font-poppins outline-none lg:w-1/2 lg:text-white lg:placeholder:text-white lg:bg-transparent' type="text" placeholder="surname" />
        </div>
        <div  className='flex flex-row justify-center items-center w-screen lg:w-full'>
        <HiOutlineLocationMarker  className='border-b-2 border-b-zinc-300 w-1/6 p-1 mb-[0.3rem] text-zinc-600 lg:text-white'  size={30}/>
        <input onChange={e => handleChange(e)}  name="address" className='border-b-2 border-b-zinc-300 w-2/4 font-poppins outline-none lg:w-1/2 lg:text-white lg:placeholder:text-white lg:bg-transparent' type="text" placeholder="address" />
        </div>
        <div  className='flex flex-row justify-center items-center w-screen lg:w-full'>
        <FiMail  className='border-b-2 border-b-zinc-300 w-1/6 p-1 mb-[0.2rem] text-zinc-600 lg:text-white' size={30}/>
        <input onChange={e => handleChange(e)}   name="email" className='border-b-2 border-b-zinc-300 w-2/4 font-poppins outline-none lg:w-1/2 lg:text-white lg:placeholder:text-white lg:bg-transparent' type="text" placeholder="email" />
        </div>
        <div  className='flex flex-row justify-center items-center w-screen lg:w-full'>
        <AiOutlinePhone  className='border-b-2 border-b-zinc-300 w-1/6 p-1 mb-[0.3rem] text-zinc-600 lg:text-white' size={30}/>
        <input onChange={e => handleChange(e)} name="phone" className='border-b-2 border-b-zinc-300 w-2/4 font-poppins outline-none lg:w-1/2 lg:text-white lg:placeholder:text-white lg:bg-transparent' type="text" placeholder="phone" />
        </div>

       <div className='flex flex-row justify-center  items-center w-screen lg:w-full'>
       <BiLockAlt className='border-b-2 border-b-zinc-300 w-1/6 mb-[0.25rem] p-1 text-zinc-600 lg:text-white'  size={30}/>
        <input onChange={e => handleChange(e)} name="password" type="password" placeholder="password" className='w-2/4 outline-none  border-b-2 font-poppins lg:placeholder:text-white  border-b-zinc-300 lg:w-1/2 lg:text-white lg:bg-transparent' />
       </div>
       <div className='flex flex-row justify-center  items-center w-screen lg:w-full'>
       <BiLockAlt className='border-b-2 border-b-zinc-300 w-1/6 mb-[0.25rem] p-1 text-zinc-600 lg:text-white'  size={30}/>
        <input onChange={e => handleChange(e)} name="repeatpassword" type="password" placeholder="repeat the password" className='w-2/4 outline-none lg:placeholder:text-white  border-b-2 font-poppins  border-b-zinc-300 lg:w-1/2 lg:text-white lg:bg-transparent' />
       </div>
      
        <button onClick={e => handleRegister(e)} className='text-white w-2/3 lg:w-1/2 font-poppins bg-black lg:bg-transparent lg:border-[0.1rem] lg:hover:border-black p-2 rounded-sm lg:hover:bg-black  lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1 lg:hover:scale-110 lg:mt-10 '>REGISTER</button>
       
        {user.user.createStatus == "Success" ? <p className="font-poppins text-green-500 font-bold">User Created</p> : user.user?.createStatus == "Fail" ? <p className="font-poppins text-red-500 font-bold">Something went wrong please refresh the page!</p> : null  }
     <div className='font-poppins font-bold justify-start p-2 lg:mb-1 mb-10'>
     <Link to="/login" ><h1>back to login</h1></Link>
     </div>
    </form>
  )
}

export default RegisterForm