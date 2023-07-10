import React, { useState } from 'react'
import { BiLockAlt } from 'react-icons/bi'
import { FiMail } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { login } from '../Redux/Users/Actions'

const LoginFrom = () => {
    const user = useSelector(state => state?.user)
    const [submitted, setSubmitted] = useState(false)
    const [slogin, setLogin] = useState({
        email: "",
        password: ""

    })
    const dispatch = useDispatch()
    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData()
        form.append("email", slogin["email"])
        form.append("password", slogin["password"])
        setSubmitted(true)
        console.log(form)
        dispatch(login(form))

    }

    const handleChange = e => {
        setLogin({ ...slogin, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={e => handleLogin(e)} className=' justify-center h-full w-screen flex flex-col gap-4  items-center lg:z-10 lg:bg-opacity-40 lg:bg-white lg:bg-backdrop-blur-md lg:w-1/3 lg:drop-shadow-lg lg:h-3/4 lg:rounded-md'>
           
            <div className='lg:flex lg:flex-col lg:items-center lg:p-4  hidden lg:mb-12'>
                <img src='http://localhost:3000/img/logo.png ' className=' lg:w-[14rem]' />
                <h1 className='font-poppins text-[0.7rem] text-black font-bold lg:text-[1rem] hidden'>since 2018</h1>
            </div>
            <div className='flex flex-row justify-center items-center w-screen '>
                <FiMail className='border-b-2 border-b-zinc-300 w-2/14 p-1 mb-[0.3rem] text-zinc-600 lg:text-white'  size={30} />
                <input onChange={e => handleChange(e)} value={slogin["email"] || ""} name="email" className='border-b-2 border-b-zinc-300 w-3/5 font-poppins outline-none lg:w-1/6 lg:text-white lg:bg-transparent lg:placeholder:text-white' type="text" placeholder="Email" />
            </div>
            <div className='flex flex-row justify-center  items-center w-screen '>
                <BiLockAlt className='border-b-2 border-b-zinc-300 w-2/14 mb-[0.25rem] p-1 lg:text-white text-zinc-600'  size={30} />
                <input onChange={e => handleChange(e)} value={slogin["password"]} name="password" className='border-b-2 border-b-zinc-300 lg:bg-transparent lg:text-white lg:w-1/6 w-3/5 font-poppins outline-none lg:placeholder:text-white' type="password" placeholder="Password" />
            </div>
            {/* <h1 className='ml-[7rem] lg:text-black font-bold font-poppins lg:pb-2 lg:ml-[12rem] text-sm'>Forgot your password?</h1> */}
            <div className='flex w-screen justify-center items-center lg:w-1/3 lg:gap-6 flex-col lg:flex lg:flex-row '>
            
            <button onClick={e => handleLogin(e)} className=' w-2/3 font-poppins text-black lg:text-white border-[0.1rem] border-zinc-800 p-2 rounded-sm lg:hover:bg-black lg:hover:text-white lg:hover:border-[0.1rem] lg:hover:border-black lg:border-white lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1 lg:hover:scale-110 lg:pl-7 lg:pr-7 '>LOGIN</button>
            <h1 className='font-poppins text-zinc-900 lg:text-white  text-center'>or</h1>
            <Link className=' w-2/3 font-poppins text-white bg-black  lg:text-white lg:border-[0.1rem] lg:bg-transparent p-2 rounded-sm lg:hover:bg-black lg:hover:text-white lg:hover:border-[0.1rem] lg:hover:border-black lg:border-white lg:transition lg:ease-in-out lg:delay-150  lg:hover:-translate-y-1 lg:hover:scale-110 lg:pl-4 lg:pr-4 ' to="/register"><button className='text-center w-full  '>REGISTER</button></Link>
            {/* {currentUser != null ? <Navigate replace to="/profile" /> : null}
         {error == true ? <h1>Invalid username or password</h1> : null} */}
            {submitted === true ? user.user.createStatus === "Success" ?
                <Navigate replace to="/profile" />:
                user.user.createStatus === "Fail" ?
                    <p className='font-poppins lg:hidden'>Invalid Email or Password!</p> : null : null}
            </div>
            {user.user.createStatus === "Fail" ? <p className='font-poppins text-center '>Invalid Email or Password!</p> : null}
        </form>
    )
}

export default LoginFrom